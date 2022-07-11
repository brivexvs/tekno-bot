const { readdirSync } = require("fs");

module.exports = async (client) => {
    const array = [];
    readdirSync("./commands/").forEach((dir) => {
        const commands = readdirSync(`./commands/${dir}/`).filter((files) => files.endsWith(".js"));
        for (const file of commands) {
            const command = require(`../../commands/${dir}/${file}`);
            if(!command.name) throw new Error("Please provide a slash command name");
					  if(!command.description) throw new Error("Please provide a slash command description");

					

            client.slashcommands.set(command.name, command);
            array.push(command);
          
        }
    });

    client.on("ready", async () => {
			client.slasharray = array;
			client.application.commands.set(array)
      console.clear()
    })
}