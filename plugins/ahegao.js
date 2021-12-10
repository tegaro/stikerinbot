const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    try {
      if (!db.data.settings.nsfw) throw "Mode NSFW tidak aktif";
        let res = await fetch(global.API('xteam', '/randomimage/ahegao', {}, 'APIKEY'))
        if (res.status != 200) throw await res.text()
        let img = await res.buffer()
        conn.sendFile(m.chat, img, '', '*© ollie*', m, false, { thumbnail: Buffer.alloc(0) })
    } catch (e) {
        throw `Admin belum mengaktifkan mode NSFW`
    }
}
handler.help = ['ahegao']
handler.tags = ['anime']
handler.command = /^(ahegao)$/i
handler.limit = false

module.exports = handler
