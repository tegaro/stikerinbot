const { MessageType } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
await m.reply('Sedang Di Proses...')
   conn.sendFile(m.chat, 'https://recoders-area.caliph.repl.co/api/wpnime', 'wallpaper.jpeg', 
'Wallpaper Nya Kak', m)
}
handler.help = ['wallpaper', 'wp']
handler.tags = ['internet']
handler.command = /^(wallpaperanime|wpanime)$/i
handler.limit = true

module.exports = handler
