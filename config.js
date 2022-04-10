global.util = require('util')
global.fs = require('fs')
global.fetch = require('node-fetch')
global.chalk = require('chalk')
global.os = require('os')
global.moment = require('moment-timezone')
global.axios = require('axios')
global.cheerio = require('cheerio')
global.scrape = require('./lib/scrape')
global.xfr = require('xfarr-api')
global.yzu = require('yuzzu-api')
global.dhn = require('dhn-api')
global.hxz = require('hxz-api')
global.bochil = require('@bochilteam/scraper')
global.baileys = require('@adiwajshing/baileys')


global.owner = ["919389379221"] // Change owner number => src/premium.json
global.mods = JSON.parse(fs.readFileSync('./src/moderator.json')) // Moderator?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Premium user has unlimited limit

global.devx = 'false'

global.APIs = { // API Prefix
//======= name: 'https://website' ========//
  nrtm: 'https://nurutomo.herokuapp.com',
  lolhum: 'https://api.lolhuman.xyz',
  hardianto: 'https://hardianto.xyz',
  neoxr: 'https://api.neoxr.eu.org',
  xteam: 'https://api.xteam.xyz',
  zeks: 'https://api.zeks.me' 
}
global.APIKeys = { // APIKey Here
//======= 'https://website': 'apikey' =======//
  'https://api.lolhuman.xyz': '7ecba1cc37eca2e93d6a983b',
  'https://hardianto.xyx': 'hardianto',
  'https://api.neoxr.eu.org': 'yourkey',
  'https://api.xteam.xyz': '4ed1ef79ec3bb779',
  'https://api.zeks.me': 'apivinz'
}


//=========== Bot Name =============//
global.name = 'fellen-angel-MD'

//=========== Don't Change ============//
global.packname = `Mrs Dia hatake🚀`
global.author = 'ᴹᴿ᭄ ᴋᴀᴋᴀsʜɪོ ×፝֟͜×'
//=====================================//


//====================================≠=//
global.pclg = 'ᴛᴇᴀᴍ ᴇʟᴇᴄᴛʀᴀ'
global.aclg = 'sᴏɴɪᴄ ᴍᴅ'
//======================================//

global.wm = 'ᴀᴊᴍᴀʟ ᴛᴇᴀᴍ ᴇʟᴇᴄᴛʀᴀ'
global.ucpn = ''

//================= Url =================//
global.linkgc = 'https://chat.whatsapp.com/HZ4c5yrsd0g8OfELZGySFZ'
global.linkig = 'https://Instagram.com/kakashi_coder'
global.linkyt = ''
global.linkfb = 'https://fb.watch/aYv0jAffAO'
global.web = 'https://github.com/Team-Electra4'
global.web1 = 'https://Instagram.com/kakashi_coder'

global.deslink = ''
global.titlink = 'Folllow me on Instagram'
global.bodlink = '@kakashi_coder'

//========= Url Template Button =========//
global.dtu = 'ᴏᴡɴᴇʀ ɪɴsᴛᴀ'
global.urlnya = 'https://www.instagram.com/kakashi_coder'

//========= Call Template Button =========//
global.dtc = 'ᴄᴀʟʟ ᴏᴡɴᴇʀ'
global.nmbrnya = '919389379221'


//============ The bot process ============//
global.wait = '𝙋𝙇𝞢𝞓𝙎𝞢 𝙒𝞓𝙄𝙏,𝙋𝞒𝞗𝘾𝞢𝙎𝙎𝙄𝙉𝙂☢️⏳'
global.eror = '𝙎𝞗𝙈𝞢𝙏𝙃𝙄𝙉𝙂 𝙒𝞢𝙉𝙏 𝙒𝞒𝞗𝙉𝙂,𝙋𝙇𝞢𝞓𝙎𝞢 𝙏𝞒𝙔 𝞓𝙂𝙄𝞓𝙉⚠️'


//========== Bot View ===========//
global.sa = '╭─'
global.gx = '│✇'
global.gy = '│•'
global.gz = '│'
global.sb = '╰────࿐'
global.kki = '「'
global.kka = '」'
global.zt = '*'
global.zc = ''
global.lim ='Ⓛ'
global.prem = 'Ⓟ'

//======== Fake Size ========//
global.fsx = 999999999999  //fake size foto/video
global.fsdx = 9999999999999  //fake size document 
global.pcdx = 999999999999  // fake page count document

global.versibot = '^0.0.4'

global.multiplier = 69 // The higher, The harder levelup
global.nolink = 'No URL Found'
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
