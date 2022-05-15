let handler = async (m, { conn, isROwner, text }) => {
    const delay = time => new Promise(res => setTimeout(res, time))
    let getGroups = await conn.groupFetchAllParticipating()
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let anu = groups.map(v => v.id)
    var pesan = m.quoted && m.quoted.text ? m.quoted.text : text
    if(!pesan) throw 'teksnya?'
    m.reply(`Broadcast to ${anu.length} Chats ${anu.length * 0.5 } min`)
    for (let i of anu) {
    await delay(500)
    conn.sendTB(i, `${pesan}`, wm, 'OWNER', `https://wa.me/${conn.user.jid.split('@')[0]}?text=HELLO🌚`, null).catch(_ => _)
    }
  m.reply(`Sukse Broadcast to ${anu.length} Group`)
}
handler.help = ['bcgcbot <teks>']
handler.tags = ['owner']
handler.command = /^((broadcastgc|bcgc)bot)$/i

handler.owner = true

module.exports = handler
