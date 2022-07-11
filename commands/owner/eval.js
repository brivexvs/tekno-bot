const { Modal, TextInputComponent, Discord, MessageActionRow } = require('discord.js');
const { inspect } = require("util");

module.exports = {
  name: "eval",
	description: 'Send a piece of code in the modal',
  run: async (client, interaction) => {
    const owners = [
      "815878862075985971"
    ]
    if(!owners.includes(interaction.user.id)) return;

    const modal = new Modal()
        .setCustomId('eval-modal')
        .setTitle('Input the code below')

        const name = new TextInputComponent()
        .setCustomId('code')
        .setLabel('Code')
        .setRequired(true)
        .setStyle('PARAGRAPH')
    
        const row2 = new MessageActionRow().addComponents(name)

        modal.addComponents(row2)

        interaction.showModal(modal)
    
 }}