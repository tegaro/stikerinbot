let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/tegaro/uwu/main/hololewd.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Random hololewd', '© ollie', 'Get Again', '/hololewd', m)
}
handler.command = /^(hololewd)$/i
handler.tags = ['anime']
handler.help = ['hololewd']
handler.nsfw = true
module.exports = handler
