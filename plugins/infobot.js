let handler = async (m, { conn, command, usedPrefix, text }) => {
  let fetch = require('node-fetch')
  let _uptime = process.uptime() * 1000
  let a = require('moment-timezone').tz('Asia/Kolkata').format('HH:mm:ss') 
  let d = new Date(new Date + 3600000)
  let locale = 'in'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  let runtime = clockString(_uptime)
  let usergakdaftar = Object.keys(global.db.data.users).length
  let userdaftar = Object.values(global.db.data.users).filter(user => user.registered == true).length
  let infonyacok = `
${sa}${kki} ${conn.user.name} ${kka}
${gy} Library : *Baileys-MD*
${gy} Language : *Javascript*
${gy} Database : *SQL*
${gy} Version : *${versibot}*
${gy} Developer : *ᴛᴇᴀᴍ ᴇʟᴇᴄᴛʀᴀ*
${gy} Runtime : *${runtime}*
${gy} Prefix : *Multi Prefix 「 ${usedPrefix} 」*
${gy} Mode : *${global.opts['self'] ? 'Self' : 'Public'}*
${gy} User : *${usergakdaftar}*
${gy} Register : *${userdaftar}*
${sb}
`.trim()
var as = `Date :${date}\nTime : ${a} (WIB)`
 //conn.sendTIL(m.chat, infonyacok, as, fla + `${command}`, `Source Code`, `https://github.com/Team-Electra4`, null, null, `Menu`, `${usedPrefix}menu`, null, null, null, null, m, 
   conn.sendBL(m.chat, infonyacok, as, fla + `${command}`, [[`𝙶𝚒𝚝`, `${usedPrefix}sc`], [`𝙼𝚎𝚗𝚞`, `${usedPrefix}menu`]], m,        
           )

}
handler.help = ['ɪɴғᴏ']
handler.tags = ['info']
handler.command = /^(info(bot)?)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

