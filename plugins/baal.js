let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/tegaro/uwu/main/baal.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'wangy wangy huha huha🥵', '© ollie', 'Get Again', '/baal', m)
}
handler.command = /^(baal)$/i
handler.tags = ['anime']
handler.help = ['baal']
module.exports = handler
