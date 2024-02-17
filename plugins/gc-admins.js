const handler = async (m, {conn, participants, groupMetadata, args}) => {
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/admins.jpg';
  const groupAdmins = participants.filter((p) => p.admin);
  const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
  const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
  const pesan = args.join` `;
  const oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`;
  const text = `*━「* 𝐈𝐍𝐕𝐎𝐂𝐀𝐍𝐃𝐎 𝐀𝐃𝐌𝐈𝐍𝐒 *」━*

${oi}

*𝙰𝙳𝙼𝙸𝙽𝚂:*
${listAdmin}

*[ ⚠ ️] 𝗦𝗜 𝗗𝗘𝗦𝗘𝗔𝗦 𝗔𝗤𝗨𝗜𝗥𝗜𝗥 𝗕𝗢𝗧 𝗛𝗔𝗕𝗟𝗔𝗥𝗟𝗘 𝗔 𝗨𝗡 𝗔𝗗𝗠𝗜𝗡 𝗣𝗔𝗥𝗔 𝗗𝗔𝗥𝗧𝗘 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢𝗡 𝗔𝗖𝗘𝗥𝗖𝗔 𝗗𝗘𝗟 𝗕𝗢𝗧!!*`.trim();
  conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, {mentions: [...groupAdmins.map((v) => v.id), owner]});
};
handler.help = ['admins <texto>'];
handler.tags = ['group'];
// regex detect A word without case sensitive
handler.customPrefix = /.|@/i;
handler.command = /^(admins|@admins|dmins)$/i;
handler.group = true;
export default handler;
