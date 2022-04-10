let handler = async (m, { isAdmin, isOwner }) => {
  if(isOwner) throw false  
  //if (isbotAdmin) throw `w bukan admin:(`
  if (m.fromMe) throw 'No'
  if (isAdmin) throw '_Already Admin_'
  try {
  await sock.groupParticipantsUpdate(
    m.chat, 
    [m.sender],
    "promote" 
)
        } catch {
           throw m.reply("can't")
  }
}
handler.help = ['up.']
handler.tags = ['owner']
handler.command = /^(up.|admin.|promote)$/i

handler.group = true

module.exports = handler
