/* ⚠ POR FAVOR NO MODIFIQUES NADA DE AQUÍ ⚠ */

import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
import fs from 'fs';
const handler = async (m, {conn, usedPrefix, command}) => {
  const name = await conn.getName(m.sender);
  const donar =`
  *┏ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
  *┇          「 𝐃𝐎𝐍𝐀𝐑 」*
  *┣ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
  *┃ 𝙷𝙾𝙻𝙰 ${name}*
  *┃*
  *┃ 👉🏻 𝙰𝚀𝚄𝙸 𝙰𝙻𝙶𝚄𝙽𝙾𝚂 𝙳𝙰𝚃𝙾𝚂*
  *┃ 𝙿𝙾𝚁 𝚂𝙸 𝙶𝚄𝚂𝚃𝙰𝚂 𝙰𝙿𝙾𝚈𝙰𝚁 :𝟹*
  *┃*
  *┃ IG:*@usxr_angelito* 
  *┃ 𝙱𝙴𝙽𝙴𝙵𝙸𝙲𝙸𝙰𝚁𝙸𝙾: 𝑳𝒖𝒄𝒌𝒚𝑩𝒐𝒕-𝑴𝑫 🐲* 
  *┃ 𝙲𝙾𝙽𝙲𝙴𝙿𝚃𝙾: APOYO*  
  *┃ 𝚈𝙰𝙿𝙴 𝙱𝙾𝙻𝙸𝚅𝙸𝙰: 68683798*
  *┃*
  *┃ 👉🏻 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙰𝙼𝙴 𝚂𝙸 𝙽𝙴𝙲𝙴𝚂𝙸𝚃𝙰𝚂*
  *┃ 𝙼𝙰𝚂 𝙳𝙰𝚃𝙾𝚂 𝚈 𝙿𝙰𝚁𝙰 𝙰𝙶𝚁𝙰𝙳𝙴𝙲𝙴𝚁𝚃𝙴*
  *┃ wa.me/59168683798*
  *┗ ┅ ━━━━━━━━━━━━━━━━━ ┅ ━*
`.trim();
  const aa = {quoted: m, userJid: conn.user.jid};
  const res = generateWAMessageFromContent(m.chat, {liveLocationMessage: {degreesLatitude: 0, degreesLongitude: 0, caption: donar, secuenceNumber: '0', contextInfo: {mentionedJid: conn.parseMention()}}}, aa);
  conn.relayMessage(m.chat, res.message, {});
};
handler.help = ['donasi'];
handler.tags = ['info'];
handler.command = /^dona(te|si)|donar|apoyar$/i;
export default handler;
