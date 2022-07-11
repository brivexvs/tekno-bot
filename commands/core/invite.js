const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'invite',
    description: 'Invite me!',
    run: async(client, interaction) => {

        let link = "https://discord.com/api/oauth2/authorize?client_id=" + client.user.id + "&permissions=8&scope=bot",
            invite = "https://discord.gg/KJjZnxZ"

      const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setLabel('Bot Invite')
					.setStyle('LINK')
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=536898576&scope=bot`),
        new MessageButton()
					.setLabel('Support Servers')
					.setStyle('LINK')
        .setURL(`https://discord.gg/eJQvFcAbK5`)
        )
        interaction.reply({components: [row]});
    }
};