let axios = require('axios');
let fetch = require('node-fetch')
let neko = require('nekos.life')
let Neko = new neko()
     let handler  = async (m, { conn, args }) => {
if (!db.data.chats[m.chat].nsfw && m.isGroup) throw 'NSFW Belum Aktif'
     json = (await axios.get('https://meme-api.herokuapp.com/gimme/sideboobs')).data
   conn.sendFile(m.chat, json.url, 'boobs.jpg', json.title, m, false)
}
handler.help = ['sideboobs']
handler.tags = ['internet']
handler.command = /^sideboobs$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
;handler.disable = false
;handler.disable = true
;
