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
│ 𝑭𝒓𝒆𝒆 𝒇𝒊𝒓𝒆
•───────•✦🍆✦•──────•
│☁️ 𝒎𝒆𝒏𝒖𝒇𝒇
│☁️ 𝒃𝒆𝒓𝒎𝒖𝒅𝒂
│☁️ 𝒌𝒂𝒍𝒂𝒉𝒂𝒓𝒊
│☁️ 𝒂𝒍𝒑𝒆𝒔
│☁️ 𝒑𝒖𝒓𝒈𝒂𝒕𝒐𝒓𝒊𝒐
│☁️ 𝒏𝒆𝒙𝒕𝒆𝒓𝒓𝒂
│☁️ 𝒂𝒈𝒆𝒏𝒅𝒂𝒔𝒆𝒎𝒂𝒏𝒂𝒍
╰•───────•✦🍆✦•──────•


•───────•✦🍆✦•──────•
│ 𝑩𝒖𝒔𝒄𝒂𝒓 𝑽𝒔-𝑷𝒍𝒂𝒏𝒕𝒊𝒍𝒍𝒂𝒔
•───────•✦🍆✦•──────•
│🔱 𝒃𝒖𝒔𝒄𝒂𝒓𝒗𝒔𝒎𝒂𝒔𝒄
│🔱 𝒃𝒔𝒎𝒔𝒂𝒄
│🔱 𝒃𝒖𝒔𝒄𝒂𝒓𝒗𝒔𝒇𝒆𝒎
│🔱 𝒃𝒔𝒇𝒆𝒎
│🔱 𝒃𝒖𝒔𝒄𝒂𝒓𝒗𝒔𝒎𝒊𝒙𝒕𝒐
│🔱 𝒃𝒔𝒎𝒊𝒙𝒕𝒐
│🔱 𝒇𝒐𝒓𝒎𝒖𝒍𝒂𝒓𝒊𝒐
╰•───────•✦🍆✦•──────•


•───────•✦🍆✦•──────•
│ 𝑳𝒊𝒔𝒕𝒂𝒔-𝑭𝒆𝒎
•───────•✦🍆✦•──────•
│💟 𝒇𝒆𝒎𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐14
│💟 𝒇𝒆𝒎𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐16
│💟 𝒇𝒆𝒎𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐18
│💟 𝒇𝒆𝒎𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐20
│💟 𝒇𝒆𝒎𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐22
│💟 𝒇𝒆𝒎𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐00
│💟 𝒇𝒆𝒎𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐𝒗𝒔
│💟 𝒇𝒆𝒎𝒗𝒊𝒗𝒊𝒅𝒐14
│💟 𝒇𝒆𝒎𝒗𝒊𝒗𝒊𝒅𝒐16
│💟 𝒇𝒆𝒎𝒗𝒊𝒗𝒊𝒅𝒐18
│💟 𝒇𝒆𝒎𝒗𝒊𝒗𝒊𝒅𝒐20
│💟 𝒇𝒆𝒎𝒗𝒊𝒗𝒊𝒅𝒐22
│💟 𝒇𝒆𝒎𝒗𝒊𝒗𝒊𝒅𝒐00
│💟 𝒇𝒆𝒎𝒗𝒊𝒗𝒊𝒅𝒐𝒗𝒔
│💟 𝒇𝒆𝒎8𝒗𝒔8
│💟 𝒇𝒆𝒎12𝒗𝒔12
│💟 𝒇𝒆𝒎16𝒗𝒔16
│💟 𝒇𝒆𝒎𝒊𝒏𝒕𝒆𝒓𝒏𝒂4
│💟 𝒇𝒆𝒎𝒊𝒏𝒕𝒆𝒓𝒏𝒂6
╰•───────•✦🍆✦•──────•


•───────•✦🍆✦•──────•
│ 𝑳𝒊𝒔𝒕𝒂𝒔-𝑴𝒂𝒔𝒄
•───────•✦🍆✦•──────•
│💟 𝒎𝒂𝒔𝒄𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐14
│💟 𝒎𝒂𝒔𝒄𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐16
│💟 𝒎𝒂𝒔𝒄𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐18
│💟 𝒎𝒂𝒔𝒄𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐20
│💟 𝒎𝒂𝒔𝒄𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐22
│💟 𝒎𝒂𝒔𝒄𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐00
│💟 𝒎𝒂𝒔𝒄𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐𝒗𝒔
│💟 𝒎𝒂𝒔𝒄𝒗𝒊𝒗𝒊𝒅𝒐14
│💟 𝒎𝒂𝒔𝒄𝒗𝒊𝒗𝒊𝒅𝒐16
│💟 𝒎𝒂𝒔𝒄𝒗𝒊𝒗𝒊𝒅𝒐18
│💟 𝒎𝒂𝒔𝒄𝒗𝒊𝒗𝒊𝒅𝒐20
│💟 𝒎𝒂𝒔𝒄𝒗𝒊𝒗𝒊𝒅𝒐22
│💟 𝒎𝒂𝒔𝒄𝒗𝒊𝒗𝒊𝒅𝒐00
│💟 𝒎𝒂𝒔𝒄𝒗𝒊𝒗𝒊𝒅𝒐𝒗𝒔
│💟 𝒎𝒂𝒔𝒄8𝒗𝒔8
│💟 𝒎𝒂𝒔𝒄12𝒗𝒔12
│💟 𝒎𝒂𝒔𝒄16𝒗𝒔16
│💟 𝒎𝒂𝒔𝒄𝒊𝒏𝒕𝒆𝒓𝒏𝒂4
│💟 𝒎𝒂𝒔𝒄𝒊𝒏𝒕𝒆𝒓𝒏𝒂6
╰•───────•✦🍆✦•──────•


•───────•✦🍆✦•──────•
│ 𝑳𝒊𝒏𝒌𝒔-𝑫𝒓𝒊𝒗𝒆𝒔
•───────•✦🍆✦•──────•
│❇️ 𝑺𝒑𝒂𝒎𝑨𝒑𝒌
│❇️ 𝑺𝒑𝒂𝒎𝑪𝒐𝒎𝒖
│❇️ 𝑺𝒑𝒂𝒎2
│❇️ 𝒓𝒄𝒖𝒓𝒔𝒐𝒔𝒅𝒛𝒏
│❇️ 𝒅𝒓𝒊𝒗𝒆𝒔𝒅𝒛𝒏
│❇️ 𝒅𝒛𝒏
│❇️ 𝑨𝒑𝒌𝑬𝒅𝒊𝒕𝒔
│❇️ 𝑫𝒓𝒊𝒗𝒆𝑬𝒅𝒊𝒕𝒔
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
    conn.reply(m.chat, '🍆 𝑬𝒔𝒕𝒆 𝒎𝒆𝒏𝒖 𝒕𝒊𝒆𝒏𝒆 𝒖𝒏 𝒆𝒓𝒓𝒐𝒓 𝒊𝒏𝒕𝒆𝒓𝒏𝒐, 𝒑𝒐𝒓 𝒍𝒐 𝒄𝒖𝒂𝒍 𝒏𝒐 𝒇𝒖𝒆 𝒑𝒐𝒔𝒊𝒃𝒍𝒆 𝒆𝒏𝒗𝒊𝒂𝒓𝒍𝒐 𝒓𝒆𝒑𝒐𝒓𝒕𝒂𝒍𝒐 𝒂𝒍 𝒄𝒓𝒆𝒂𝒅𝒐𝒓 𝒐 𝒂𝒍 𝒔𝒕𝒂𝒇𝒇.', m);
  }
};
handler.command = /^(Menuff|menuff|comandosff)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
