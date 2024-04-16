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
  const totalusrReg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
  const totalusr = Object.keys(global.db.data.users).length;
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
  const rtime = (neww - old).toFixed(7);
  const wm = '𝑳𝒖𝒄𝒌𝒚𝑩𝒐𝒕-𝑴𝑫 🐲';
  const info = ` _*< INFO - ESTADO />*_

 [🤴🏻] *Prop.:* 𝑳𝒖𝒄𝒌𝒚𝑩𝒐𝒕-𝑴𝑫 🐲
 [#️⃣] *WA:* wa.me/59168683798
 [🤖] *IG:* @usxr_angelito
 [💡] *Ping:* ${rtime}
 [🚀]*Uptime:* ${uptime}
 [🎳] *Prefijo:* ${usedPrefix}
 [☑️] *Modo:* ${self ? "privado" : "público"}
 [🦜] *Usuarios regs.:* ${totalusrReg}
 [🌎] *Usuarios totales:* ${totalusr}
 [👨‍🦯] *Tipo de bot:* ${(conn.user.jid == global.conn.user.jid ? '' : `Sub-bot de:\n ▢ +${global.conn.user.jid.split`@`[0]}`) || 'No es sub-bot'}
 
 [🔐] *Chats privados:* ${chats.length - groups.length}
 [🌎] *Grupos:* ${groups.length}
 [🤖] *Chats totales:* ${chats.length}
 [🏢] *Autoread:* ${autoread ? "activo" : "desactivado"}
 [❗] *Restrict:* ${restrict ? "activo" : "desactivado"}
 [📵] *PCOnly:* ${pconly ? "activado" : "desactivado"}
 [💬] *GPOnly:* ${gconly ? "activado" : "desactivado"}
 [🔐] *AntiPrivado:* ${antiprivado ? "activado" : "desactivado"}
 [📵] *AntiLlamada:* ${antiCall ? "activado" : "desactivado"}
 [🤖] *ModeJadiBot:* ${modejadibot ? "activado" : "desactivado"}`.trim();
  const doc = [
    "pdf",
    "zip",
    "vnd.openxmlformats-officedocument.presentationml.presentation",
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const Message = {
    document: { url: `https://www.instagram.com/LUDMI_SHOP_/` },
    mimetype: `application/${document}`,
    fileName: `Documento`,
    fileLength: 99999999999999,
    pageCount: 200,
    contextInfo: {
      forwardingScore: 200,
      isForwarded: true,
      externalAdReply: {
        mediaUrl: "https://www.instagram.com/LUDMI_SHOP_/",
        mediaType: 2,
        previewType: "pdf",
        title: "𝑳𝒖𝒄𝒌𝒚𝑩𝒐𝒕-𝑴𝑫 🐲",
        body: "𝑳𝒖𝒄𝒌𝒚𝑩𝒐𝒕-𝑴𝑫 🐲",
        thumbnail: imagen1,
        sourceUrl: "https://www.instagram.com/LUDMI_SHOP_/",
      },
    },
    caption: info,
    footer: wm,
    headerType: 6,
  };
  conn.sendMessage(m.chat, Message, { quoted: m });
};

handler.command = /^(ping|info|status|estado)$/i;
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
