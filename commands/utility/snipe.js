const { Client, Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js')
module.exports = {
    name: 'snipe',
    description: "Snipe someones message!", 
  permissions: ['MANAGE_MESSAGES'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, interaction, args) => {
        const msg = client.snipes.get(interaction.guild.id)
        if (!msg) return interaction.reply('There\'s nothing to snipe!')
        const embed = new MessageEmbed()
            .setAuthor(msg.author, msg.member.user.displayAvatarURL())
            .setDescription(msg.content)
            .setFooter(`#${msg.channel}`)
            .setColor('#2f3136')
            .setTimestamp()
          interaction.reply({ embeds: [embed] });
    }
}