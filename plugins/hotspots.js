let handler = async m => m.reply(`
https://discord.gg/8nPk4sH4af
*🕵Hotspot s for grinding location for XP &  best Pokemons & shiny Pokemons🕵*
*Hot Spot*
flag_gb London=
51.510077,-0.123853
flag_fr Paris 
48.86158451,2.28936430
flag_us California Disneyland = 33.811954,-117.919067
flag_us Santa Monica = 34.009033,-118.497279
flag_us Pier 39 
37.808673,-122.409821
flag_us NY Central Park = 40.770418,-73.974637
flag_us SF Union Square =37.787993 ,-122.407437
flag_hk Hong Kong 
22.319051,114.172118
flag_jp Tokyo Disneyland = 35.631209,139.880933
flag_kr Busan =
35.15396,129.05957
flag_au Sydney =
 -33.868820,151.209296
flag_hu Budapest 
47.530248,19.051257
flag_br Brazil 
 -23.549616,-46.655418
flag_gb UK =
53.190085,-2.891558
flag_us millennium park Chicago = 41.886473,-87.626356
flag_us Lincoln park zoo Chicago = 41.920118,-87.633728

New:

flag_pe Cluster spot Peru = -11.562950,-77.270210
flag_tr Bornova Büyük Park Turkey = 38.463131,27.216493
flag_es Zaragoza , Spain = 41.661609,-0.894640
flag_tw Taipei,Taiwan=
25.044004,121.506411
flag_ic Ilhas Canárias 
 28.1283,-15.4515
flag_ae Dubai
25.077159,55.133036
flag_gr Grécia 
40.627059,22.952489
`.trim()) // Tambah sendiri kalo mau
handler.help = ['hotspots']
handler.tags = ['info']
handler.command = /^hotspots$/i

module.exports = handler
