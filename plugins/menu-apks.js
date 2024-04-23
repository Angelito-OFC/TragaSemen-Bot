import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = imagen2;
    // let vn = './media/menu.mp3'
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `┌───────────────────┐
│╭•─────•✦🍆✦•─────•
│├🍆𝑯𝒐𝒍𝒂: @${m.sender.split`@`[0]}
│├🍆𝑶𝒘𝒏𝒆𝒓 𝒅𝒆𝒍 𝑩𝒐𝒕:
│├🍆wa.me/59894647611
│├🍆𝑩𝒐𝒕 𝒐𝒇𝒇:
│├🍆wa.me/
│├🍆𝑽𝒆𝒓𝒔𝒊𝒐𝒏: 𝟹.𝟸.𝟶
│├🍆𝑭𝒆𝒄𝒉𝒂: ${date}
│╰•─────•✦🍆✦•─────•
└───────────────────┘


•───────•✦🍆✦•──────•
│ Aviso
•───────•✦🍆✦•──────•
│ *Este es el menú*
│ *de apks premium por*
│ *el momento no hay muchas*
│ *apks pero se irá*
│ *se irán aumentando*
│ *poco a poco*
╰•───────•✦🍆✦•──────•


•───────•✦🍆✦•──────•
│ 𝑨𝒑𝒌𝒔 𝑷𝒓𝒆𝒎𝒊𝒖𝒎
•───────•✦🍆✦•──────•
│☁️ 𝑨𝒑𝒌𝒅𝒚𝒏𝒂𝒎𝒊𝒄𝒊𝒔𝒍𝒂𝒏𝒅
│☁️ 𝑨𝒑𝒌𝒄𝒂𝒑𝒄𝒖𝒕
│☁️ 𝑨𝒑𝒌𝒃𝒆𝒂𝒄𝒉𝒃𝒖𝒈𝒈𝒚
│☁️ 𝑨𝒑𝒌𝒎𝒊𝒏𝒆𝒄𝒓𝒂𝒇𝒕
│☁️ 𝑨𝒑𝒌𝒑𝒊𝒄𝒔𝒂𝒓𝒕
│☁️ 𝑨𝒑𝒌𝒑𝒐𝒑𝒑𝒚𝒑𝒍𝒂𝒚𝒕𝒊𝒎𝒆
│☁️ 𝑨𝒑𝒌𝒔𝒑𝒂𝒎
│☁️ 𝑨𝒑𝒌𝒔𝒑𝒐𝒕𝒊𝒇𝒚
│☁️ 𝑨𝒑𝒌𝒚𝒐𝒖𝒕𝒖𝒃𝒆𝒎𝒖𝒔𝒊𝒄 
╰•───────•✦🍆✦•──────•


•───────•✦🍆✦•──────•
│ Aviso
•───────•✦🍆✦•──────•
│ *Úsalo bajo tu propio*
│ *riesgo TragaSemen-Bot*
│ *no se hace responsable*
│ *de nada que haya*
│ *pasado con algún fallo*
│ *o problema que tenga*
╰•───────•✦🍆✦•──────•`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(Menuapks|menuapks|menuapk)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}