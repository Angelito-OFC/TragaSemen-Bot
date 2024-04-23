import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
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
│ 𝑴𝒆𝒏𝒖-𝑨𝒖𝒅𝒊𝒐𝒔
•───────•✦🍆✦•──────•
│🔊 𝑸𝒖𝒊𝒆𝒏 𝒆𝒔 𝒕𝒖 𝒔𝒆𝒎𝒑𝒂𝒊 𝒃𝒐𝒕𝒔𝒊𝒕𝒐 7𝒘7
│🔊 𝑻𝒆 𝒅𝒊𝒂𝒈𝒏𝒐𝒔𝒕𝒊𝒄𝒐 𝒄𝒐𝒏 𝒈𝒂𝒚
│🔊 𝑵𝒐 𝒅𝒊𝒈𝒂𝒔 𝒆𝒔𝒐 𝒑𝒂𝒑𝒖
│🔊 𝑨 𝒏𝒂𝒅𝒊𝒆 𝒍𝒆 𝒊𝒎𝒑𝒐𝒓𝒕𝒂
│🔊 𝑭𝒊𝒆𝒔𝒕𝒂 𝒅𝒆𝒍 𝒂𝒅𝒎𝒊𝒏
│🔊 𝑭𝒊𝒆𝒔𝒕𝒂 𝒅𝒆𝒍 𝒂𝒅𝒎𝒊𝒏𝒊𝒔𝒕𝒓𝒂𝒅𝒐𝒓
│🔊 𝑽𝒊𝒗𝒂𝒏 𝒍𝒐𝒔 𝒏𝒐𝒗𝒊𝒐𝒔
│🔊 𝑭𝒆𝒍𝒊𝒛 𝒄𝒖𝒎𝒑𝒍𝒆𝒂ñ𝒐𝒔
│🔊 𝑵𝒐𝒄𝒉𝒆 𝒅𝒆 𝒑𝒂𝒛
│🔊 𝑩𝒖𝒆𝒏𝒐𝒔 𝒅𝒊𝒂𝒔
│🔊 𝑩𝒖𝒆𝒏𝒐𝒔 𝒕𝒂𝒓𝒅𝒆𝒔
│🔊 𝑩𝒖𝒆𝒏𝒐𝒔 𝒏𝒐𝒄𝒉𝒆𝒔
│🔊 𝑨𝒖𝒅𝒊𝒐 𝒉𝒆𝒏𝒕𝒂𝒊
│🔊 𝑪𝒉𝒊𝒄𝒂 𝒍𝒈𝒂𝒏𝒕𝒆
│🔊 𝑭𝒆𝒍𝒊𝒛 𝒏𝒂𝒗𝒊𝒅𝒂𝒅
│🔊 𝑽𝒆𝒕𝒆 𝒂 𝒍𝒂 𝒗𝒓𝒈
│🔊 𝑷𝒂𝒔𝒂 𝒑𝒂𝒄𝒌 𝑩𝒐𝒕
│🔊 𝑨𝒕𝒆𝒏𝒄𝒊𝒐𝒏 𝒈𝒓𝒖𝒑𝒐
│🔊 𝑴𝒂𝒓𝒊𝒄𝒂 𝒒𝒖𝒊𝒆𝒏
│🔊 𝑴𝒖𝒓𝒊𝒐 𝒆𝒍 𝒈𝒓𝒖𝒑𝒐
│🔊 𝑶𝒉 𝒎𝒆 𝒗𝒆𝒏𝒈𝒐
│🔊 𝒕𝒊𝒐 𝒒𝒖𝒆 𝒓𝒊𝒄𝒐
│🔊 𝑽𝒊𝒆𝒓𝒏𝒆𝒔
│🔊 𝑩𝒂𝒏𝒆𝒂𝒅𝒐
│🔊 𝑺𝒆𝒙𝒐
│🔊 𝑯𝒐𝒍𝒂
│🔊 𝑼𝒏 𝒑𝒂𝒕𝒐
│🔊 𝑵𝒚𝒂𝒏𝒑𝒂𝒔𝒖
│🔊 𝑻𝒆 𝒂𝒎𝒐
│🔊 𝒀𝒂𝒎𝒆𝒕𝒆
│🔊 𝑩𝒂ñ𝒂𝒕𝒆
│🔊 𝑬𝒔 𝒑𝒖𝒕𝒐
│🔊 𝑳𝒂 𝒃𝒊𝒃𝒍𝒊𝒂
│🔊 𝑶𝒏𝒊𝒄𝒉𝒂𝒏
│🔊 𝑴𝒊𝒆𝒓𝒅𝒂 𝒅𝒆 𝑩𝒐𝒕
│🔊 𝑺𝒊𝒖𝒖𝒖
│🔊 𝑬𝒑𝒊𝒄𝒐
│🔊 𝑺𝒉𝒊𝒕𝒑𝒐𝒔𝒕
│🔊 𝑹𝒂𝒘𝒓
│🔊 𝑼𝒘𝑼
│🔊 :𝒄
│🔊 𝒂
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
    conn.reply(m.chat, '🐉 𝑬𝒔𝒕𝒆 𝒎𝒆𝒏𝒖 𝒕𝒊𝒆𝒏𝒆 𝒖𝒏 𝒆𝒓𝒓𝒐𝒓 𝒊𝒏𝒕𝒆𝒓𝒏𝒐, 𝒑𝒐𝒓 𝒍𝒐 𝒄𝒖𝒂𝒍 𝒏𝒐 𝒇𝒖𝒆 𝒑𝒐𝒔𝒊𝒃𝒍𝒆 𝒆𝒏𝒗𝒊𝒂𝒓𝒍𝒐 𝒓𝒆𝒑𝒐𝒓𝒕𝒂𝒍𝒐 𝒂𝒍 𝒄𝒓𝒆𝒂𝒅𝒐𝒓 𝒐 𝒂𝒍 𝒔𝒕𝒂𝒇𝒇.', m);
  }
};
handler.command = /^(menuaudio|menuaudios|menúaudios)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
