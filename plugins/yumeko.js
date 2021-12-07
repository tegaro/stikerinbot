let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/tegaro/uwu/main/yumeko.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Yumeko Wangy', '© ollie', 'Get Again', '/yumeko', m)
}
handler.command = /^(yumeko)$/i
handler.tags = ['fun']
handler.help = ['yumeko']
module.exports = handler
