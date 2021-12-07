let fetch = require('nekos.life')
let { webp2mp4 } = require('../lib/webp2mp4')
let nekos = new fetch()
let handler = async (m, { conn, text, command }) => {
if (!db.data.settings.nsfw) throw "Mode NSFW tidak aktif";
  m.reply(`_*Tunggu permintaan anda sedang diproses...*_`)
  let { url } = await nekos.nsfw.pussy()
  let buffer = await getBuffer(url)
  let result = await webp2mp4(buffer)
  conn.sendMessage(m.chat, { url: result }, 'videoMessage', { mimetype: 'video/gif', quoted: m, caption: 'Huu sange sama kartun....' })
}
handler.command = /^(pussy)$/i
handler.tags = ['internet']
handler.help = ['pussy']
handler.limit = true

module.exports = handler
;handler.disable = false
;handler.disable = true
;
