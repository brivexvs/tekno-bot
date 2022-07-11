const Discord = require('discord.js');

module.exports = {
   name: '',
   description: '',
   options: [],
   run: async(client, interaction) => {
   const embed = new Discord.MessageEmbed()
   .setTitle('')
   .setDescription('')

   interaction.reply({embeds: [embed]})
   }
}