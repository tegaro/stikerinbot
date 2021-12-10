const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    try {
        let res = await fetch(global.API('xteam', '/randomimage/ass', {}, 'APIKEY'))
        if (res.status != 200) throw await res.text()
        let img = await res.buffer()
        conn.sendFile(m.chat, img, '', '*© ollie*', m, false, { thumbnail: Buffer.alloc(0) })
    } catch (e) {
        throw `Limit apikey habis atau error!`
    }
}
handler.help = ['assnime']
handler.tags = ['anime']
handler.command = /^(assnime)$/i
handler.limit = false

module.exports = handler
