let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `Use example ${usedPrefix}${command} i'm`
    conn.reply(m.chat, `
  ${command} *${text}*
  *${text}* is *${(101).getRandom()}*% ${command.replace('how', '').toUpperCase()}
  `.trim(), m, m.mentionedJid ? {
        mentions: m.mentionedJid
    } : {})
}
handler.help = ['gay', 'lesbian', 'smart', 'beautiful', 'handsome', 'chutya', 'pagal', 'MC', 'stupid', 'idiot', 'selfish'].map(v => 'how' + v + ' siapa?')
handler.tags = ['kerang', 'fun']
handler.command = /^how(gay|lesbian|smart|beautiful|handsome|chutya|pagal|MC|stupid|idiot|selfish)/i

export default handler