module.exports = async(client) => {
  client.on('guildMemberUpdate', (oldMember, newMember) => {
    const oldStatus = oldMember.premiumSince;
    const newStatus = newMember.premiumSince;

    if(!oldStatus && newStatus) {
      newMember.roles.cache.add('894164132100730884')
      client.channels.cache.get('894164132553699392').send('Thanks for boosting! You should of been given the role. If not, please DM a moderator for your Premium role.')
    }

    if(oldStatus && !newStatus) {
      newMember.roles.cache.remove('894164132100730884')
    }
  })
}