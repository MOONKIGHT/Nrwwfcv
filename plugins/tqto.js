/**
* jangan dihapus/diganti ya kontol
* lu itu cuma make jadi jangan diapa apain ya bangsat
* mending lu tambahin deh nama lu jangan hapus kreditnya
**/

let handler = async (m, { usedPrefix}) => {
let tqto = `*BIG THANKS TO*



\`\`\`${conn.user.name}\`\`\`
`
 conn.sendTBL(m.chat, tqto, wm, 'https://avatars.githubusercontent.com/u/18616827?v=4', `Source Code Bot ✨`, `https://github.com/raselcomel/lucubot-md`, null, null, 'Menu', `${usedPrefix}menu`, null, null, null, null, m) 
}
handler.help = ['tqto']
handler.tags = ['info']
handler.command = /^(credits?|thanks?to|tqto|ttq)$/i

module.exports = handler
