const { Tiktok } = require('xfarr-api')
const { tiktok } = require('../lib/scrape')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `_${nolink}_\n\nExample:\n${usedPrefix + command} https://vm.tiktok.com/ZGJBtcsDq/`
  if (!args[0].match(/tiktok/gi)) throw `_Invalid URL_`
  await m.reply(wait)
  try {
  var anu = await Tiktok(args[0])
  var { medias } = anu
  let cap = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${medias[1].url}`)).data}`
  await conn.sendMedia(m.chat, medias[1].url, null, {caption: cap, mentions: [m.sender]})
  } catch {
    try {
    var anuu = await tiktok(args[0])
    var { nowm } = anuu
    let cap = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)).data}`
    conn.sendMedia(m.chat, nowm, 0, {caption: cap, mentions: [m.sender]})
  } catch {
    throw eror 
   }
 }
}
handler.help = ['ᴛɪᴋᴛᴏᴋ'].map(v => v + ' <ᴜʀʟ>')
handler.tags = ['downloader', 'premium']
handler.command = /^(tt|tiktok)?(download(er)?)?$/i

handler.premium = true

module.exports = handler

