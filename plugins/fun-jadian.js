let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let b
    do b = ps.getRandom()
    while (b === a)
    m.reply(`${toM(a)} โค๏ธ ${toM(b)} Made for Each Other๐๐๐`, null, {
        mentions: [a, b]
    })
}
handler.help = ['couple']
handler.tags = ['fun']
handler.command = ['couple']

handler.group = true

export default handler