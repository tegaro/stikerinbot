let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  if (!db.data.settings.nsfw) throw "Admin Grup belum mengaktifkan mode NSFW";
let res = await fetch('https://raw.githubusercontent.com/tegaro/uwu/main/hentai.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Random Hentai', '© ollie', 'Get Again', '/hentai', m)
}
handler.command = /^(hentai)$/i
handler.tags = ['anime']
handler.help = ['hentai']
module.exports = handler
