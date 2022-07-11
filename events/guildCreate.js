const fs = require('fs');
const JSONdb = require('simple-json-db');

module.exports = (client) => {
  client.on('guildCreate', async guild => {
	fs.writeFile(`./Servers/${guild.id}.sqlite`, '', (err) => console.log(err));

	setTimeout(() => {
		const push = new JSONdb(`../../Servers/${guild.id}.sqlite`);

		push.set('description', '');
		push.set('color', '');
    push.set('channel', '');
	}, 1000);
  })

};