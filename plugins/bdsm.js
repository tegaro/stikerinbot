let handler = async (m, { conn }) => {
    try {
        let res = await fetch(global.API('xteam', '/randomimage/bdsm', {}, 'APIKEY'))
        if (res.status != 200) throw await res.text()
        let img = await res.buffer()
        conn.sendFile(m.chat, img, '', '*© ollie*', m, false, { thumbnail: Buffer.alloc(0) })
    } catch (e) {
        throw `Admin belum mengaktifkan mode NSFW`
    }
}
handler.help = ['bdsm']
handler.tags = ['anime']
handler.command = /^(bdsm)$/i
handler.limit = false
handler.nsfw = true
module.exports = handler
