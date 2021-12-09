let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  if (!db.data.settings.nsfw) throw "Mode NSFW belum aktif";
let res = await fetch('https://hardianto.xyz/api/anime/random?nsfw=yuri&apikey=hardianto')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Random Yuri', '© ollie', 'Get Again', '/yuri', m)
}
handler.command = /^(yuri)$/i
handler.tags = ['anime']
handler.help = ['yuri']
module.exports = handler
