let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Axis [0838-3331-0095]
│ • Telkomsel [BELUM ADA]
│ • Gopay [BELUM ADA]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285762102148
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
