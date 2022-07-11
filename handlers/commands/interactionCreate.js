module.exports = async (client) => {
	const Timeout = new Set()
	const humanizeDuration = require("humanize-duration")
  client.on('interactionCreate', async interaction => {
    if(interaction.isCommand()) {
     const slash_commands = client.slashcommands.get(interaction.commandName);


			if(slash_commands) {

        if(slash_commands.permissions) {
          if(!interaction.user.permissions.has(slash_commands.permissions)) {
            const embed = new client.Discord.MessageEmbed()
            .setColor('#2f3136')
            .setDescription(`You need the \`${slash_commands.permissions}\` to run this command!`)
            interaction.reply({embeds: [embed]})
          }
        }
				if (slash_commands.timeout) {
                if (Timeout.has(`${interaction.user.id}${slash_commands.name}`)) {
                    return interaction.reply({ content: `You need to wait **${humanizeDuration(slash_commands.timeout, { round: true })}** to use command again`, ephemeral: true })
                }
				}
      slash_commands.run(client, interaction);
					Timeout.add(`${interaction.user.id}${slash_commands.name}`)
            setTimeout(() => {
                Timeout.delete(`${interaction.user.id}${slash_commands.name}`)
            }, slash_commands.timeout)
			const embed = new client.Discord.MessageEmbed()
			.setTitle('Interaction (/) command ran')
			.setAuthor(interaction.user.tag, interaction.user.displayAvatarURL({format: 'png', dynamic: true}))
			.addField('Interaction Author', `\`\`\`${interaction.user.tag}\`\`\``)
			.addField('Command Name', `\`\`\`${interaction.commandName}\`\`\``)
			.addField('Guild Name', `\`\`\`${interaction.guild.name}\`\`\``)
			.addField('Guild ID', `\`\`\`${interaction.guild.id}\`\`\``)
			.addField('Channel Name', `\`\`\`${interaction.channel.name}\`\`\``)
			.addField('Channel ID', `\`\`\`${interaction.channel.id}\`\`\``)
			.setTimestamp()
			.setColor('#2f3136')
			client.channels.cache.get('894164132704714765').send({embeds: [embed]})
		}

  }
		})
	}