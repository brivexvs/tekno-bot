const fs = require('fs');

module.exports = (client) => {
  client.on('guildDelete', async(guild) => {
	if(guild.id === undefined) return;

	fs.unlinkSync(`./Servers/${guild.id}.sqlite`);
  })
};