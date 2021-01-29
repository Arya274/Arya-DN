let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Xl [087877451059]
│ • Indosat [085713643454]
│ • Gopay [081357302007]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6287877451059
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
