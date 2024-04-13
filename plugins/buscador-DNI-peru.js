
import {googleIt} from '@bochilteam/scraper';
import google from 'google-it';
import axios from 'axios';
let handler = async (m, { conn, command, args, usedPrefix }) => {
  const fetch = (await import('node-fetch')).default;
  const text = args.join` `;
  if (!text) return conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝚃𝙴𝚇𝚃𝙾 𝙾 𝚃𝙴𝙼𝙰 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙴 𝙱𝚄𝚂𝙲𝙰𝚁*', m);
const url = 'https://el-dni.com/' + encodeURIComponent(text);
google({'query': text}).then(res => {
let teks = `*RESULTADOS DE : _${text}_*\n\n${url}\n\nDNI: ${dni}
NOMBRE: ${nombres}
APELLIDO PATERNO:
APELLIDO MATERNO:`
for (let g of res) {
teks += ``
} 
const ss = `https://images.app.goo.gl/o2GicfaxsPa7VkAFA`
conn.sendFile(m.chat, ss, 'error.png', teks, m)
//m.reply(teks)
})
} 
handler.help = ['dni', 'dni'].map((v) => v + ' <pencarian>');
handler.tags = ['internet'];
handler.command = /^dni?$/i;
export default handler;