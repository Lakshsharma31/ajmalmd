let handler = async(m, { conn }) => {
  try {
  let who
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  else who = m.quoted.sender ? m.quoted.sender : m.sender
  let name = await conn.getName(who)
  m.reply(name)
  } catch {
    try {
    let who = m.quoted ? m.quoted.sender : m.sender
    let name = await conn.getName(who)
    m.reply(name)
  } catch {
    throw `sorry try another one`
    }
  }
}
handler.help = ['ɢᴇᴛɴᴀᴍᴇ <@ᴛᴀɢ/ʀᴇᴘʟʏ>']
handler.tags = ['tool']
handler.command = /^(get)?name?a?$/i

module.exports = handler
