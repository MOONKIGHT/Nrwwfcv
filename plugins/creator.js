let handler = async(m, { conn }) => {
  let name = m.sender
  let fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '6285346545126@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  try {
  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${owner[0]}`, `${await conn.getName(owner[0]+'@s.whatsapp.net')}`, `BOT OWNER`, `DON't SPAM MY NUMBER`, `imashnidusha43@gmail.com`, `FROM SRI LANKA`, `https://chat.whatsapp.com/HEP90W2NX9Y4YISOzCu7AQ`, `THNCKS FOR CONTACT ME🙂`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `BOT OWNER`, `DON't SPAM MY NUMBER`, `imashnidusha43@gmail.com`, `FROM SRI LANKA`, `https://chat.whatsapp.com/HEP90W2NX9Y4YISOzCu7AQ`, `THNCKS FOR CONTACT ME🙂`]
  ], fkonn) 
  await conn.reply(m.chat, `Hellw🌚 @${m.sender.split(`@`)[0]} this is owner number,Dont spam bro🥲😉`, sentMsg, {mentions: [m.sender]})
  } catch {
  const sentMsg = await conn.sendContact(m.chat, `${owner[0]}`, `${await conn.getName(owner[0]+'@s.whatsapp.net')}`, m) 
  await conn.reply(m.chat, `Helow🌚 @${m.sender.split(`@`)[0]} this is developer numer,dont spam bro😖`, sentMsg, {mentions: [m.sender]})
  }
}
handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner)$/i

module.exports = handler

