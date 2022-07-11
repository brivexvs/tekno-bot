const Discord = require("discord.js");
const { Collection, Client, MessageEmbed } = require("discord.js");

const client = new Discord.Client({ intents: [
		'DIRECT_MESSAGES',
		'DIRECT_MESSAGE_REACTIONS',
		'DIRECT_MESSAGE_TYPING',
		'GUILDS',
		'GUILD_BANS',
		'GUILD_EMOJIS_AND_STICKERS',
		'GUILD_INTEGRATIONS',
		'GUILD_INVITES',
		'GUILD_MEMBERS',
		'GUILD_MESSAGES',
		'GUILD_MESSAGE_REACTIONS',
		'GUILD_MESSAGE_TYPING',
		'GUILD_PRESENCES',
		'GUILD_VOICE_STATES',
		'GUILD_WEBHOOKS',
	] });
const colors = {
    error: '#2f3136',
    info: '#2f3136',
    success: '#2f3136'
}
const fs = require('fs')
const Bottoken = process.env.TOKEN

client.slashcommands = new Collection()
client.Discord = Discord;
client.snipes = new Collection()
client.editsnipes = new Collection()

if (!Bottoken) throw new Error('Please enter a Bot Token!');

['./client/ready', './commands/initCommands', './commands/interactionCreate', './buttons/suggestion', './modals/eval'].forEach(file => {
  require(`./handlers/${file}`)(client)
  console.log(`Loaded ${file}`)
})

client.login(Bottoken).then(console.log('>> Logged in'))


const mongoose = require('mongoose')
	mongoose.connect(process.env.MONGO, {
		useNewUrlParser: true,
    useUnifiedTopology: true,
	}).then(console.log('[MongoDB] Connected to the Database'))

require('./antiCrash.js')(client)


require('./website.js')(client)

client
    .on("debug", console.log)
    .on("warn", console.log)


setTimeout(() => {
  client.destroy()
  client.login(Bottoken)
}, 1.8e+6)


// events

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

require('./functions/db')(client)