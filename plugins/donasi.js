let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [0815-1586-0089]
│ • Telkomsel: [0813-5730-2007]
│ • Smartfren: [0882-3543-5804]
│ 「 Chat OWNER 」
│ > Ingin donasi? Wa.me/6288235435804
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
