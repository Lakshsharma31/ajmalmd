let handler = async (m, { isOwner, isAdmin, conn, text, participants }) => {
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn)
    throw false
  }
  let teks = `${text ? text : ''}\n\n${sa}${kki}Tag All ${kka}\n`
  for (let mem of participants) {
    teks += `${gy} @${mem.id.split('@')[0]}\n`
  }
  teks += `${sb}\n\n${conn.user.name}`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) })
}
handler.help = ['ᴛᴀɢᴀʟʟ <ᴍᴇssᴀɢᴇ>']
handler.tags = ['group']
handler.command = /^(t(agall)?)$/i

handler.group = true

module.exports = handler