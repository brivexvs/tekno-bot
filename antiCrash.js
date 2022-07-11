const chalk = require('chalk')
module.exports = async(client) => {
  const errorLogs = new client.Discord.WebhookClient({ url: process.env.ERROR_WEBHOOK})
  process.on("unhandledRejection", async(reason, p, origin) => {
    if(reason === 'DiscordAPIError: Missing Access') return;
  console.log(chalk.hex('#ff5252').bold("[antiCrash] :: Unhandled Rejection/Catch"));
    console.log(chalk.white(reason.message))
    console.log(chalk.white(reason.origin))
  console.log(chalk.white(reason.stack));
  const embed = new client.Discord.MessageEmbed()
  .setTitle('Unhandled Rejection/Catch')
  .setDescription(` \`\`\`${reason.stack}\`\`\``)
  errorLogs.send({embeds: [embed], content: `<@!815878862075985971>`})
});
process.on("uncaughtExceptionMonitor", async (err, origin) => {
  if(reason === 'DiscordAPIError: Missing Access') return;
  console.log(chalk.hex('#ff5252').bold("[antiCrash] :: Uncaught Exception/Catch (MONITOR)"));
  console.log(chalk.white(err.message))
  console.log(chalk.white(err.stack));
    const embed = new client.Discord.MessageEmbed()
  .setTitle('Unhandled Exception/Catch (MONITOR)')
  .setDescription(` \`\`\`${err.stack}\`\`\``)
  errorLogs.send({embeds: [embed], content: `<@!815878862075985971>`})
});


}