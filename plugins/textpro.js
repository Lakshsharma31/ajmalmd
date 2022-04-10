
  let fetch = require('node-fetch')

  let split = ','
  
  let handler = async(m, { conn,usedPrefix, args: [effect], text: txt }) => {
    const more = String.fromCharCode(8206)
    const readMore = more.repeat(4001)
  
    let { effects } = await (await (fetch(API('xteam', '/textpro')))).json()
    if (!effect) throw `Usage : ${usedPrefix}textpro <effect>,<text>\n\n${readMore} *Effect List*\n\n🌹` + effects.sort().join('\n🌹')
    effect = effect.toLowerCase()
    if (!effect in effects) throw `Effect *${effect}* not found`
    let [text, ...text2] = txt.replace(effect, '').trimStart().split(split)
    text2 = text2.join(split)
    let url = API('xteam', '/textpro/' + effect, { text, text2 }, 'APIKEY')
    await conn.sendFile(m.chat, url, 'file.jpg', `*TEXTPRO*\n*Effect:* ${effect}`, m, 0, { thumbnail: Buffer.alloc(0) })
  }
  handler.help = ['ᴛᴇxᴛᴘʀᴏ'].map(v => v + ' <ᴇғғᴇᴄᴛ> <ᴛᴇxᴛ> [ᴛᴇxᴛ2]')
  handler.tags = ['tools']
  handler.command = /^(textpro)$/i
  handler.sudo = true
  
  module.exports = handler
  