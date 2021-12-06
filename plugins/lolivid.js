let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, API('caliph', '/asupan/loli', {}, 'apikey'), 'asupan.mp4', '© Ollie')
}
handler.help = ['asupan']
handler.tags = ['fun']
handler.command = /^(asupan)$/i

module.exports = handler
