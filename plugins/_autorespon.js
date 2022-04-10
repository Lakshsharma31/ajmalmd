let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    let setting = global.db.data.settings

    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Invitation to join') || m.text.startsWith('Invitation to join') || m.text.startsWith('Open this link')) && !m.isBaileys && !m.isGroup) {
    let teks = `${sa}${kki} Invite Group ${kka}
𝚃𝚑𝚒𝚜 𝚌𝚘𝚖𝚖𝚊𝚗𝚍 𝚒𝚜 𝚏𝚘𝚛 𝚙𝚛𝚎𝚖𝚒𝚞𝚖 𝚞𝚜𝚎𝚛𝚜 𝚒𝚏 𝚢𝚘𝚞 𝚠𝚊𝚗𝚝 𝚝𝚘 𝚋𝚎𝚌𝚘𝚖𝚎 𝚊 𝚙𝚛𝚎𝚖𝚒𝚞𝚖 𝚖𝚎𝚖𝚋𝚎𝚛 𝚙𝚕𝚎𝚊𝚜𝚎 𝚌𝚘𝚗𝚝𝚊𝚌𝚝 𝚝𝚑𝚎 𝚘𝚠𝚗𝚎𝚛${sb}

If interested contact: @${global.owner[0]} :)
`
    this.sendB(m.chat, teks, wm, null, [[`𝙲𝚘𝚗𝚝𝚊𝚌𝚝 𝙾𝚠𝚗𝚎𝚛`, `.premium`]], m, { mentions: this.parseMention(teks) })
    }



}

module.exports = handler
