let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/tegaro/uwu/main/tits.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Random tits', '© ollie', 'Get Again', '/tits', m)
}
handler.command = /^(tits)$/i
handler.tags = ['anime']
handler.help = ['tits']
handler.nsfw = true
module.exports = handler
