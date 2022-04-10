let { generateWAMessageFromContent, proto } = require('@adiwajshing/baileys')

let levelling = require('../lib/levelling')

let fs = require('fs')

let path = require('path')

let { createHash} = require('crypto')

let { perfomance } = require('perf_hooks')

let moment = require('moment-timezone')

const { default: Users } = require('node-os-utils/lib/users')

const defaultMenu = {

          before: `Bot Usage Info:\n*${lim} : ᴜsɪɴɢ ʟɪᴍɪᴛ*\n*${prem} : ᴘʀᴇᴍɪᴜᴍ ᴏɴʟʏ*\n${ucpn}%readmore`.trimStart(),

  header: `${sa}${kki} ${zt}%category${zt} ${kka}`,

  body: `${gy} ${zc}%cmd${zc} %islimit %isPremium`,

  footer: `${sb}\n`,

          after: ``,

}

let handler = async (m, { conn, usedPrefix: _p, args }) => {

  let tags

  let teks = `${args[0]}`.toLowerCase()

  let arrayMenu = ['all', 'anime', 'update', 'maker', 'edukasi', 'news', 'random', 'game', 'xp', 'islamic', 'stiker', 'rpg', 'kerangajaib', 'quotes', 'admin', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'vote', 'nsfw', 'audio', 'jadibot', 'info', 'owner']

  if (!arrayMenu.includes(teks)) teks = '404'

  if (teks == 'all') tags = {

      'main': 'ᴜᴛᴀᴍᴀ', 

      'anime': 'ᴀɴɪᴍᴇ', 

      'admin': `ᴀᴅᴍɪɴ ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,

      'group': 'ɢʀᴏᴜᴘ',

      'anonymous': 'ᴀɴᴏɴʏᴍᴏᴜs ᴄʜᴀᴛ', 

      'audio': 'ᴠᴏɪᴄᴇ ᴄʜᴀɴɢᴇʀ', 

      'downloader': 'ᴅᴏᴡɴʟᴏᴀᴅᴇʀ',

      'database': 'ᴅᴀᴛᴀʙᴀsᴇ',

      'edukasi': 'ᴇᴅᴜᴄᴀᴛɪᴏɴᴀʟ', 

      'fun': 'ғᴜɴ',

      'game': 'ɢᴀᴍᴇ',

      'xp': 'ᴇxᴘ & ʟɪᴍɪᴛ',

      'info': 'ɪɴғᴏ',

      'internet': 'ɪɴᴛᴇʀɴᴇᴛ',

      'kerang': 'ᴍᴀɢɪᴄ sʜᴇʟʟ',

      'news': 'ɴᴇᴡs', 

      'nulis': 'ᴡʀɪᴛᴇ & ʟᴏɢᴏ',

      'maker': 'ᴘʜᴏᴛᴏ & ᴠɪᴅᴇᴏ ᴍᴀᴋᴇʀ', 

      'premium': 'ᴘʀᴇᴍɪᴜᴍ', 

      'random': 'ʀᴀɴᴅᴏᴍ',

      'sticker': 'sᴛɪᴄᴋᴇʀ',

      'tools': 'ᴛᴏᴏʟs',

      'update': 'ᴜᴘᴅᴀᴛᴇ',

  }

  if (teks == 'game') tags = {

    'game': 'Game'

  }

  if (teks == 'anime') tags = {

    'anime': 'Anime'

  }

  if (teks == 'nsfw') tags = {

    'nsfw': 'Nsfw'

  }

  if (teks == 'rpg') tags = {

    'rpg': 'Rpg'

  }

  if (teks == 'edukasi') tags = {

    'edukasi': 'Edukasi'

  }

  if (teks == 'news') tags = {

    'news': 'News'

  }

  if (teks == 'random') tags = {

    'random': 'Random'

  }

  if (teks == 'xp') tags = {

    'xp': 'Exp & Limit'

  }

  if (teks == 'stiker') tags = {

    'sticker': 'Stiker'

  }

  if (teks == 'kerangajaib') tags = {

    'kerang': 'Kerang Ajaib'

  }

  if (teks == 'quotes') tags = {

    'quotes': 'Quotes'

  }

  if (teks == 'admin') tags = {

    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,

    'group': 'Grup'

  }

  if (teks == 'group') tags = {

    'group': 'Group'

  }

  if (teks == 'premium') tags = {

    'premium': 'Premium'

  }

  if (teks == 'internet') tags = {

    'internet': 'Internet'

  }

  if (teks == 'anonymous') tags = {

    'anonymous': 'Anonymous Chat'

  }

  if (teks == 'nulis') tags = {

    'nulis': 'MagerNulis & Logo',

    'maker': 'Foto & Video Maker'

  }

  if (teks == 'downloader') tags = {

    'downloader': 'Downloader'

  }

  if (teks == 'tools') tags = {

    'tools': 'Tools'

  }

  if (teks == 'fun') tags = {

    'fun': 'Fun'

  }

  if (teks == 'database') tags = {

    'database': 'Database'

  }

  if (teks == 'vote') tags = {

    'vote': 'Voting',

    'absen': 'Absen'

  }

  if (teks == 'absen') tags = {

    'absen': 'Absen'

  }

  if (teks == 'islamic') tags = {

    'islamic': 'Islamic'

  }

  if (teks == 'quran') tags = {

    'quran': 'Al-Qur\'an'

  }

  if (teks == 'audio') tags = {

    'audio': 'Pengubah Suara'

  }

  if (teks == 'jadibot') tags = {

    'jadibot': 'Jadi Bot'

  }

  if (teks == 'info') tags = {

    'info': 'Info'

  }

  if (teks == 'owner') tags = {

    'owner': 'Owner',

    'host': 'Host',

    'advanced': 'Advanced'

  }

 if (teks == 'nsfw') tags = {

    'nsfw': 'Nsfw'

  }

  if (teks == 'update') tags = {

    'update': 'Update'

  }

 

  try {

    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))

    let { level, registered } = global.db.data.users[m.sender]

    let { min, xp, max } = levelling.xpRange(level, global.multiplier)

    let name = await registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)

    let d = new Date(new Date + 3600000)

    let locale = 'id'

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const w = new Date();

    let week = weekday[w.getDay()];

    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]

    let date = d.toLocaleDateString(locale, {

      day: 'numeric',

      month: 'long',

      year: 'numeric'

    })

    let time = d.toLocaleTimeString(locale, {

      hour: 'numeric',

      minute: 'numeric',

      second: 'numeric'

    })

    let _uptime = process.uptime() * 1000

    let _muptime

    if (process.send) {

      process.send('uptime')

      _muptime = await new Promise(resolve => {

        process.once('message', resolve)

        setTimeout(resolve, 1000)

      }) * 1000

    }

    let muptime = clockString(_muptime)

    let uptime = clockString(_uptime)

    let who = m.sender

         

let aoa = `>>>>>>>🍁𝕜𝕒𝕜𝕒𝕤𝕙𝕚 𝕓𝕠𝕥𝕫🍁<<<<<<<<<

                      

ᷪ   👋 (♥ω♥)  ᴋᴏɴɴɪᴄʜɪᴡᴀ  ${conn.getName(who)}

ᷪ

ᷪ  ɪ ᴀᴍ  ғᴀʟʟᴇɴ ᴀɴɢᴇʟ 🥀✨

   

    🎋 ʙᴏᴛ ɪɴғᴏ 🎋

ᷪ

ᷪ 🚀 ʀᴜɴᴛɪᴍᴇ  : ${uptime}

ᷪ

ᷪ🚀 ᴍʏ ᴍᴀsᴛᴇʀ : *${wm}*

ᷪ

ᷪ 🚀 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${package.version}

ᷪ

ᷪ🚀 sᴜᴘᴘᴏʀᴛ ɢʀᴏᴜᴘ :-  http://gg.gg/Fallen_angel_support

ᷪ

┏━━━━━━━━━━━━━━━━━━┓

┃ 🧧 ғᴀʟʟᴇɴ ᴀɴɢᴇʟ ᴍᴅ 🧧

┗━━━━━━━━━━━━━━━━━━┛  \n`.trim()

let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {

    return {

      help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],

      tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],

      prefix: 'customPrefix' in plugin,

      limit: plugin.limit,

      premium: plugin.premium,

      enabled: !plugin.disabled,

    }

  })

    if (teks == '404') {

        const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({

        listMessage: {

            title: aoa,

            description: 'Bot under development so report you issues to owner',

            buttonText: 'Command list',

            listType: 1,

            footerText: wm,

            mtype: 'listMessage',

            sections: [

              {

                "rows": [{

                  "title": `𝐀𝐋𝐋 𝐅𝐔𝐍𝐂𝐓𝐈𝐎𝐍𝐒`,

                  "description": "ᴀʟʟ ʙᴏᴛ ғᴜɴᴄᴛɪᴏɴs",

                  "rowId": `${_p}? all`

                  }],

                "title": `List Menu ${conn.user.name}`

              }, {

                "rows": [{

                  "title": `𝐀𝐍𝐈𝐌𝐄`,

                  "description": "ᴀɴɪᴍᴇ ʀᴇʟᴀᴛᴇᴅ ғᴜɴᴄᴛɪᴏɴs",

                  "rowId": `${_p}? anime`

                }],

                "title": "─────「 1 」"

              }, {

                "rows": [{

                  "title": `𝐀𝐃𝐌𝐈𝐍 & 𝐆𝐑𝐎𝐔𝐏`,

                  "description": "ғᴜɴᴄᴛɪᴏɴs ғᴏʀ ᴀᴅᴍɪɴ & ɢʀᴏᴜᴘ",

                  "rowId": `${_p}? admin`

                }],

                "title": "─────「 2 」"

              }, {

                "rows": [{

                  "title": `𝐀𝐍𝐎𝐍𝐘𝐌𝐎𝐔𝐒`,

                  "description": "ᴀɴᴏɴʏᴍᴏᴜs ᴄʜᴀᴛ ᴠɪᴀ ᴡʜᴀᴛsᴀᴘᴘ",

                  "rowId": `${_p}? anonymous`

                }],

                "title": "─────「 3 」"

              }, {

                "rows": [{

                  "title": `𝐀𝐔𝐃𝐈𝐎`,

                  "description": "ᴀᴜᴅɪᴏ ᴇᴅɪᴛɪɴɢ ғᴜɴᴄᴛɪᴏɴs",

                  "rowId": `${_p}? audio`

                }],

                "title": "─────「 4 」"

              }, {

                "rows": [{

                  "title": `𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑`,

                  "description": "ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇᴅɪᴀ ғɪʟᴇs (ᴘʜᴏᴛᴏ,ᴠɪᴅᴇᴏ,ғɪʟᴇ)",

                  "rowId": `${_p}? downloader`

                }],

                "title": "─────「 5 」"

              }, {

                "rows": [{

                  "title": `𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄`,

                  "description": "ᴅᴀᴛᴀʙᴀsᴇ ʀᴇʟᴀᴛᴇᴅ ғᴜɴᴄᴛɪᴏɴs",

                  "rowId": `${_p}? database`

                }],

                "title": "─────「 6 」"

              }, {

                "rows": [{

                  "title": `𝐄𝐃𝐔𝐂𝐀𝐓𝐈𝐎𝐍𝐀𝐋`,

                  "description": "ᴇᴅᴜᴄᴀᴛɪᴏɴᴀʟ ғᴜɴᴄᴛɪᴏɴs ғᴏʀ ᴇᴠᴇʀʏᴅᴀʏ",

                  "rowId": `${_p}? edukasi`

                }],

                "title": "─────「 7 」"

              }, {

                "rows": [{

                  "title": `𝐅𝐔𝐍`,

                  "description": "ᴛʜᴇ ғᴜɴ ғᴜɴᴄᴛɪᴏɴs ɪs ᴊᴜsᴛ ғᴏʀ ғᴜɴ, ᴅᴏɴ'ᴛ ʙᴇ ɴᴇʀᴠᴏᴜs <3",

                  "rowId": `${_p}? fun`

                }],

                "title": "─────「 8 」"

              }, {

                "rows": [{

                  "title": `𝐆𝐀𝐌𝐄`,

                  "description": "ғᴜɴᴄᴛɪᴏɴs ᴛᴏ ᴘʟᴀʏ ɢᴀᴍᴇs ᴀɴᴅ ɢᴇᴛ xᴘ ғᴏʀ ʟᴇᴠᴇʟᴜᴘ",

                  "rowId": `${_p}? game`

                }],

                "title": "─────「 9 」"

              }, {

                "rows": [{

                  "title": `𝐈𝐍𝐅𝐎`,

                  "description": "ᴋɴᴏᴡ ᴍᴏʀᴇ ᴀʙᴏᴜᴛ ᴛʜɪs ʙᴏᴛ",

                  "rowId": `${_p}? info`

                }],

                "title": "─────「 10 」"

              }, {

                "rows": [{

                  "title": `𝐈𝐍𝐓𝐄𝐑𝐍𝐄𝐓`,

                  "description": "ғᴜɴᴄᴛɪᴏɴs ғᴏʀ ʙʀᴏᴡsɪɴɢ ᴛʜᴇ ɪɴᴛᴇʀɴᴇᴛ",

                  "rowId": `${_p}? internet`

                 }],

                 "title": "─────「 11 」"

              }, {

                "rows": [{

                  "title": `𝐉𝐀𝐃𝐈𝐁𝐎𝐓`,

                  "description": "ᴛᴇᴍᴘᴏʀᴀʀʏ ʙᴏᴛ ғᴜɴᴄᴛɪᴏɴs",

                  "rowId": `${_p}? jadibot`

                }],

                "title": "─────「 13 」"

              }, {

                "rows":[{

                  "title": `𝐌𝐚𝐠𝐢𝐜 𝐒𝐜𝐚𝐥𝐥𝐨𝐩`,

                  "description": "ʀᴀɴᴅᴏᴍ ᴀɴsᴡᴇʀs ғʀᴏᴍ ʙᴏᴛs, ᴅᴏɴ'ᴛ ʏᴏᴜ ᴋɴᴏᴡ ʏᴏᴜ'ᴠᴇ ɴᴇᴠᴇʀ ᴡᴀᴛᴄʜᴇᴅ sᴘᴏɴɢᴇʙᴏʙ??",

                  "rowId": `${_p}? kerangajaib`

                }],

                "title": "─────「 14 」"

              }, {

                "rows": [{

                  "title": `𝐍𝐞𝐰𝐬`,

                  "description": "ʟᴏᴄᴀʟ ᴛᴏ ɪɴᴛᴇʀɴᴀᴛɪᴏɴᴀʟ ɴᴇᴡs",

                  "rowId": `${_p}? news`

                }],

                "title": "─────「 15 」"

              }, {

                "rows": [{

                  "title": ` 𝐖𝐑𝐈𝐓𝐄 & 𝐋𝐎𝐆𝐎`,

                  "description": "ᴡʀɪᴛᴇ ᴀɴᴅ ᴍᴀᴋᴇ ʟᴏɢᴏs",

                  "rowId": `${_p}? nulis`

                }],

                "title": "─────「 16 」"

              }, {

                "rows": [{

                  "title": `𝐏𝐑𝐄𝐌𝐈𝐔𝐌`,

                  "description": "ғᴜɴᴄᴛɪᴏɴs ғᴏʀ ᴘʀᴇᴍɪᴜᴍ ᴜsᴇʀs, ɪғ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ᴜsᴇ ɪᴛ, ʀᴇɢɪsᴛᴇʀ ғᴏʀ ᴘʀᴇᴍɪᴜᴍ sᴜʙsᴄʀɪᴘᴛɪᴏɴ",

                  "rowId": `${_p}? premium`

                }],

                "title": "─────「 18 」"

              },{

                "rows": [{

                  "title": `𝐑𝐀𝐍𝐃𝐎𝐌`,

                  "description": "ʀᴀɴᴅᴏᴍ ᴘʜᴏᴛᴏs, ᴠɪᴅᴇᴏs, ᴀɴᴅ sᴛɪᴄᴋᴇʀs",

                  "rowId": `${_p}? random`

                }],

                "title": "─────「 21 」"

              }, {

                "rows": [{

                  "title":  `𝐒𝐓𝐈𝐂𝐊𝐄𝐑`,

                  "description": "sᴛɪᴄᴋᴇʀ ғᴜɴᴄᴛɪᴏɴs",

                  "rowId": `${_p}? stiker`

                }],

                "title": "─────「 22 」"

              }, {

                "rows": [{

                  "title":  `𝐓𝐎𝐎𝐋𝐒`,

                  "description": "ᴛᴏᴏʟs ғᴜɴᴄᴛɪᴏɴs",

                  "rowId": `${_p}? tools`

                }],

                "title": "─────「 23 」"

              }, {

                "rows": [{

                  "title":  `𝐀𝐂𝐂𝐄𝐒𝐒 𝐅𝐔𝐍𝐂𝐓𝐈𝐎𝐍𝐒`,

                  "description": "ᴄʜᴇᴄᴋ ʟᴇᴠᴇʟ, xᴘ, ʟɪᴍɪᴛ, ᴀɴᴅ ᴜsᴇʀ ʀᴇɢɪsᴛʀᴀᴛɪᴏɴ",

                  "rowId": `${_p}? xp`

                }],

                "title": "─────「 26 」"

                }, {

                "rows": [{

                  "title":  `𝗢𝗪𝗡𝗘𝗥`,

                  "description": `sᴘᴇᴄɪᴀʟ ғᴜɴᴄᴛɪᴏɴs ғᴏʀ ᴏᴡɴᴇʀ ${conn.user.name}`,

                  "rowId": `${_p}? owner`

                }],

                "title": "─────「 27 」"

              }

            ], "contextInfo": {

              "stanzaId": m.key.id,

              "participant": m.sender,

              "quotedMessage": m.message

            }

    }}), { userJid: m.participant || m.key.remoteJid, quoted: m });

    return await conn.relayMessage(

        m.key.remoteJid,

        template.message,

        { messageId: template.key.id }

    )

    }

    let groups = {}

    for (let tag in tags) {

      groups[tag] = []

      for (let plugin of help)

        if (plugin.tags && plugin.tags.includes(tag))

          if (plugin.help) groups[tag].push(plugin)

      // for (let tag of plugin.tags)

      //   if (!(tag in tags)) tags[tag] = tag

    }

    conn.menu = conn.menu ? conn.menu : {}

    let before = conn.menu.before || defaultMenu.before

    let header = conn.menu.header || defaultMenu.header

    let body = conn.menu.body || defaultMenu.body

    let footer = conn.menu.footer || defaultMenu.footer

    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Presented by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after

    let _text = [

        before,

        ...Object.keys(tags).map(tag => {

          return header.replace(/%category/g, tags[tag]) + '\n' + [

            ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {

              return menu.help.map(help => {

                return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)

                  .replace(/%islimit/g, menu.limit ? `${lim}` : '')

                  .replace(/%isPremium/g, menu.premium ? `${prem}` : '')

                  .trim()

              }).join('\n')

            }),

            footer

          ].join('\n')

        }),

        after

      ].join('\n')

      text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''

    let replace = {

      '%': '%',

      p: _p, uptime, muptime,

      me: conn.user.name,

      npmname: package.name,

      npmdesc: package.description,

      version: package.version,

      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',

      name,

      ucapan: ucapan(),

      name, weton, week, date, time,

      readmore: readMore

    }

    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

    //let pp = await conn.profilePictureUrl(conn.user.jid, 'image').catch(_ => path.join(__dirname, '../src/avatar_contact.png'))

    //await conn.sendTBL(m.chat, text.trim(), wm, fla + teks, dtu, urlnya, dtc, nmbrnya, `🏅Owner`, `${_p}owner`, `🎖ThanksTo`, `${_p}tqto`, `🎗  Info Bot  🎗`, `${_p}infobot`, m)

    await conn.sendTBD(m.chat, text, wm, thumbd, dtu, urlnya, dtc, nmbrnya, `🏅Owner`, `${_p}owner`, `🎖ThanksTo`, `${_p}credits`, `🎗 Bot Info 🎗`, `${_p}info`)

    } catch (e) {

    conn.reply(m.chat, 'Menu Error , Try Again later', m)

    throw e

  }

}

handler.help = ['ᴍᴇɴᴜ']

handler.tags = ['main']

handler.command = /^(menu|help|list|\?)$/i

handler.owner = false

handler.mods = false

handler.premium = false

handler.group = false

handler.private = false

handler.admin = false

handler.botAdmin = false

handler.fail = null

handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)

const readMore = more.repeat(4001)

function clockString(ms) {

  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)

  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60

  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60

  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')

}

function ucapan() {

  const time = moment.tz('Asia/Kolkata').format('HH')

  res = "Don't forget to  sleep Luv U<3"

  if (time >= 4) {

    res = "Good morning"

  }

  if (time > 10) {

    res = "Good afternoon"

  }

  if (time >= 15) {

    res = "Good afternoon"

  }

  if (time >= 18) {

    res = "Good night"

  }

  return res

}
