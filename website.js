module.exports = async(client) => {
  
const express = require("express")
	const app = express()
	app.set("views", __dirname)
	app.set("view engine", "html")
	app.use(express.static("public"))
	app.get("/", (req, res) => {
		res.render("./public/index.html")
	})

	app.get("/home", (req, res) => {
		res.render("./public/index.html")
  })

app.get('/invite', (req, res) => {
    res.redirect('https://discord.com/api/oauth2/authorize?client_id=913472906913267793&permissions=141264497665&scope=bot%20applications.commands')
})

	app.listen(5000)

  }