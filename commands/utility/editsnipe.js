const Discord = require('discord.js')

module.exports = {
   name: "editsnipe",
	 description: "View the last edited message in this channel",
  permissions: ['MANAGE_MESSAGES'],
	 run: async(client, interaction) => {

     const msg = client.editsnipes.get(interaction.guild.id)
        if (!msg) return interaction.reply('There\'s nothing to snipe!')
        const embed = new Discord.MessageEmbed()
            .setAuthor(msg.author, msg.member.user.displayAvatarURL())
            .addField('Old Content', msg.oldContent)
            .addField('New Content', msg.newContent)
            .setFooter(`#${msg.channel}`)
            .setColor('#2f3136')
            .setTimestamp()
          interaction.reply({ embeds: [embed] });
	
	 }
}