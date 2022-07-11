const { CommandInteraction, MessageEmbed, Client } = require("discord.js");
const warnModel = require("../../Schemas/WarnDB")

module.exports = {
  name: "remove-warn",
  description: "warn a user",
  options: [
    {
      name: "warnid",
      description: "Provide the warning ID you want to remove",
      type: "STRING",
      required: true,
    },
  ],
  run: async(client, interaction) => {
    const warnId = interaction.options.getString("warnid")

    const data = await warnModel.findById(warnId);


    const er = new MessageEmbed()
      .setDescription(`No warn ID found for ${warnId}! Try again.`)
      .setColor('#2f3136')
    if (!data) return interaction.reply({ embeds: [er] });

    data.delete();
    const embed = new MessageEmbed()
      .setDescription(`Successfully removed the warning!`)
    .setColor('#2f3136')
    const user = interaction.guild.members.cache.get(data.userId)
    return interaction.reply({ embeds: [embed] })
  }

}