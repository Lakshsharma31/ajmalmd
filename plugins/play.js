const { youtubeSearch } = require('@bochilteam/scraper')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  let lang = db.data.users[m.sender].language
    let con = `Example: ${usedPrefix}${command} i see your monster`
    let teks = await conn.trans(lang, con).catch(async _ => await conn.trans2(lang, con))
    if(!text) return m.reply(teks)
    let w = await conn.trans(lang, wait).catch(async _ => await conn.trans2(lang, wait))
    m.reply(w)
    let titlex = await conn.trans(lang, titlink).catch(async _ => await conn.trans2(lang, titlink))
    let anu = await youtubeSearch(text)
    let vid = anu.video
    let vide 
    if (/playrand(om)?$/i.test(command)) vide = conn.rand(vid)
    else vide = vid[0]
    let novid = await conn.trans(lang, 'Video/Audio Not found').catch(async _ => await conn.trans2(lang, 'Video/Audio Not found'))
    if(!vide) return conn.sendB(m.chat, novid, wm, null, [[await conn.trans(lang, 'Try again').catch(async _ => await conn.trans2(lang, 'Try again')), `.play ${text} Heat waves`]], m) 
    let { authorName, title, url, thumbnail, durationH, viewH, publishedTime } = vide
    let capt = ` 
📌 *Title:* ${title}

⌚ *Duration:* ${durationH}

👁️ *Viewers:* ${viewH}

⏲️ *Uploaded:* ${publishedTime}

👑 *Channel:* ${authorName}`

    conn.sendTBI2(m.chat, capt, wm,thumbnail,"Play on Youtube", url,'🎧 Audio 🎧',`${usedPrefix}psp ${url}`, '📽 Video 📽',`${usedPrefix}ytv ${url}`,m,{     contextInfo: {
      jpegThumbnail: await(await fetch(thumbd)).buffer(),
      mentionedJid: [m.sender],
      externalAdReply :{
      mediaUrl: `${url}`,
      mediaType: 2,
      description: deslink, 
      title: titlex+'ツ', 
      body: bodlink,
      thumbnail: await(await fetch(thumbnail)).buffer()
      }} })
}

handler.help = ['ᴘʟᴀʏ'].map(v => v + ' <ǫᴜᴇʀʏ>')
handler.tags = ['downloader']
handler.command = /^(play|song)$/i

module.exports = handler


