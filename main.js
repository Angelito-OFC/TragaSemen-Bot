process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '1';
import './config.js';
import './api.js';
import {createRequire} from 'module';
import path, {join} from 'path';
import {fileURLToPath, pathToFileURL} from 'url';
import {platform} from 'process';
import * as ws from 'ws';
import {readdirSync, statSync, unlinkSync, existsSync, readFileSync, rmSync, watch} from 'fs';
import yargs from 'yargs';
import {spawn} from 'child_process';
import lodash from 'lodash';
import chalk from 'chalk';
import syntaxerror from 'syntax-error';
import {tmpdir} from 'os';
import {format} from 'util';
import P from 'pino';
import pino from 'pino';
import Pino from 'pino';
import {Boom} from '@hapi/boom';
import {makeWASocket, protoType, serialize} from './lib/simple.js';
import {Low, JSONFile} from 'lowdb';
import {mongoDB, mongoDBV2} from './lib/mongoDB.js';
import store from './lib/store.js';
const {proto} = (await import('@whiskeysockets/baileys')).default;
const {DisconnectReason, useMultiFileAuthState, MessageRetryMap, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, jidNormalizedUser, PHONENUMBER_MCC} = await import('@whiskeysockets/baileys');
import readline from 'readline';
import NodeCache from 'node-cache';
const {CONNECTING} = ws;
const {chain} = lodash;
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000;

protoType();
serialize();

global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') {
  return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString();
}; global.__dirname = function dirname(pathURL) {
  return path.dirname(global.__filename(pathURL, true));
}; global.__require = function require(dir = import.meta.url) {
  return createRequire(dir);
};

global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({...query, ...(apikeyqueryname ? {[apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]} : {})})) : '');

global.timestamp = {start: new Date};
global.videoList = [];
global.videoListXXX = [];

const __dirname = global.__dirname(import.meta.url);

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
global.prefix = new RegExp('^[' + (opts['prefix'] || '*/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-.@').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']');

global.db = new Low(/https?:\/\//.test(opts['db'] || '') ? new cloudDBAdapter(opts['db']) : new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}database.json`));

global.DATABASE = global.db; 
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) {
    return new Promise((resolve) => setInterval(async function() {
      if (!global.db.READ) {
        clearInterval(this);
        resolve(global.db.data == null ? global.loadDatabase() : global.db.data);
      }
    }, 1 * 1000));
  }
  if (global.db.data !== null) return;
  global.db.READ = true;
  await global.db.read().catch(console.error);
  global.db.READ = null;
  global.db.data = {
    users: {},
    chats: {},
    stats: {},
    msgs: {},
    sticker: {},
    settings: {},
    ...(global.db.data || {}),
  };
  global.db.chain = chain(global.db.data);
};
loadDatabase();

/* Creditos a Otosaka (https://wa.me/51993966345) */

global.chatgpt = new Low(new JSONFile(path.join(__dirname, '/db/chatgpt.json')));
global.loadChatgptDB = async function loadChatgptDB() {
  if (global.chatgpt.READ) {
    return new Promise((resolve) =>
      setInterval(async function() {
        if (!global.chatgpt.READ) {
          clearInterval(this);
          resolve( global.chatgpt.data === null ? global.loadChatgptDB() : global.chatgpt.data );
        }
      }, 1 * 1000));
  }
  if (global.chatgpt.data !== null) return;
  global.chatgpt.READ = true;
  await global.chatgpt.read().catch(console.error);
  global.chatgpt.READ = null;
  global.chatgpt.data = {
    users: {},
    ...(global.chatgpt.data || {}),
  };
  global.chatgpt.chain = lodash.chain(global.chatgpt.data);
};
loadChatgptDB();

/* ------------------------------------------------*/

global.authFile = `MysticSession`;
const {state, saveState, saveCreds} = await useMultiFileAuthState(global.authFile);
const msgRetryCounterMap = (MessageRetryMap) => { };
const msgRetryCounterCache = new NodeCache()
const {version} = await fetchLatestBaileysVersion();
let phoneNumber = global.botnumber

const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (texto) => new Promise((resolver) => rl.question(texto, resolver))

const connectionOptions = {
        logger: pino({ level: 'silent' }),
        printQRInTerminal: !pairingCode, 
        mobile: useMobile, 
        browser: ['Ubuntu', 'Chrome', '20.0.04'],
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
        },
        markOnlineOnConnect: true, 
        generateHighQualityLinkPreview: true, 
        getMessage: async (clave) => {
            let jid = jidNormalizedUser(clave.remoteJid)
            let msg = await store.loadMessage(jid, clave.id)
            return msg?.message || ""
        },
        msgRetryCounterCache,
        msgRetryCounterMap,
        defaultQueryTimeoutMs: undefined,   
        version
};

global.conn = makeWASocket(connectionOptions);

    if (pairingCode && !conn.authState.creds.registered) {
        if (useMobile) throw new Error('No se puede usar un código de emparejamiento con la API móvil')

        let numeroTelefono
        if (!!phoneNumber) {
            numeroTelefono = phoneNumber.replace(/[^0-9]/g, '')

            if (!Object.keys(PHONENUMBER_MCC).some(v => numeroTelefono.startsWith(v))) {
                console.log(chalk.bgBlack(chalk.redBright("Comience con el código de país de su número de WhatsApp.\nEjemplo: +56986469687")))
                process.exit(0)
            }
        } else {
            numeroTelefono = await question(chalk.bgBlack(chalk.greenBright(`Por favor, escriba su número de WhatsApp.\nEjemplo: +59168683798 : `)))
            numeroTelefono = numeroTelefono.replace(/[^0-9]/g, '')
            if (!Object.keys(PHONENUMBER_MCC).some(v => numeroTelefono.startsWith(v))) {
                console.log(chalk.bgBlack(chalk.redBright("Comience con el código de país de su número de WhatsApp.\nEjemplo: +59168683798")))

                numeroTelefono = await question(chalk.bgBlack(chalk.greenBright(`Por favor, escriba su número de WhatsApp.\nEjemplo: +59168683798 : `)))
                numeroTelefono = numeroTelefono.replace(/[^0-9]/g, '')
                rl.close()
            }
        }

        setTimeout(async () => {
            let codigo = await conn.requestPairingCode(numeroTelefono)
            codigo = codigo?.match(/.{1,4}/g)?.join("-") || codigo
            console.log(chalk.black(chalk.bgGreen(`Su código de emparejamiento: `)), chalk.black(chalk.white(codigo)))
        }, 3000)
    }

conn.isInit = false;
conn.well = false;
conn.logger.info(`[ ℹ️ ] Cargando...\n`);

if (!opts['test']) {
  if (global.db) {
    setInterval(async () => {
      if (global.db.data) await global.db.write();
      if (opts['autocleartmp'] && (global.support || {}).find) (tmp = [os.tmpdir(), 'tmp', 'jadibts'], tmp.forEach((filename) => cp.spawn('find', [filename, '-amin', '3', '-type', 'f', '-delete'])));
    }, 30 * 1000);
  }
}

if (opts['server']) (await import('./server.js')).default(global.conn, PORT);


/* Y ese fue el momazo mas bueno del mundo
        Aunque no dudara tan solo un segundo
        Mas no me arrepiento de haberme reido
        Por que la grasa es un sentimiento
        Y ese fue el momazo mas bueno del mundo
        Aunque no dudara tan solo un segundo
        que me arrepiento de ser un grasoso
        Por que la grasa es un sentimiento
        - El waza 👻👻👻👻 (Aiden)            
        
   Yo tambien se hacer momazos Aiden...
        ahi te va el ajuste de los borrados
        inteligentes de las sesiones y de los sub-bot
        By (Rey Endymion 👺👍🏼) 
        
   Ninguno es mejor que tilin god
        - atte: sk1d             */

function clearTmp() {
  const tmp = [join(__dirname, './tmp')];
  const filename = [];
  tmp.forEach((dirname) => readdirSync(dirname).forEach((file) => filename.push(join(dirname, file))));
  return filename.map((file) => {
    const stats = statSync(file);
    if (stats.isFile() && (Date.now() - stats.mtimeMs >= 1000 * 60 * 3)) return unlinkSync(file); // 3 minutes
    return false;
  });
}

function purgeSession() {
let prekey = []
let directorio = readdirSync("./MysticSession")
let filesFolderPreKeys = directorio.filter(file => {
return file.startsWith('pre-key-') /*|| file.startsWith('session-') || file.startsWith('sender-') || file.startsWith('app-') */
})
prekey = [...prekey, ...filesFolderPreKeys]
filesFolderPreKeys.forEach(files => {
unlinkSync(`./MysticSession/${files}`)
})
} 

function purgeSessionSB() {
try {
let listaDirectorios = readdirSync('./jadibts/');
let SBprekey = []
listaDirectorios.forEach(directorio => {
if (statSync(`./jadibts/${directorio}`).isDirectory()) {
let DSBPreKeys = readdirSync(`./jadibts/${directorio}`).filter(fileInDir => {
return fileInDir.startsWith('pre-key-') /*|| fileInDir.startsWith('app-') || fileInDir.startsWith('session-')*/
})
SBprekey = [...SBprekey, ...DSBPreKeys]
DSBPreKeys.forEach(fileInDir => {
unlinkSync(`./jadibts/${directorio}/${fileInDir}`)
})
}
})
if (SBprekey.length === 0) return; //console.log(chalk.cyanBright(`=> No hay archivos por eliminar.`))
} catch (err) {
console.log(chalk.bold.red(`[ ℹ️ ] Algo salio mal durante la eliminación, archivos no eliminados`))
}}

function purgeOldFiles() {
const directories = ['./MysticSession/', './jadibts/']
const oneHourAgo = Date.now() - (60 * 60 * 1000)
directories.forEach(dir => {
readdirSync(dir, (err, files) => {
if (err) throw err
files.forEach(file => {
const filePath = path.join(dir, file)
stat(filePath, (err, stats) => {
if (err) throw err;
if (stats.isFile() && stats.mtimeMs < oneHourAgo && file !== 'creds.json') { 
unlinkSync(filePath, err => {  
if (err) throw err
console.log(chalk.bold.green(`Archivo ${file} borrado con éxito`))
})
} else {  
console.log(chalk.bold.red(`Archivo ${file} no borrado` + err))
} }) }) }) })
}

async function connectionUpdate(update) {
  const {connection, lastDisconnect, isNewLogin} = update;
  global.stopped = connection;
  if (isNewLogin) conn.isInit = true;
  const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode;
  if (code && code !== DisconnectReason.loggedOut && conn?.ws.socket == null) {
    await global.reloadHandler(true).catch(console.error);
    //console.log(await global.reloadHandler(true).catch(console.error));
    global.timestamp.connect = new Date;
  }
  if (global.db.data == null) loadDatabase();
  if (update.qr != 0 && update.qr != undefined) {
    console.log(chalk.yellow('[ ℹ️ ] Escanea el código QR o introduce el código de emparejamiento en WhatsApp.'));
  }
  if (connection == 'open') {
    console.log(chalk.yellow('[ ℹ️ ] Conectado correctamente.'));
  }
let reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
if (connection === 'close') {
    if (reason === DisconnectReason.badSession) {
        conn.logger.error(`[ ⚠ ] Sesión incorrecta, por favor elimina la carpeta ${global.authFile} y escanea nuevamente.`);
        //process.exit();
    } else if (reason === DisconnectReason.connectionClosed) {
        conn.logger.warn(`[ ⚠ ] Conexión cerrada, reconectando...`);
        await global.reloadHandler(true).catch(console.error);
    } else if (reason === DisconnectReason.connectionLost) {
        conn.logger.warn(`[ ⚠ ] Conexión perdida con el servidor, reconectando...`);
        await global.reloadHandler(true).catch(console.error);
    } else if (reason === DisconnectReason.connectionReplaced) {
        conn.logger.error(`[ ⚠ ] Conexión reemplazada, se ha abierto otra nueva sesión. Por favor, cierra la sesión actual primero.`);
        //process.exit();
    } else if (reason === DisconnectReason.loggedOut) {
        conn.logger.error(`[ ⚠ ] Conexion cerrada, por favor elimina la carpeta ${global.authFile} y escanea nuevamente.`);
        //process.exit();
    } else if (reason === DisconnectReason.restartRequired) {
        conn.logger.info(`[ ⚠ ] Reinicio necesario, reinicie el servidor si presenta algún problema.`);
        await global.reloadHandler(true).catch(console.error);
    } else if (reason === DisconnectReason.timedOut) {
        conn.logger.warn(`[ ⚠ ] Tiempo de conexión agotado, reconectando...`);
        await global.reloadHandler(true).catch(console.error);
    } else {
        conn.logger.warn(`[ ⚠ ] Razón de desconexión desconocida. ${reason || ''}: ${connection || ''}`);
        await global.reloadHandler(true).catch(console.error);
    }
}
  /*if (connection == 'close') {
    console.log(chalk.yellow(`🚩ㅤConexion cerrada, por favor borre la carpeta ${global.authFile} y reescanee el codigo QR`));
  }*/
}

process.on('uncaughtException', console.error);

let isInit = true;
let handler = await import('./handler.js');
global.reloadHandler = async function(restatConn) {
  try {
    const Handler = await import(`./handler.js?update=${Date.now()}`).catch(console.error);
    if (Object.keys(Handler || {}).length) handler = Handler;
  } catch (e) {
    console.error(e);
  }
  if (restatConn) {
    const oldChats = global.conn.chats;
    try {
      global.conn.ws.close();
    } catch { }
    conn.ev.removeAllListeners();
    global.conn = makeWASocket(connectionOptions, {chats: oldChats});
    isInit = true;
  }
  if (!isInit) {
    conn.ev.off('messages.upsert', conn.handler);
    conn.ev.off('group-participants.update', conn.participantsUpdate);
    conn.ev.off('groups.update', conn.groupsUpdate);
    conn.ev.off('message.delete', conn.onDelete);
    conn.ev.off('call', conn.onCall);
    conn.ev.off('connection.update', conn.connectionUpdate);
    conn.ev.off('creds.update', conn.credsUpdate);
  }

  conn.welcome = '｡･ﾟ♡ﾟ･｡🍓｡･ﾟ♡ﾟ･｡🍒｡･ﾟ♡ﾟ🧸｡･\n┏━━•◦🩷𝗦𝗮𝗺𝗺𝘆𝗕𝗼𝘁-𝗠𝗗🧸•◦ ━━┓\n┃ 𝖡𝗂𝖾𝗇𝗏𝖾𝗇𝗂𝖽𝗈/𝖺:\n┃ @user\n┃ *𝖫𝖾𝖾 𝗅𝖺 𝖽𝖾𝗌𝖼 𝖽𝖾𝗅 𝗀𝗋𝗎𝗉𝗈 𝗒 𝖽𝗂𝗌𝖿𝗋𝗎𝗍𝖺*\n┃ *𝗍𝗎 𝖾𝗌𝗍𝖺𝖽𝗂𝖺*❤‍🩹\n┗━ •◦ ｡･ﾟ♡ﾟ･｡🍓｡･ﾟ♡ﾟ･｡🍒•◦ ━┛\n•𝖣𝖾𝗌𝖼: @desc';
  conn.bye = '｡･ﾟ♡ﾟ･｡🍓｡･ﾟ♡ﾟ･｡🍒｡･ﾟ♡ﾟ🧸｡･\n┏━━•◦🩷𝗦𝗮𝗺𝗺𝘆𝗕𝗼𝘁-𝗠𝗗🧸•◦ ━━┓\n┃ \n𝖺 𝖯𝗎𝗍@ 𝗆𝖾𝗇𝗈𝗌 : \n┃ @user \n┃ *𝖧𝖺𝗌𝗍𝖺 𝗇𝗎𝗇𝖼𝖺 𝗉𝗎𝗍𝖺 𝗋𝖺𝗍𝖺, 𝗇𝗈*\n┃ *𝗏𝗎𝖾𝗅𝗏𝖺𝗌 𝗉𝗈𝗋 𝗊𝗎𝖾 𝗇𝗈 𝗍𝖾*\n┃ *𝖤𝗑𝗍𝗋𝖺𝗇̃𝖺𝗋𝖾𝗆𝗈𝗌*\n┗━ •◦ ｡･ﾟ♡ﾟ･｡🍓｡･ﾟ♡ﾟ･｡🍒•◦ ━┛';
  conn.spromote = '｡･ﾟ♡ﾟ･｡🍓｡･ﾟ♡ﾟ･｡🍒｡･ﾟ♡ﾟ🧸｡･\n┏━━•◦🩷𝗦𝗮𝗺𝗺𝘆𝗕𝗼𝘁-𝗠𝗗🧸•◦ ━━┓\n┃ 𝖭𝗎𝖾𝗏𝗈 𝖺𝖽𝗆𝗂𝗇 𝖾𝗇 𝖾𝗅 𝗀𝗋𝗎𝗉𝗈: \n┃ @user \n┗━ •◦ ｡･ﾟ♡ﾟ･｡🍓｡･ﾟ♡ﾟ ･｡🍒•◦ ━━┛';
  conn.sdemote = '｡･ﾟ♡ﾟ･｡🍓｡･ﾟ♡ﾟ･｡🍒｡･ﾟ♡ﾟ🧸｡･\n┏━━•◦🩷𝗦𝗮𝗺𝗺𝘆𝗕𝗼𝘁-𝗠𝗗🧸•◦ ━┓\n┃ @user \n ┃ 𝖸𝖺 𝗇𝗈 𝖾𝗋𝖾𝗌 𝖺𝖽𝗆𝗂𝗇 𝖽𝖾𝗅 𝗀𝗋𝗎𝗉𝗈. \n┗━ •◦ ｡･ﾟ♡ﾟ･｡🍓｡･ ﾟ♡ﾟ･｡🍒•◦ ━┛';
  conn.sDesc = '｡･ﾟ♡ﾟ･｡🍓｡･ﾟ♡ﾟ･｡🍒｡･ﾟ♡ﾟ🧸｡･\n┏━━•◦🩷𝗦𝗮𝗺𝗺𝘆𝗕𝗼𝘁-𝗠𝗗🧸•◦ ━━┓\n┃ 𝖲𝖾 𝗆𝗈𝖽𝗂𝖿𝗂𝖼𝗈 𝗅𝖺 𝖽𝖾𝗌𝖼 𝖽𝖾𝗅 𝗀𝗋𝗎𝗉𝗈\n┃ *𝖭𝗎𝖾𝗏𝖺 𝖽𝖾𝗌𝖼:* ❤‍🩹\n┗━ •◦ ｡･ﾟ♡ﾟ ･｡🍓 ｡･ﾟ♡ﾟ ･｡🍒•◦ ━┛\n @desc';
  conn.sSubject = '｡･ﾟ♡ﾟ･｡🍓｡･ﾟ♡ﾟ･｡🍒｡･ﾟ♡ﾟ🧸｡･\n┏━━•◦🩷𝗦𝗮𝗺𝗺𝘆𝗕𝗼𝘁-𝗠𝗗🧸•◦ ━━┓\n┃ 𝖲𝖾 𝗆𝗈𝖽𝗂𝖿𝗂𝖼𝗈 𝖾𝗅 𝗇𝗈𝗆𝖻𝗋𝖾 𝖽𝖾𝗅 𝗀𝗋𝗎𝗉𝗈\n┃ *𝗇𝗎𝖾𝗏𝗈 𝗇𝗈𝗆𝖻𝗋𝖾:*\n┃ @subject\n┗━ •◦ ｡･ﾟ♡ﾟ･｡ 🍓 ｡･ﾟ♡ﾟ･ ｡🍒•◦ ━┛';
  conn.sIcon = '｡･ﾟ♡ﾟ･｡🍓｡･ﾟ♡ﾟ･｡🍒｡･ﾟ♡ﾟ🧸｡･\n┏━━•◦🩷𝗦𝗮𝗺𝗺𝘆𝗕𝗼𝘁-𝗠𝗗🧸•◦ ━━┓\n┃ 𝖲𝖾 𝗁𝖺 𝗆𝗈𝖽𝗂𝖿𝗂𝖼𝖺𝖽𝗈 𝗅𝖺 𝗂𝗆𝖺𝗀𝖾𝗇 \n┃ *𝖽𝖾𝗅 𝗀𝗋𝗎𝗉𝗈*\n┗━ •◦ ｡･ﾟ♡ﾟ･｡ 🍓｡･ﾟ♡ﾟ･ ｡🍒 •◦  ━┛';
  conn.sRevoke = '｡･ﾟ♡ﾟ･｡🍓｡･ﾟ♡ﾟ･｡🍒｡･ﾟ♡ﾟ🧸｡･\n┏━━•◦🩷𝗦𝗮𝗺𝗺𝘆𝗕𝗼𝘁-𝗠𝗗🧸•◦ ━━┓\n┃ 𝖲𝖾 𝗁𝖺 𝗋𝖾𝗌𝗍𝖺𝖻𝗅𝖾𝖼𝗂𝖽𝗈 𝖾𝗅 𝗅𝗂𝗇𝗄 𝖽𝖾𝗅 𝗀𝗋𝗎𝗉𝗈\n┃ @revoke\n┗━ •◦  ｡･ﾟ♡ﾟ･｡🍓 ｡･ﾟ♡ﾟ･ ｡🍒 •◦ ━┛';