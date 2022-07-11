module.exports = {
   name: 'reload',
  description: 'Reload a command',
  options: [
    {
      name: 'command',
      type: 'STRING',
      description: 'Command to reload',
      required: true
    },
    {
      name: 'category',
      type: 'STRING',
      description: 'Category that the command is in',
      required: true,
      choices: [
        {
          name: 'Moderation',
          value: 'moderation'
        },
        {
          name: 'Core',
          value: 'core'
        },
        {
          name: 'Utility',
          value: 'utility'
        },
        {
          name: 'Owner',
          value: 'owner'
        }
      ]
    }
  ],

run: async (client, interaction, args) => {
  const commandName = interaction.options.getString('command');
  const category = interaction.options.getString('category')
  if(!client.slashcommands.has(commandName)) {
    return interaction.reply("That command does not exist");
  }
  delete require.cache[require.resolve(`../${category}/${commandName}.js`)];
  client.slashcommands.delete(commandName);
  const props = require(`../${category}/${commandName}.js`);
  client.slashcommands.set(commandName, props);
  interaction.reply(`The command ${commandName} has been reloaded`);
}
}