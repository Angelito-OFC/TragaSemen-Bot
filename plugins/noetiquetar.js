let handler = async (m, { conn, usedPrefix, command, paypal }) => {
conn.sendMessage(m.chat, {text:'*[ ⚠️ ] no etiquetes a unos de mis creadores si tienes alguna consulta o duda hablale a su privado solo por tema de 𝑻𝒓𝒂𝒈𝒂𝑺𝒆𝒎𝒆𝒏-𝑩𝒐𝒕🍆*'},  { quoted: m })
}
handler.help = ['pagina']
handler.tags = ['info']
handler.command = /^@59168683798$/i
export default handler
