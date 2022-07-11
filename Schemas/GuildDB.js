const { Schema, model } = require('mongoose');

const guildStats = new Schema({
    suggestion: String,
})

module.exports = model("GuildDB", guildStats);