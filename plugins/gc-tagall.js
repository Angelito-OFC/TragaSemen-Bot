const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`;
  let teks = `*ACTÍVENSE 🌱 O SON CUPO*\n\n❏ ${oi}\n\n✦ ⡇*Futuros cupos*\n`;
  for (const mem of participants) {
    teks += `🍆⃤⃤⃤ ⋆⁺ @${mem.id.split('@')[0]}\n`;
  }
  teks += `🍆⃤⃤⃤ @bxll.02\n\n`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;