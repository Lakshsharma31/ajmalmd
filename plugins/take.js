let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { conn }) => {
     
    var q = m.quoted ? m.quoted : m
    var ras = await q.download()
    var sel = await webp2png(ras)
    if(sel) await conn.sendStimg(m.chat, sel, m, { packname: pclg, author: aclg })
      }

handler.help = ['ᴛᴀᴋᴇ <ʀᴇᴘʟʏ sᴛɪᴄᴋᴇʀ>']
handler.tags = ['owner']
handler.command = /^(take)$/i

module.exports = handler
