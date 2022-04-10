

let handler = async (m, { usedPrefix}) => {
let tqto = `*BIG THANKS TO*

NeeraJ-x0: 
https://github.com/Neeraj-x0
Toxic-Ajmal: 
https://github.com/Ajmal-Achu
D-3-V-1-L: 
https://github.com/D-3-V-1-L
Lord-Official: 
https://github.com/Lord-official
`
 conn.sendTBI(m.chat, tqto, wm, 'https://avatars.githubusercontent.com/u/101651973?v=4', `SOURCE CODE`, `https://github.com/Team-Electra4`, null, null, 'Menu', `${usedPrefix}menu`, null, null, null, null, m) 
}
handler.help = ['credits']
handler.tags = ['info']
handler.command = /^(credits?|thanks?to)$/i

module.exports = handler
