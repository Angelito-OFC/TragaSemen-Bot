import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `*[❗] Los comandos +18 están desactivados en este grupo, si es admin y desea activarlos use ${usedPrefix}enable modohorny*`; 
  try {
    const pp = imagen5;
    const vn = './media/La biblia.mp3';
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
│ 𝑴𝒆𝒏𝒖 +18
•───────•✦🍆✦•──────•
│🔞 𝒑𝒂𝒄𝒌
│🔞 𝒑𝒂𝒄𝒌2
│🔞 𝒑𝒂𝒄𝒌3
│🔞 𝒗𝒊𝒅𝒆𝒐𝒙𝒙𝒙
│🔞 𝒗𝒊𝒅𝒆𝒐𝒍𝒆𝒔𝒃𝒊𝒙𝒙𝒙
│🔞 𝒕𝒆𝒕𝒂𝒔
│🔞 𝒃𝒐𝒐𝒕𝒚
│🔞 𝒆𝒄𝒄𝒉𝒊
│🔞 𝒇𝒖𝒓𝒓𝒐
│🔞 𝒊𝒎𝒂𝒈𝒆𝒏𝒍𝒆𝒔𝒃𝒊𝒂𝒏𝒔
│🔞 𝒑𝒂𝒏𝒕𝒊𝒆𝒔
│🔞 𝒑𝒆𝒏𝒆
│🔞 𝒑𝒐𝒓𝒏𝒐
│🔞 𝒓𝒂𝒏𝒅𝒐𝒎𝒙𝒙𝒙
│🔞 𝒑𝒆𝒄𝒉𝒐𝒔
│🔞 𝒚𝒂𝒐𝒊
│🔞 𝒚𝒂𝒐𝒊2
│🔞 𝒚𝒖𝒓𝒊
│🔞 𝒚𝒖𝒓𝒊2
│🔞 𝒕𝒓𝒂𝒑𝒊𝒕𝒐
│🔞 𝒉𝒆𝒏𝒕𝒂𝒊
│🔞 𝒏𝒔𝒇𝒘𝒍𝒐𝒍𝒊
│🔞 𝒏𝒔𝒇𝒘𝒐𝒓𝒈𝒚
│🔞 𝒏𝒔𝒇𝒘𝒇𝒐𝒐𝒕
│🔞 𝒏𝒔𝒇𝒘𝒂𝒔𝒔
│🔞 𝒏𝒔𝒇𝒘𝒃𝒅𝒔𝒎
│🔞 𝒏𝒔𝒇𝒘𝒄𝒖𝒎
│🔞 𝒏𝒔𝒇𝒘𝒆𝒓𝒐
│🔞 𝒏𝒔𝒇𝒘𝒇𝒆𝒎𝒅𝒐𝒎
│🔞 𝒏𝒔𝒇𝒘𝒈𝒍𝒂𝒔𝒔
│🔞 𝒉𝒆𝒏𝒕𝒂𝒊𝒑𝒅𝒇 <𝒕𝒆𝒙𝒕𝒐>
│🔞 𝒉𝒆𝒏𝒕𝒂𝒊𝒔𝒆𝒂𝒓𝒄𝒉 <𝒕𝒆𝒙𝒕𝒐>
╰•───────•✦🍆✦•──────•`.trim();
    if (m.isGroup) {
      await conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
      await conn.sendFile(m.chat, vn, 'La biblia.mp3', null, m, true, {type: 'audioMessage', ptt: true});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      await conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
      await conn.sendFile(m.chat, vn, 'La biblia.mp3', null, m, true, {type: 'audioMessage', ptt: true});
    }
  } catch {
    conn.reply(m.chat, '🍆 𝑬𝒔𝒕𝒆 𝒎𝒆𝒏𝒖 𝒕𝒊𝒆𝒏𝒆 𝒖𝒏 𝒆𝒓𝒓𝒐𝒓 𝒊𝒏𝒕𝒆𝒓𝒏𝒐, 𝒑𝒐𝒓 𝒍𝒐 𝒄𝒖𝒂𝒍 𝒏𝒐 𝒇𝒖𝒆 𝒑𝒐𝒔𝒊𝒃𝒍𝒆 𝒆𝒏𝒗𝒊𝒂𝒓𝒍𝒐 𝒓𝒆𝒑𝒐𝒓𝒕𝒂𝒍𝒐 𝒂𝒍 𝒄𝒓𝒆𝒂𝒅𝒐𝒓 𝒐 𝒂𝒍 𝒔𝒕𝒂𝒇𝒇.', m);
  }
};
handler.command = /^(menulabiblia|labiblia|Labiblia)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;

function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
