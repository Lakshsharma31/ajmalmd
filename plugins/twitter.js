const { twitter } = require('../lib/scrape')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `*This command to download twitter media with link*\n\nExample:\n${usedPrefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`
    if (!args[0].match(/(https:\/\/.*twitter.com)/gi)) throw `*Wrong link! This command to download twitter media with link*\n\nExample:\n${usedPrefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`
    twitter(args[0]).then(async res => {
    let twit = JSON.stringify(res)
    let json = JSON.parse(twit)
    let pesan = json.data.map((v) => `Link: ${v.url}`).join('\n------------\n')
    m.reply(pesan)
    for (let { url } of json.data)
    conn.sendMedia(m.chat, url, m, {jpegThumbnail: await(await fetch(thumbx)).buffer(), fileLength: fsx, caption: wm})
 })
}
handler.help = ['ᴛᴡɪᴛᴛᴇʀ'].map(v => v + ' <ᴜʀʟ>')
handler.tags = ['downloader']
handler.command = /^(twit(ter)?(dl)?(downloa?d(er)?)?)$/i



module.exports = handler
