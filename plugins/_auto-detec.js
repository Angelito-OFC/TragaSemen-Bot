let WAMessageStubType = (await import(global.baileys)).default;
export async function before(m, {conn}) {
  if (!m.messageStubType || !m.isGroup) return;
  let usuario = `@${m.sender.split`@`[0]}`;
  let fkontak = {
    key: {participants: "0@s.whatsapp.net", remoteJid: "status@broadcast", fromMe: false, id: "Halo"},
    message: {
      contactMessage: {
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split("@")[0]}:${
          m.sender.split("@")[0]
        }\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
    participant: "0@s.whatsapp.net",
  };
  if (m.messageStubType == 21) {
    await this.sendMessage(
      m.chat,
      {text: `_.🍆${usuario} Cambio el nombre  del grupo a :_\n\n_${m.messageStubParameters[0]}_`, mentions: [m.sender]},
      {quoted: fkontak}
    );
  } else if (m.messageStubType == 22) {
    await this.sendMessage(m.chat, {text: `_.🎌${usuario} Cambio la foto del grupo_`, mentions: [m.sender]}, {quoted: fkontak});
  } else if (m.messageStubType == 24) {
    await this.sendMessage(
      m.chat,
      {text: `_.💜${usuario} La nueva descripción del grupo es :_\n\n_${m.messageStubParameters[0]}_`, mentions: [m.sender]},
      {quoted: fkontak}
    );
  } else if (m.messageStubType == 25) {
    await this.sendMessage(
      m.chat,
      {
        text: `_.💜Ahora_ _${m.messageStubParameters[0] == "on" ? "SOLO LOS ADMINISTRADORES" : "MIEMBROS"}_ _pueden editar la info del grupo_`,
        mentions: [m.sender],
      },
      {quoted: fkontak}
    );
  } else if (m.messageStubType == 26) {
    await this.sendMessage(
      m.chat,
      {
        text: `_.💜Grupo_ _${m.messageStubParameters[0] == "on" ? "Cerrado 🔒" : "Abierto 🔓"}_\n ${
          m.messageStubParameters[0] == "on" ? "_.💜Solo los administradores pueden escribir_" : "_. 💜Ya pueden escribir todos_"
        } En este grupo`,
        mentions: [m.sender],
      },
      {quoted: fkontak}
    );
  } else if (m.messageStubType == 29) {
    await this.sendMessage(
      m.chat,
      {
        text: `💜@${m.messageStubParameters[0].split`@`[0]}𝘼𝙝𝙤𝙧𝙖 𝙚𝙨 𝙖𝙙𝙢𝙞𝙣\n🍆𝙂𝙧𝙪𝙥𝙤: @subject \n🍆 𝘼𝙘𝙘𝙞𝙤𝙣 𝙧𝙚𝙖𝙡𝙞𝙯𝙖𝙙𝙖 𝙥𝙤𝙧 :_  _${usuario}`,
        mentions: [`${m.sender}`, `${m.messageStubParameters[0]}`],
      },
      {quoted: fkontak}
    );
  } else if (m.messageStubType == 30) {
    await this.sendMessage(
      m.chat,
      {
        text: `._💜@${m.messageStubParameters[0].split`@`[0]} Ya no es admin_\n\n._ 💜Le quito admin :_ _${usuario}_`,
        mentions: [`${m.sender}`, `${m.messageStubParameters[0]}`],
      },
      {quoted: fkontak}
    );
  } else if (m.messageStubType == 72) {
    await this.sendMessage(
      m.chat,
      {text: `_.💜${usuario} Cambio la duracion de los mensajes a :_ _@${m.messageStubParameters[0]}_`, mentions: [m.sender]},
      {quoted: fkontak}
    );
  } else if (m.messageStubType == 123) {
    await this.sendMessage(m.chat, {text: `._ ᩭ✎${usuario} Desactivo los mensajes temporales._`, mentions: [m.sender]}, {quoted: fkontak});
  } else {
    console.log({
      messageStubType: m.messageStubType,
      messageStubParameters: m.messageStubParameters,
      type: WAMessageStubType[m.messageStubType],
    });
  }
}