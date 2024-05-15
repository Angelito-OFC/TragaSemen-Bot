import { generateWAMessageFromContent } from "@whiskeysockets/baileys";
import os from "os";
import util from "util";
import sizeFormatter from "human-readable";
import MessageType from "@whiskeysockets/baileys";
import fs from "fs";
import { performance } from "perf_hooks";
const handler = async (m, { conn, usedPrefix }) => {
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);
  const totalreg = Object.keys(global.db.data.users).length;
  const chats = Object.entries(conn.chats).filter(
    ([id, data]) => id && data.isChats,
  );
  const groupsIn = chats.filter(([id]) => id.endsWith("@g.us"));
  const groups = chats.filter(([id]) => id.endsWith("@g.us"));
  const used = process.memoryUsage();
  const { restrict, antiCall, antiprivado, modejadibot } =
    global.db.data.settings[conn.user.jid] || {};
  const { autoread, gconly, pconly, self } = global.opts || {};
  const old = performance.now();
  const neww = performance.now();
  const speed = neww - old;
  const info = `*🔮 I N F O R M A C I Ó N 🔮*
 
🔮꙰᠁❥ 𝘾𝙧𝙚𝙖𝙙𝙤𝙧: Angelito
🔮꙰᠁❥ 𝙊𝙬𝙣𝙚𝙧: Bell
🔮꙰᠁❥ 𝙒𝙖: wa.me/59894647611
🔮꙰᠁❥ 𝙄𝙜: @usxr_angelito
🔮꙰᠁❥ 𝙑𝙚𝙧𝙨𝙞𝙤𝙣: 3.2.0
🔮꙰᠁❥ 𝙋𝙧𝙚𝙛𝙞𝙟𝙤: ( . )
🔮꙰᠁❥ 𝙈𝙤𝙙𝙤: Publico
🔮꙰᠁❥ 𝘼𝙘𝙩𝙞𝙫𝙞𝙙𝙖𝙙: ${uptime}
🔮꙰᠁❥ 𝙐𝙨𝙪𝙖𝙧𝙞𝙤𝙨: ${totalreg}
🔮꙰᠁❥ 𝙑𝙚𝙡𝙤𝙘𝙞𝙙𝙖𝙙: ${speed} ms
🔮꙰᠁❥ 𝘾𝙝𝙖𝙩 𝙥𝙧𝙞𝙫: ${chats.length - groups.length}
🔮꙰᠁❥ 𝘾𝙝𝙖𝙩 𝙜𝙧𝙪𝙥𝙖𝙡: ${groups.length}
🔮꙰᠁❥ 𝘾𝙝𝙖𝙩𝙨 𝙩𝙤𝙩𝙖𝙡: ${chats.length}
🔮꙰᠁❥ 𝙎𝙪𝙗-𝘽𝙤𝙩𝙨: ${modejadibot ? "activado" : "desactivado"}`.trim();
  const doc = [
    "pdf",
    "zip",
    "vnd.openxmlformats-officedocument.presentationml.presentation",
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const Message = {
    document: { url: `https://github.com/Karim-off/RubyBot-MD` },
    mimetype: `application/${document}`,
    fileName: `𝙏𝙧𝙖𝙜𝙖 𝙎𝙚𝙢𝙚𝙣`,
    fileLength: 99999999999999,
    pageCount: 200,
    contextInfo: {
      forwardingScore: 200,
      isForwarded: true,
      externalAdReply: {
        mediaUrl: "https://www.instagram.com/usxr_angelito",
        mediaType: 2,
        previewType: "pdf",
        title: "ꜱɪɢᴜᴇᴍᴇ ᴇɴ ɪɴꜱᴛᴀɢʀᴀᴍ",
        body: wm,
        thumbnail: imagen1,
        sourceUrl: "https://www.instagram.com/usxr_angelito",
      },
    },
    caption: info,
    footer: wm,
    headerType: 6,
  };
  conn.sendMessage(m.chat, Message, { quoted: m });
};
handler.help = ["infobot", "speed"];
handler.tags = ["info", "tools"];
handler.command = /^(Infobot|infobot)$/i;
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}