const { CommandInteraction, MessageEmbed, Client } = require("discord.js");
const warnModel = require("../../Schemas/WarnDB");
const moment = require("moment");


module.exports = {
    name: "warnings",
    description: "display the warnings a user has",
    options: [
        {
            name: "target",
            description: "Provide a user to view their warnings",
            type: "USER",
            required: true,
        },
    ],
    /**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */
     run: async(client, interaction) => {
        const user = interaction.options.getUser("target");

        const userWarnings = await warnModel.find({ userId: user.id, guildId: interaction.guild.id});


        const er = new MessageEmbed()
        .setTitle("User Warnings")
        .setDescription(`${user} has no warnings!`)
        .setFooter('What a good person!')
       .setColor('#2f3136')

        if(!userWarnings?.length) return interaction.reply({ embeds: [er]});


        const embedDescription = userWarnings.map((warn) =>{
            const moderator = interaction.guild.members.cache.get(
                warn.moderatorId
            );

            return [
                `Warn ID: ${warn.id}`,
                `Moderator: ${moderator || client.users.cache.get(warn.moderatorId).tag || 'Left the server'}`,
                `Reason: ${warn.reason}`,
        ].join("\n");
        }) .join("\n\n");

        const embed = new MessageEmbed()
        .setTitle(`${user.tag}'s warnings`)
        .setDescription(embedDescription)
       .setColor('#2f3136')

        interaction.reply({ embeds: [embed]})
    }
}