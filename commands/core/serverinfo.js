const Discord = require('discord.js');

module.exports = {
	name: 'serverinfo',
	description: 'Get serverinfo!',
	run: async(client, interaction) => {
		const message = interaction;
		const guild = interaction.guild;

		const embed = new Discord.MessageEmbed()
		.setTitle(message.guild.name)
		.addField('<:Tekno_Discord:951543783877668976> Server Owner ID', `\`\`\`${message.guild.ownerId}\`\`\``)
		.addField('<:Tekno_Discord:951543783877668976> Server ID', `\`\`\`${guild.id}\`\`\``)
		.addField('<:Tekno_Member:951526699663773888> Total Members', `\`\`\`${guild.memberCount}\`\`\``, true)
		.addField('<:Tekno_Member:951526699663773888> Total Humans', `\`\`\`${message.guild.memberCount - guild.members.cache.filter(m => m.user.bot).size}\`\`\``, true)
		.addField('<:Tekno_Robot:951526699634397234> Total Bots', `\`\`\`${message.guild.members.cache.filter(m => m.user.bot).size}\`\`\``, true)
		.addField('<:Tekno_lock:951526699588264018> Description', `\`\`\`${message.guild.description ? message.guild.description : 'None'}\`\`\``)
		.setThumbnail(message.guild.iconURL({dynamic: true}))
		.setColor('#2f3136')

		message.reply({embeds: [embed]})
		
	}
}