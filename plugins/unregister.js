const { createHash } = require('crypto')
let handler = async function (m, { args }) {
   if (!args[0]) throw 'Serial Number is empty <3'
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw '_Serial Number Invalid_'
  user.registered = false
  await m.reply(`_Succesfully Unregistered_`) 
  
}
handler.help = ['ᴜɴʀᴇɢɪsᴛᴇʀ <sɴ>']
handler.tags = ['xp']
handler.command = /^unreg(is(ter)?)?$/i

handler.register = true

module.exports = handler

