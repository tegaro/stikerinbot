const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    try {
        if (!db.data.settings.nsfw) throw "Admin Grup belum mengaktifkan mode NSFW";
        let res = await fetch(global.API('xteam', '/randomimage/hentai', {}, 'APIKEY'))
        if (res.status != 200) throw await res.text()
        let img = await res.buffer()
        conn.sendFile(m.chat, img, '', '*© ollie*', m, false, { thumbnail: Buffer.alloc(0) })
    } catch (e) {
        throw `Admin Grup belum mengaktifkan mode NSFW`
    }
}
handler.help = ['hentai']
handler.tags = ['anime']
handler.command = /^(hentai)$/i
handler.limit = false

module.exports = handler
