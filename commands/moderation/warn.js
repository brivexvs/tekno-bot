const { CommandInteraction, MessageEmbed, Client } = require("discord.js");
const warnModel = require("../../Schemas/WarnDB")

module.exports = {
    name: "warn",
    description: "warn a user",
    options: [
        {
            name: "target",
            description: "Provide a user to warn.",
            type: "USER",
            required: true,
        },
        {
            name: "reason",
            description: "Provide a reason to warn this user",
            type: "STRING",
            required: true
        },
    ],

   /**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */
    run: async(client, interaction) => {
        const { options, guild } = interaction;
        const reason = options.getString("reason") || "No reason provided";
        const target = options.getMember("target");


        new warnModel({
            userId: target.id,
            guildId: interaction.guild.id,
            moderatorId: interaction.user.id,
            reason,
        }).save();


        const Embed = new MessageEmbed()
        .setDescription(`Warned ${target}.\n\nReason: ${reason}`)
      .setColor('#2f3136')
        let message = interaction.reply({embeds: [Embed]})

        const DM = new MessageEmbed()
        .setDescription(`You have been warned in \`${interaction.guild.name}\`!\n\nReason: ${reason}`)
      .setColor('#2f3136')

        target.send({embeds: [DM]}).catch(()=>{console.log("⛔ Private message blocked by the user")});
       
    }
}