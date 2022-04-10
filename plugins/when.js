let handler = async (m, { conn, text }) => {
	if (!text) throw false
    conn.reply(m.chat, `
*ǫᴜᴇsᴛɪᴏɴ:* ${m.text}
*ᴀɴsᴡᴇʀ:* ${Math.floor(Math.random() * 10)} ${pickRandom(['second', 'minute', 'hour', 'day', 'week', 'month', 'year', 'decade', 'century'])} again ...
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['ᴡʜᴇɴ <ᴛᴇxᴛ>?']
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^kapan(kah)?$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

