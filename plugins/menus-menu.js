import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `┏━═━═━═━═━═━═━═━═━═━┓
┃╭─────────────────
┃│🐲𝑯𝒐𝒍𝒂: @${m.sender.split`@`[0]}
┃│🐲𝑶𝒘𝒏𝒆𝒓 𝒅𝒆𝒍 𝑩𝒐𝒕:
┃│wa.me/523131937695
┃│🐲𝑩𝒐𝒕 𝒐𝒇𝒇: 
┃│wa.me/
┃│🐲𝑽𝒆𝒓𝒔𝒊𝒐𝒏: 𝟹.𝟸.𝟶
┃│🐲𝑭𝒆𝒄𝒉𝒂: ${date}
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━┛


┏━═━═━═━═━═━═━═━═━═━═┓
┃╭─────────────────
┃│🐉𝑳𝒆𝒗𝒆𝒍: ${level}
┃│🐉𝑬𝒙𝒑: ${exp}
┃│🐉𝑹𝒂𝒏𝒈𝒐: ${role}
┃│🐉𝑫𝒊𝒂𝒎𝒂𝒏𝒕𝒆𝒔: ${limit}
┃│🐉𝑪𝒐𝒊𝒏𝒔: ${money}
┃│🐉𝑻𝒐𝒌𝒆𝒏𝒔: ${joincount}
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━═┛

┏━═━═━═━═━═━═━═━═━═━═┓
┃╭─────────────────
┃│𝑨𝒄𝒕𝒊𝒗𝒂𝒓-𝑫𝒆𝒔𝒂𝒄𝒕𝒊𝒗𝒂𝒓
┃├────────────────╯
┃│🟢𝒆𝒏𝒂𝒃𝒍𝒆
┃│🔴𝒅𝒊𝒔𝒂𝒃𝒍𝒆
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━═┛


┏━═━═━═━═━═━═━═━═━═━═┓
┃╭─────────────────
┃│𝑮𝒓𝒖𝒑𝒐𝒔
┃├────────────────╯
┃│👾𝒎𝒆𝒏𝒖𝒇𝒇
┃│👾𝒄𝒐𝒎𝒂𝒏𝒅𝒐𝒔𝒇𝒇
┃│👾𝒌𝒊𝒄𝒌
┃│👾𝒈𝒓𝒖𝒑𝒐
┃│👾𝒑𝒓𝒐𝒎𝒐𝒕𝒆
┃│👾𝒅𝒆𝒎𝒐𝒕𝒆
┃│👾𝒅𝒆𝒎𝒐𝒕𝒆
┃│👾𝒍𝒊𝒏𝒌
┃│👾𝒕𝒐𝒅𝒐𝒔
┃│👾𝒔𝒆𝒕𝒘𝒆𝒍𝒄𝒐𝒎𝒆
┃│👾𝒔𝒆𝒕𝒃𝒚𝒆
┃│👾𝒉𝒊𝒅𝒆𝒕𝒂𝒈
┃│👾𝒇𝒂𝒏𝒕𝒂𝒔𝒎𝒂𝒔
┃│👾𝒌𝒊𝒄𝒌𝒇𝒂𝒏𝒕𝒂𝒔𝒎𝒂𝒔
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━═┛


┏━═━═━═━═━═━═━═━═━═━═┓
┃╭─────────────────
┃│𝑭𝒓𝒆𝒆 𝑭𝒊𝒓𝒆
┃├────────────────╯
┃│🐉𝒎𝒆𝒏𝒖𝒇𝒇
┃│🐉𝒃𝒆𝒓𝒎𝒖𝒅𝒂
┃│🐉𝒌𝒂𝒍𝒂𝒉𝒂𝒓𝒊
┃│🐉𝒂𝒍𝒑𝒆𝒔
┃│🐉𝒑𝒖𝒓𝒈𝒂𝒕𝒐𝒓𝒊𝒐
┃│🐉𝒏𝒆𝒙𝒕𝒆𝒓𝒓𝒂
┃│🐉𝒂𝒈𝒆𝒏𝒅𝒂𝒔𝒆𝒎𝒂𝒏𝒂𝒍
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━═┛


┏━═━═━═━═━═━═━═━═━═━═┓
┃╭─────────────────
┃│𝑩𝒖𝒔𝒄𝒂𝒓 𝑽𝒔-𝑷𝒍𝒂𝒏𝒕𝒊𝒍𝒍𝒂𝒔
┃├────────────────╯
┃│🔱𝒃𝒖𝒔𝒄𝒂𝒓𝒗𝒔𝒎𝒂𝒔𝒄
┃│🔱𝒃𝒔𝒎𝒔𝒂𝒄
┃│🔱𝒃𝒖𝒔𝒄𝒂𝒓𝒗𝒔𝒇𝒆𝒎
┃│🔱𝒃𝒔𝒇𝒆𝒎
┃│🔱𝒃𝒖𝒔𝒄𝒂𝒓𝒗𝒔𝒎𝒊𝒙𝒕𝒐
┃│🔱𝒃𝒔𝒎𝒊𝒙𝒕𝒐
┃│🔱𝒇𝒐𝒓𝒎𝒖𝒍𝒂𝒓𝒊𝒐
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━═┛


┏━═━═━═━═━═━═━═━═━═━═┓
┃╭─────────────────
┃│𝑳𝒊𝒔𝒕𝒂𝒔-𝑭𝒆𝒎
┃├────────────────╯
┃│💟 𝒇𝒆𝒎𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐14
┃│💟 𝒇𝒆𝒎𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐16
┃│💟 𝒇𝒆𝒎𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐18
┃│💟 𝒇𝒆𝒎𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐20
┃│💟 𝒇𝒆𝒎𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐22
┃│💟 𝒇𝒆𝒎𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐00
┃│💟 𝒇𝒆𝒎𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐𝒗𝒔
┃│💟 𝒇𝒆𝒎𝒗𝒊𝒗𝒊𝒅𝒐14
┃│💟 𝒇𝒆𝒎𝒗𝒊𝒗𝒊𝒅𝒐16
┃│💟 𝒇𝒆𝒎𝒗𝒊𝒗𝒊𝒅𝒐18
┃│💟 𝒇𝒆𝒎𝒗𝒊𝒗𝒊𝒅𝒐20
┃│💟 𝒇𝒆𝒎𝒗𝒊𝒗𝒊𝒅𝒐22
┃│💟 𝒇𝒆𝒎𝒗𝒊𝒗𝒊𝒅𝒐00
┃│💟 𝒇𝒆𝒎𝒗𝒊𝒗𝒊𝒅𝒐𝒗𝒔
┃│💟 𝒇𝒆𝒎8𝒗𝒔8
┃│💟 𝒇𝒆𝒎12𝒗𝒔12
┃│💟 𝒇𝒆𝒎16𝒗𝒔16
┃│💟 𝒇𝒆𝒎𝒊𝒏𝒕𝒆𝒓𝒏𝒂4
┃│💟 𝒇𝒆𝒎𝒊𝒏𝒕𝒆𝒓𝒏𝒂6
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━═┛


┏━═━═━═━═━═━═━═━═━═━═┓
┃╭─────────────────
┃│𝑳𝒊𝒔𝒕𝒂𝒔-𝑴𝒂𝒔𝒄
┃├────────────────╯
┃│💟 𝒎𝒂𝒔𝒄𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐14
┃│💟 𝒎𝒂𝒔𝒄𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐16
┃│💟 𝒎𝒂𝒔𝒄𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐18
┃│💟 𝒎𝒂𝒔𝒄𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐20
┃│💟 𝒎𝒂𝒔𝒄𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐22
┃│💟 𝒎𝒂𝒔𝒄𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐00
┃│💟 𝒎𝒂𝒔𝒄𝒊𝒏𝒇𝒊𝒏𝒊𝒕𝒐𝒗𝒔
┃│💟 𝒎𝒂𝒔𝒄𝒗𝒊𝒗𝒊𝒅𝒐14
┃│💟 𝒎𝒂𝒔𝒄𝒗𝒊𝒗𝒊𝒅𝒐16
┃│💟 𝒎𝒂𝒔𝒄𝒗𝒊𝒗𝒊𝒅𝒐18
┃│💟 𝒎𝒂𝒔𝒄𝒗𝒊𝒗𝒊𝒅𝒐20
┃│💟 𝒎𝒂𝒔𝒄𝒗𝒊𝒗𝒊𝒅𝒐22
┃│💟 𝒎𝒂𝒔𝒄𝒗𝒊𝒗𝒊𝒅𝒐00
┃│💟 𝒎𝒂𝒔𝒄𝒗𝒊𝒗𝒊𝒅𝒐𝒗𝒔
┃│💟 𝒎𝒂𝒔𝒄8𝒗𝒔8
┃│💟 𝒎𝒂𝒔𝒄12𝒗𝒔12
┃│💟 𝒎𝒂𝒔𝒄16𝒗𝒔16
┃│💟 𝒎𝒂𝒔𝒄𝒊𝒏𝒕𝒆𝒓𝒏𝒂4
┃│💟 𝒎𝒂𝒔𝒄𝒊𝒏𝒕𝒆𝒓𝒏𝒂6
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━═┛


┏━═━═━═━═━═━═━═━═━═━═┓
┃╭─────────────────
┃│𝑳𝒊𝒏𝒌𝒔-𝑫𝒓𝒊𝒗𝒆𝒔
┃├────────────────╯
┃│❇️ 𝑺𝒑𝒂𝒎𝑨𝒑𝒌
┃│❇️ 𝑺𝒑𝒂𝒎𝑪𝒐𝒎𝒖
┃│❇️ 𝑺𝒑𝒂𝒎2
┃│❇️ 𝒓𝒄𝒖𝒓𝒔𝒐𝒔𝒅𝒛𝒏
┃│❇️ 𝒅𝒓𝒊𝒗𝒆𝒔𝒅𝒛𝒏
┃│❇️ 𝒅𝒛𝒏
┃│❇️ 𝑨𝒑𝒌𝑬𝒅𝒊𝒕𝒔
┃│❇️ 𝑫𝒓𝒊𝒗𝒆𝑬𝒅𝒊𝒕𝒔
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━═┛

┏━═━═━═━═━═━═━═━═━═━═┓
┃╭─────────────────
┃│𝑺𝒕𝒊𝒄𝒌𝒆𝒓𝒔-𝑭𝒊𝒍𝒕𝒓𝒐𝒔
┃├────────────────╯
┃│🍭 
┃╰─────────────────
┗━═━═━═━═━═━═━═━═━═━═┛


 
sticker | s imagen/video
sticker | s url/jpg
emojimix 🙂+😍
qc | mensaje
scircle | círculo imagen
semoji | emoji tipo/emoji
 *║* 🎐 _${usedPrefix}attp *texto*_
 *║* 🎐 _${usedPrefix}attp2 *texto*_
 *║* 🎐 _${usedPrefix}ttp *texto*_
 *║* 🎐 _${usedPrefix}ttp2 *texto*_
 *║* 🎐 _${usedPrefix}ttp3 *texto*_
 *║* 🎐 _${usedPrefix}ttp4 *texto*_
 *║* 🎐 _${usedPrefix}ttp5 *texto*_
 *║* 🎐 _${usedPrefix}ttp6 *texto*_
 *║* 🎐 _${usedPrefix}dado_
 *║* 🎐 _${usedPrefix}stickermarker *efecto : responder a imagen*_
 *║* 🎐 _${usedPrefix}stickerfilter *efecto : responder a imagen*_
 *║* 🎐 _${usedPrefix}cs *:* cs2_
 *╚══ ≪ •❈• ≫ ══╝*


 ╭━〔 🎮 𝐉𝐔𝐄𝐆𝐎𝐒 🎮 〕
*┃➤ 🕹️ ${usedPrefix}mates*
*┃➤ 🕹️ ${usedPrefix}ppt*
*┃➤ 🕹️ ${usedPrefix}prostituto <@tag>*
*┃➤ 🕹️ ${usedPrefix}prostituta <@tag>*
*┃➤ 🕹️ ${usedPrefix}gay2 <@tag>*
*┃➤ 🕹️ ${usedPrefix}lesbiana <@tag>*
*┃➤ 🕹️ ${usedPrefix}pajero <@tag>*
*┃➤ 🕹️ ${usedPrefix}pajera <@tag>*
*┃➤ 🕹️ ${usedPrefix}puto <@tag>*
*┃➤ 🕹️ ${usedPrefix}puta <@tag>*
*┃➤ 🕹️ ${usedPrefix}manco <@tag>*
*┃➤ 🕹️ ${usedPrefix}manca <@tag>*
*┃➤ 🕹️ ${usedPrefix}rata <@tag>*
*┃➤ 🕹️ ${usedPrefix}negro <@tag>*
*┃➤ 🕹️ ${usedPrefix}negra <@tag>*
*┃➤ 🕹️ ${usedPrefix}fea <@tag>*
*┃➤ 🕹️ ${usedPrefix}feo <@tag>*
*┃➤ 🕹️ ${usedPrefix}sinpoto <@tag>*
*┃➤ 🕹️ ${usedPrefix}sintetas <@tag>*
*┃➤ 🕹️ ${usedPrefix}sinpito <@tag>*
*┃➤ 🕹️ ${usedPrefix}adoptada <@tag>*
*┃➤ 🕹️ ${usedPrefix}adoptado <@tag>*
*┃➤ 🕹️ ${usedPrefix}love*
*┃➤ 🕹️ ${usedPrefix}los10*
*┃➤ 🕹️ ${usedPrefix}suitpvp*
*┃➤ 🕹️ ${usedPrefix}slot*
*┃➤ 🕹️ ${usedPrefix}simisimi*
*┃➤ 🕹️ ${usedPrefix}pregunta*
*┃➤ 🕹️ ${usedPrefix}cuando*
*┃➤ 🕹️ ${usedPrefix}ship5*
*┃➤ 🕹️ ${usedPrefix}abrazo*
*┃➤ 🕹️ ${usedPrefix}ship2*
*┃➤ 🕹️ ${usedPrefix}formarpareja*
*┃➤ 🕹️ ${usedPrefix}verdad*
*┃➤ 🕹️ ${usedPrefix}reto*
*┃➤ 🕹️ ${usedPrefix}cancion*
*┃➤ 🕹️ ${usedPrefix}pista*
*┃➤ 🕹️ ${usedPrefix}ruleta*
*┃➤ 🕹️ ${usedPrefix}zodiac*
*┃➤ 🕹️ ${usedPrefix}odio*
*┃➤ 🕹️ ${usedPrefix}ship*
*┃➤ 🕹️ ${usedPrefix}sorteo*
*┃➤ 🕹️ ${usedPrefix}minovia*
*┃➤ 🕹️ ${usedPrefix}minovio*
*┃➤ 🕹️ ${usedPrefix}kchero*
*┃➤ 🕹️ ${usedPrefix}kchero*
 ╰━━━━━━━━━━━━


 ╭━〔 🎭 *IMAGENES* 🎭 〕
*┃➤ 🖍️ ${usedPrefix}goku*
*┃➤ 🖍️ ${usedPrefix}vegeta*
*┃➤ 🖍️ ${usedPrefix}lora*
*┃➤ 🖍️ ${usedPrefix}cr7*
*┃➤ 🖍️ ${usedPrefix}spiderman*
*┃➤ 🖍️ ${usedPrefix}batman*
*┃➤ 🖍️ ${usedPrefix}hellokitty*
*┃➤ 🖍️ ${usedPrefix}charmander*
 ╰━━━━━━━━━━━━
 

 ╭━〔 🈴 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 🈴 〕
*┃➤ 📥 ${usedPrefix}play*
*┃➤ 📥 ${usedPrefix}play.1*
*┃➤ 📥 ${usedPrefix}play2.2*
*┃➤ 📥 ${usedPrefix}ytv.2*
*┃➤ 📥 ${usedPrefix}yta.2*
*┃➤ 📥 ${usedPrefix}playlist*
*┃➤ 📥 ${usedPrefix}spotify*
*┃➤ 📥 ${usedPrefix}spotifydl*
*┃➤ 📥 ${usedPrefix}tiktok*
*┃➤ 📥 ${usedPrefix}instagram*
*┃➤ 📥 ${usedPrefix}mediafire*
*┃➤ 📥 ${usedPrefix}gdrive*
*┃➤ 📥 ${usedPrefix}twitter*
*┃➤ 📥 ${usedPrefix}yta*
*┃➤ 📥 ${usedPrefix}ytv*
*┃➤ 📥 ${usedPrefix}imagen*
*┃➤ 📥 ${usedPrefix}iaimagen*
*┃➤ 📥 ${usedPrefix}pinteres*
*┃➤ 📥 ${usedPrefix}igstory*
 ╰━━━━━━━━━━━━


*╭━〔 👀 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒 👀 〕*
*┃➤ 📍 ${usedPrefix}toimg*
*┃➤ 📍 ${usedPrefix}tomp3*
*┃➤ 📍 ${usedPrefix}toptt*
*┃➤ 📍 ${usedPrefix}tovideo*
*┃➤ 📍 ${usedPrefix}tts*
 ╰━━━━━━━━━━━━

*╭━〔 ♓ 𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐘 𝐋𝐎𝐆𝐎𝐒 ♓ 〕*
*┃➤ ❄️ ${usedPrefix}mensajefalso*
*┃➤ ❄️ ${usedPrefix}logos*
*┃➤ ❄️ ${usedPrefix}logocorazon*
*┃➤ ❄️ ${usedPrefix}ytcomment*
*┃➤ ❄️ ${usedPrefix}hornycard*
*┃➤ ❄️ ${usedPrefix}itssostupid*
*┃➤ ❄️ ${usedPrefix}pixelar*
 ╰━━━━━━━━━━━━

*╭━〔 💌 𝐅𝐑𝐀𝐒𝐄𝐒 𝐘 𝐓𝐄𝐗𝐓𝐎𝐒 💌〕*
*┃➤ 🥀 ${usedPrefix}piropo*
*┃➤ 🥀 ${usedPrefix}consejo*
*┃➤ 🥀 ${usedPrefix}fraseromantica*
 ╰━━━━━━━━━━━━

 ╭━〔 ✨ 𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒 ✨  〕*
*┃➤ 🔍 ${usedPrefix}xnxxsearch*
*┃➤ 🔍 ${usedPrefix}google*
*┃➤ 🔍 ${usedPrefix}letra*
*┃➤ 🔍 ${usedPrefix}wikipedia*
*┃➤ 🔍 ${usedPrefix}ytsearch*
*┃➤ 🔍 ${usedPrefix}playstore*
*┃➤ 🔍 ${usedPrefix}mercadolibre*
*┃➤ 🔍 ${usedPrefix}pornhubsearch*
 ╰━━━━━━━━━━━━

 ╭━〔 🌝 𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒 🌝 〕
*┃➤ 🍃 ${usedPrefix}clima*
*┃➤ 🍃 ${usedPrefix}afk*
*┃➤ 🍃 ${usedPrefix}ocr*
*┃➤ 🍃 ${usedPrefix}calc*
*┃➤ 🍃 ${usedPrefix}del*
*┃➤ 🍃 ${usedPrefix}whatmusic*
*┃➤ 🍃 ${usedPrefix}qrcode*
*┃➤ 🍃 ${usedPrefix}traducir*
 ╰━━━━━━━━━━━━

*╭━〔 💎 𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀𝐒 💎 〕*
*┃➤ 🍁 ${usedPrefix}verificar*
*┃➤ 🍁 ${usedPrefix}unreg*
*┃➤ 🍁 ${usedPrefix}minar*
*┃➤ 🍁 ${usedPrefix}buy*
*┃➤ 🍁 ${usedPrefix}work*
*┃➤ 🍁 ${usedPrefix}mendigar*
*┃➤ 🍁 ${usedPrefix}transfer*
 ╰━━━━━━━━━━━━
 *╔══ ≪ FUNCIONES OWNERS ≫ ══╗*
*║* 💎➺ _${usedPrefix}join *enlace*_
*║* 💎➺ _${usedPrefix}unete *enlace*_
*║* 💎➺ _${usedPrefix}dardiamantes *cantidad*_
*║* 💎➺ _${usedPrefix}darxp *cantidad*_
*║* 💎➺ _${usedPrefix}dargatacoins *cantidad*_
*║* 💎➺ _${usedPrefix}addprem | userpremium *@tag* *cantidad*_
*║* 💎➺ _${usedPrefix}addprem2 | userpremium2 *@tag* *cantidad*_
*║* 💎➺ _${usedPrefix}addprem3 | userpremium3 *@tag* *cantidad*_
*║* 💎➺ _${usedPrefix}addprem4 | userpremium4 *@tag* *cantidad*_
*║* 💎➺ _${usedPrefix}idioma | language_
*║* 💎➺ _${usedPrefix}cajafuerte_
*║* 💎➺ _${usedPrefix}comunicar | broadcastall | bc *texto*_
*║* 💎➺ _${usedPrefix}broadcastchats | bcc *texto*_
*║* 💎➺ _${usedPrefix}comunicarpv *texto*_
*║* 💎➺ _${usedPrefix}broadcastgc *texto*_
*║* 💎➺ _${usedPrefix}comunicargrupos *texto*_
*║* 💎➺ _${usedPrefix}borrartmp | cleartmp_
*║* 💎➺ _${usedPrefix}delexp *@tag*_
*║* 💎➺ _${usedPrefix}deloptimuscoins *@tag*_
*║* 💎➺ _${usedPrefix}deldiamantes *@tag*_
*║* 💎➺ _${usedPrefix}reiniciar | restart_
*║* 💎➺ _${usedPrefix}Actualizar | update_
*║* 💎➺ _${usedPrefix}addprem | +prem *@tag*_
*║* 💎➺ _${usedPrefix}delprem | -prem *@tag*_
*║* 💎➺ _${usedPrefix}listapremium | listprem_
*║* 💎➺ _${usedPrefix}añadirdiamantes *@tag cantidad*_
*║* 💎➺ _${usedPrefix}añadirxp *@tag cantidad*_
*║* 💎➺ _${usedPrefix}añadircoins *@tag cantidad*_
*╚══ ≪ •❈• ≫ ══╝*`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[ ℹ️ ] Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
