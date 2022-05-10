let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
conn.sendHydrated(m.chat, 
`*––––––『 DONATE 』––––––*`, 
`ᴩᴀʏ :
Gpay : 919515658404
ppay : 919515658404
★ ᴄʟɪᴄᴋ ᴏɴ YT ʟɪɴᴋ ᴛᴏ Subscribe.`, './media/donate.jpg', 'https://youtu.be/s-rp2vQ1kDY', 'YT', null, null, [[`ᴍᴇɴᴜ`, `${usedPrefix}menu`]], m, {asLocation: true})
}
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler