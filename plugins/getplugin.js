let handler = async (m, { usedPrefix, command, text }) => {
    let ar = Object.keys(plugins)
    let ar1 = ar.map(v => v.replace('.js', ''))
    if (!text) throw `Enter plugin name?\n\nExample:\n${usedPrefix + command} menu`
    if (!ar1.includes(text)) return m.reply(`'${text}' not found!\n\n${ar1.map(v => ' ' + v).join`\n`}`)
    m.reply(require('fs').readFileSync('./plugins/' + text + '.js', 'utf-8'))
}
handler.help = ['ɢᴇᴛᴘʟᴜɢɪɴ'].map(v => v + ' <ᴛᴇxᴛ>')
handler.tags = ['host']
handler.command = /^(getplugin|gp)$/i

handler.rowner = true 

module.exports = handler
