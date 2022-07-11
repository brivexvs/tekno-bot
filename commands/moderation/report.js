const Discord = require('discord.js');

module.exports = {
   name: 'report',
   description: 'Report a user of this server!',
   options: [
     {
       name: 'user',
       type: 'USER',
       description: 'User to report',
       required: true
     },
     {
       name: 'reason',
       type: 'STRING',
       description: 'Whats the reason?',
       required: true,
     },
     {
       name: 'proof',
       type: 11,
       description: 'Any proof? (OPTIONAL)',
       required: false
     }
   ],
   run: async(client, interaction) => {
     
   const embed = new Discord.MessageEmbed()
     .setAuthor(`Reporter: ${interaction.user.tag}`)
     .addField('Reason', interaction.options.getString('reason'))
     .setImage(interaction.options.get('proof').value ? interaction.options.get('proof').value : null)
   interaction.reply({embeds: [embed]})
   }
}