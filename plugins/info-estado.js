const handler = async (m, {conn}) => {
  m.reply(global.ping);
};
handler.command = /^(ping|Ping)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.ping = ` 
 [🐲] *Bot:* 𝑳𝒖𝒄𝒌𝒚𝑩𝒐𝒕-𝑴𝑫 🐲
 [📶] *Ping:* ${rtime}
`;