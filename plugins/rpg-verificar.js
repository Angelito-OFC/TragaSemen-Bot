import {createHash} from 'crypto';
const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
const handler = async function(m, {conn, text, usedPrefix, command}) {
  const user = global.db.data.users[m.sender];
  const name2 = conn.getName(m.sender);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => global.imagen1);
  if (user.registered === true) throw `[❗𝐈𝐍𝐅𝐎❗] 𝒀𝒂 𝒆𝒔𝒕𝒂𝒔 𝒓𝒆𝒈𝒊𝒔𝒕𝒓𝒂𝒅𝒐\n\n¿𝑸𝒖𝒊𝒆𝒓𝒆𝒔 𝒗𝒐𝒍𝒗𝒆𝒓 𝒂 𝒓𝒆𝒈𝒊𝒔𝒕𝒓𝒂𝒓𝒔𝒆?\n\n 📌𝑼𝒔𝒂 𝒆𝒔𝒕𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒑𝒂𝒓𝒂 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒓 𝒕𝒖 𝒓𝒆𝒈𝒊𝒔𝒕𝒓𝒐\n${usedPrefix}unreg <Número de serie>`;
  if (!Reg.test(text)) throw `[❗𝐈𝐍𝐅𝐎❗] 𝑭𝒐𝒓𝒎𝒂𝒕𝒐 𝒊𝒏𝒄𝒐𝒓𝒓𝒆𝒄𝒕𝒐\n\n*—◉ 𝒖𝒔𝒐 𝒅𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐: ${usedPrefix + command} nombre.edad*\n*—◉ Ejemplo: ${usedPrefix + command} Lucky.18*`;
  let [_, name, splitter, age] = text.match(Reg);
  if (!name) throw '[❗𝐈𝐍𝐅𝐎❗] 𝑫𝒆𝒃𝒆𝒔 𝒑𝒐𝒏𝒆𝒓 𝒖𝒏 𝒏𝒐𝒎𝒃𝒓𝒆';
  if (!age) throw '[❗𝐈𝐍𝐅𝐎❗] 𝑳𝒂 𝒆𝒅𝒂𝒅 𝒏𝒐 𝒑𝒖𝒆𝒅𝒆 𝒆𝒔𝒕𝒂𝒓 𝒗𝒂𝒄𝒊𝒂';
  if (name.length >= 30) throw '[❗𝐈𝐍𝐅𝐎❗] 𝑬𝒍 𝒏𝒐𝒎𝒃𝒓𝒆 𝒆𝒔 𝒅𝒆𝒎𝒂𝒔𝒊𝒂𝒅𝒐 𝒍𝒂𝒓𝒈𝒐';
  age = parseInt(age);
  if (age > 100) throw '[❗] 𝑲𝒉𝒆𝒆𝒆, 𝒄𝒐𝒎𝒐 𝒔𝒊𝒈𝒖𝒆𝒔 𝒗𝒊𝒗𝒐/𝒂 𝒄𝒐𝒏 𝒆𝒔𝒂 𝒆𝒅𝒂𝒅? 👴🏻';
  if (age < 5) throw '[❗] 𝑲𝒉𝒆𝒆𝒆, 𝒖𝒏 𝒃𝒆𝒃𝒆 𝒒𝒖𝒆 𝒔𝒂𝒃𝒆 𝒖𝒔𝒂𝒓 𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑? 😯';
  user.name = name.trim();
  user.age = age;
  user.regTime = + new Date;
  user.registered = true;
  const sn = createHash('md5').update(m.sender).digest('hex');
  const caption = `┏━═━═━═━═━═━═━═━═━═━═┓
┃╭─────────────────
┃│𝑽𝑬𝑹𝑰𝑭𝑰𝑪𝑨𝑪𝑰𝑶𝑵-𝑩𝑶𝑻
┃├────────────────╯
┃│🐲𝑵𝒐𝒎𝒃𝒓𝒆: ${name}
┃│🐲𝑬𝒅𝒂𝒅: ${age} años
┃│🐲𝑭𝒆𝒄𝒉𝒂: ${date}
┃│🐲𝑵𝒖𝒎𝒆𝒓𝒐 𝒅𝒆 𝒓𝒆𝒈
┃│ ${sn}
┃├─────────────────
┃│🐲 𝑴𝒖𝒚 𝑩𝒐𝒏𝒊𝒕𝒐 𝑫𝒊𝒂 
┃│🐲 𝒕𝒆 𝒅𝒆𝒔𝒆𝒂 𝑳𝒖𝒄𝒌𝒚 𝑩𝒐𝒕 
┃│🐲 𝒚𝒂 𝒕𝒆 𝒆𝒏𝒄𝒖𝒆𝒏𝒕𝒓𝒂𝒔
┃│🐲 𝒆𝒏 𝒎𝒊 𝒃𝒂𝒔𝒆 𝒅𝒆 𝒅𝒂𝒕𝒐𝒔
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━┛`;
  // let author = global.author
  await conn.sendFile(m.chat, pp, 'mystic.jpg', caption);
  // conn.sendButton(m.chat, caption, `¡𝚃𝚄 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝚃𝙴 𝚂𝙴𝚁𝚅𝙸𝚁𝙰 𝙿𝙾𝚁 𝚂𝙸 𝙳𝙴𝚂𝙴𝙰𝚂 𝙱𝙾𝚁𝚁𝙰𝚁 𝚃𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝙴𝙽 𝙴𝙻 𝙱𝙾𝚃!\n${author}`, [['¡¡𝙰𝙷𝙾𝚁𝙰 𝚂𝙾𝚈 𝚄𝙽 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝙳𝙾/𝙰!!', '/profile']], m)
  global.db.data.users[m.sender].money += 10000;
  global.db.data.users[m.sender].exp += 10000;
};
handler.help = ['verificar'];
handler.tags = ['xp'];
handler.command = /^(verify|register|verificar|reg|registrar)$/i;
export default handler;
