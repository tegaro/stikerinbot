let fetch = require('akaneko')
let handler = async (m, { conn, text }) => {
if (!db.data.settings.nsfw) throw "Mode NSFW tidak aktif";
  let url = await fetch.nsfw.hentai()
  conn.sendMessage(m.chat, { url }, 'imageMessage', { quoted: m })
}
handler.command = /^hentai$/i
handler.tags = ['internet']
handler.help = ['hentai']
handler.limit = true

module.exports = handler
