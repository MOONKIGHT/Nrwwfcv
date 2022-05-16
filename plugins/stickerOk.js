let handler = async(m, { conn }) => {
  let a = "https://i.imgur.com/rSNX7Z9.jpeg"
  conn.sendStimg(m.chat, a, m, {packname: packname, author: author })
}
handler.customPrefix= /^makasih|kasih|mksh|thank|thanks$/i
handler.command = new RegExp

module.exports = handler
