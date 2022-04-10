let handler = async (m, { conn }) => {
  let lang = db.data.users[m.sender].lang
  let tot = Object.values(global.plugins).filter(p => !p.disabled).map(p => Array.isArray(p.command) ? p.command : [p.command]).length
  let total = await conn.trans(lang, 'Total features '+tot).catch((_) => 'Total features '+tot)
  m.reply(total)
}
handler.help = ['ғᴇᴀᴛᴜʀᴇs']
handler.tags = ['main']
handler.command = /^features$/i

module.exports = handler
