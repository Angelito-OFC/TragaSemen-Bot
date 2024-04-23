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
│ 𝑴𝒆𝒏𝒖-𝑨𝒏𝒊𝒎𝒆
•───────•✦🍆✦•──────•
│🌸 𝒍𝒐𝒍𝒊𝒗𝒊𝒅
│🌸 𝒍𝒐𝒍𝒊
│🌸 𝒑𝒑𝒄𝒐𝒖𝒑𝒍𝒆
│🌸 𝒏𝒆𝒌𝒐
│🌸 𝒘𝒂𝒊𝒇𝒖
│🌸 𝒂𝒌𝒊𝒓𝒂
│🌸 𝒂𝒌𝒊𝒚𝒂𝒎𝒂
│🌸 𝒂𝒏𝒏𝒂
│🌸 𝒂𝒔𝒖𝒏𝒂
│🌸 𝒂𝒚𝒖𝒛𝒂𝒘𝒂
│🌸 𝒃𝒐𝒓𝒖𝒕𝒐
│🌸 𝒄𝒉𝒊𝒉𝒐
│🌸 𝒄𝒉𝒊𝒕𝒐𝒈𝒆
│🌸 𝒅𝒆𝒊𝒅𝒂𝒓𝒂
│🌸 𝒆𝒓𝒛𝒂
│🌸 𝒆𝒍𝒂𝒊𝒏𝒂
│🌸 𝒆𝒃𝒂
│🌸 𝒆𝒎𝒊𝒍𝒊𝒂
│🌸 𝒉𝒆𝒔𝒕𝒊𝒂
│🌸 𝒉𝒊𝒏𝒂𝒕𝒂
│🌸 𝒊𝒏𝒐𝒓𝒊
│🌸 𝒊𝒔𝒖𝒛𝒖
│🌸 𝒊𝒕𝒂𝒄𝒉𝒊
│🌸 𝒊𝒕𝒐𝒓𝒊
│🌸 𝒌𝒂𝒈𝒂
│🌸 𝒌𝒂𝒈𝒖𝒓𝒂
│🌸 𝒌𝒂𝒐𝒓𝒊
│🌸 𝒌𝒆𝒏𝒆𝒌𝒊
│🌸 𝒌𝒐𝒕𝒐𝒓𝒊
│🌸 𝒌𝒖𝒓𝒖𝒎𝒊
│🌸 𝒎𝒂𝒅𝒂𝒓𝒂
│🌸 𝒎𝒊𝒌𝒂𝒔𝒂
│🌸 𝒎𝒊𝒌𝒖
│🌸 𝒎𝒊𝒏𝒂𝒕𝒐
│🌸 𝒏𝒂𝒓𝒖𝒕𝒐
│🌸 𝒏𝒆𝒛𝒖𝒌𝒐
│🌸 𝒔𝒂𝒈𝒊𝒓𝒊
│🌸 𝒔𝒂𝒔𝒖𝒌𝒆
│🌸 𝒔𝒂𝒌𝒖𝒓𝒂
│🌸 𝒄𝒐𝒔𝒑𝒍𝒂𝒚
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
handler.command = /^(menuanimes|menúanimes)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
