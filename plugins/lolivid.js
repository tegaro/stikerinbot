let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, API('caliph', '/asupan/loli', {}, 'apikey'), 'asupan.mp4', '© Ollie')
}
handler.help = ['lolivid', 'asupanloli']
handler.tags = ['fun']
handler.command = /^(lolivid|asupanloli)$/i

module.exports = handler
