let handler = async (m, {conn}) => {
  conn.sendTBI(m.chat, `𝚃𝚑𝚊𝚗𝚔𝚜 𝚏𝚘𝚛 𝚢𝚘𝚞𝚛 𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝 𝚒𝚗 𝚞𝚜𝚒𝚗𝚐 𝚘𝚞𝚛 𝚙𝚛𝚘𝚓𝚎𝚌𝚝 𝚋𝚞𝚝 𝚞𝚗𝚏𝚘𝚛𝚝𝚞𝚗𝚊𝚝𝚎𝚕𝚢 𝚝𝚑𝚒𝚜 𝚙𝚛𝚘𝚓𝚎𝚌𝚝 𝚒𝚜 𝚜𝚝𝚒𝚕𝚕 𝚞𝚗𝚍𝚎𝚛 𝚍𝚎𝚟𝚎𝚕𝚘𝚙𝚖𝚎𝚗𝚝 𝚊𝚗𝚍  𝚠𝚎 𝚑𝚊𝚟𝚎𝚗'𝚝 𝚖𝚊𝚍𝚎 𝚝𝚑𝚎 𝚜𝚘𝚞𝚛𝚌𝚎 𝚌𝚘𝚍𝚎 𝚙𝚞𝚋𝚕𝚒𝚌. 𝙼𝚎𝚊𝚗𝚠𝚑𝚒𝚕𝚎 𝙵𝚘𝚕𝚕𝚘𝚠 𝚄𝚜 𝚘𝚗 𝙶𝚒𝚝𝚑𝚞𝚋.𝚂𝚘 𝚝𝚑𝚊𝚝 𝚢𝚘𝚞 𝚌𝚊𝚗 𝚌𝚑𝚎𝚌𝚔 𝚠𝚎𝚊𝚝𝚑𝚎𝚛 𝚠𝚎 𝚑𝚊𝚟𝚎 𝚖𝚊𝚍𝚎 𝚝𝚑𝚎 𝚜𝚘𝚞𝚛𝚌𝚎 𝚌𝚘𝚍𝚎 𝚙𝚞𝚋𝚕𝚒𝚌 𝚘𝚛 𝚗𝚘𝚝.`, wm, 'https://avatars.githubusercontent.com/u/101651973?v=4', `𝙶𝚒𝚝𝙷𝚞𝚋`, `https://github.com/Team-Electra4`, null, null, '𝙼𝚎𝚗𝚞', `.menu`, null, null, null, null, m) 
}
handler.help = ['sᴏᴜʀᴄᴇᴄᴏᴅᴇ','ɢɪᴛ']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode|git)$/i

module.exports = handler


