let gtts = require('node-gtts')
let fs = require('fs')
let path = require('path')
const defaultLang = 'en'
let handler = async (m, { conn, usedPrefix, command, args }) => {
  let name = m.sender
  let text = args[0]
  let lang = args.slice(1).join('|')
  if ((args[1] || '').length !== 2) {
    lang = defaultLang
    text = args.join(' ')
  }
  if (!text && m.quoted && m.quoted.text) text = m.quoted.text

  let res
  try { res = await tts(text, lang) }
  catch {
    res = await tts(text)
  } finally {
  if(res) conn.sendFile(m.chat, res, 'tts.opus', null, m, true) 
   else return m.reply(`Need Text to Speak \n \nExample: *${usedPrefix}${command} Team-Electra*`)
  }
}
handler.help = ['ᴛᴛs <ᴛᴇxᴛ>|<ʟᴀɴɢ> ']
handler.tags = ['tools']
handler.command = /^g?tts$/i
module.exports = handler

function tts(text, lang = 'id') {
  console.log(lang, text)
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(lang)
      let filePath = path.join(__dirname, '../tmp', (1 * new Date) + '.wav')
      tts.save(filePath, text, () => {
        resolve(fs.readFileSync(filePath))
        fs.unlinkSync(filePath)
      })
    } catch (e) { reject(e) }
  })
}
