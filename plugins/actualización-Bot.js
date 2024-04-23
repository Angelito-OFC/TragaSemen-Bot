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
    const str = `┏━━━━━🍆𝑻𝒓𝒂𝒈𝒂𝑺𝒆𝒎𝒆𝒏-𝑩𝒐𝒕🍆━━━━┓
┃
┃ෆ _Tenemos novedades nuevas_
┃ෆ _en el bot TragaSemen tanto ya_
┃ෆ _disponibles y aún no_
┃ෆ _abajo una lista de lo nuevo_
┃
┃
┣・🍆• 𝑮𝒆𝒎𝒊𝒏𝒊 𝑰𝑨 (activo)
┣・🍆• 𝑨𝒖𝒅𝒊𝒐𝒔 𝑩𝒐𝒕 (activo)
┣・🍆• 𝒊𝒎𝒂𝒈𝒆𝒏𝒆𝒔 𝑰𝑨 (en proceso)
┣・🍆• 𝑷𝑫𝑭 𝑩𝒐𝒕 (en proceso)
┣・🍆• 𝑫𝒓𝒊𝒗𝒆𝒔 𝑩𝒐𝒕 (activo)
┣・🍆• +3 𝑪𝒐𝒎𝒂𝒏𝒅𝒐𝒔 🔞 (en proceso)
┃
┃
┃ෆ _Esperamos tener más comandos_
┃ෆ _disponibles para TragaSemen-Bot_
┃ෆ _y si me apoyas con una idea_
┃ෆ _para nuevos comandos para bot_
┃ෆ _me lo haces saber Ami privado_
┃ෆ _wa.me/59168683798_
┗━━━━━━━━━━━━━━━━━━━━━┛`.trim();
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
    conn.reply(m.chat, '𝑳𝒂 𝒍𝒊𝒔𝒕𝒂 𝒅𝒆 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒄𝒊𝒐𝒏 𝒔𝒐𝒃𝒓𝒆 𝒍𝒂 𝒂𝒄𝒕𝒖𝒂𝒍𝒊𝒛𝒂𝒄𝒊ó𝒏 𝒅𝒆 𝑳𝒖𝒄𝒌𝒚 𝑩𝒐𝒕 𝒗𝒆𝒓𝒔𝒊𝒐𝒏 3.2.0 📩 𝒔𝒊 𝒏𝒐 𝒔𝒆 𝒆𝒏𝒗𝒊𝒐 𝒓𝒆𝒑𝒐𝒓𝒕𝒂𝒍𝒐 𝒄𝒐𝒏 𝒆𝒍 𝒔𝒕𝒂𝒇𝒇 𝒐 𝒄𝒓𝒆𝒂𝒅𝒐𝒓 𝒅𝒆𝒍 𝒃𝒐𝒕', m);
  }
};
handler.command = /^(actbot|botact)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}