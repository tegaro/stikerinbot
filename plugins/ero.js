let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/tegaro/uwu/main/ero.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Random ero', '© ollie', 'Get Again', '/ero', m)
}
handler.command = /^(ero)$/i
handler.tags = ['anime']
handler.help = ['ero']
module.exports = handler
