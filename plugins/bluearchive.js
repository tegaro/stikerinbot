let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/tegaro/uwu/main/bluearchive.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Random Blue Archive', '© ollie', 'Get Again', '/bluearchive', m)
}
handler.command = /^(bluearchive)$/i
handler.tags = ['anime']
handler.help = ['bluearchive']
module.exports = handler
