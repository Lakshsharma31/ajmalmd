let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { conn, usedPrefix, command, text }) => {
    if(!text) return conn.reply(m.chat, `Enter Packname & Stickername \nExample: *${usedPrefix}${command} Team-Electra,Sonic-MD*`, m)
    try {
    var [p, a] = text.split `,`
    var q = m.quoted ? m.quoted : m
    var ras = await q.download()
    var sel = await webp2png(ras)
    } finally {
    if(sel) await conn.sendStimg(m.chat, sel, m, { packname: p || '', author: a || '' })
    else return conn.reply(m.chat, `Reply sticker with caption *${usedPrefix}${command} packname|author* `, m) 
  }
}   
handler.help = ['ᴡᴍ'].map(v => v + ' <ᴘᴀᴄᴋɴᴀᴍᴇ|ᴀᴜᴛʜᴏʀ>')
handler.tags = ['sticker', 'premium']
handler.command = /^(wm)$/i

handler.premium = true 

module.exports = handler
