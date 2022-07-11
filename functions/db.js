module.exports = async(client) => {
  const { Database } = require("quickmongo");
  client.db = new Database(process.env['mongo']);
  await client.db.connect()
  client.db.on("ready", () => {
    console.log("Database connected!");
});
  client.db.set('bob', 'test')
  console.log(client.db.get('bob'))
}