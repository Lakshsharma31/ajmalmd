
let handler = async(m, { conn, text }) => {
  if(!text) throw `No Reaction Found`
  if(!m.quoted) throw `reply message!`
  conn.relayMessage(m.chat, { reactionMessage: {
key: {
 id: m.quoted.id,
 remoteJid: m.chat,
 fromMe: true
 },
 text: text}}, { messageId: m.id })
}
handler.help = ['ʀᴇᴀᴄᴛɪᴏɴ <ʀᴇᴘʟʏ>']
handler.tags = ['tools']
handler.command = /^rea(c?t?i?o?n?)?$/i

module.exports = handler
