let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/tegaro/uwu/main/blowjob.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Random blowjob', '© ollie', 'Get Again', '/blowjob', m)
}
handler.command = /^(blowjob)$/i
handler.tags = ['anime']
handler.help = ['blowjob']
module.exports = handler
