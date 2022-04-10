let handler = async (m, { conn,isOwner, isROwner, text }) => {
   conn.sendTB(m.chat, 'Want to Upgrade to Premium?\nPlease contact the owner number below!', wm, 'Contact Owner', `https://wa.me/${global.owner[0]}?text=HI Bro I need Premium`, null, null, null, null, null, null, null, m)
}

handler.help = ['ɢᴇᴛᴘʀᴇᴍ']
handler.tags = ['main']
handler.command = /^(getprem|prem(ium))$/i

module.exports = handler
