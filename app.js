const express = require("express")
const path = require("path")
const mustacheExpress = require("mustache-express")

const app = express()

app.engine("mustache", mustacheExpress())
app.set("views", "./views")
app.set("view engine", "mustache")

//Listening on root
app.get("/", function(request, response) {
  const data = {
    toDo: [
      { text: "Learn Node basics" },
      { text: "Learn Express basics" },
      { text: "Learn Mustache" },
      { text: "Learn HTML forms with Express" },
      { text: "Learn about authentication" },
      { text: "Learn how to connect to PostgreSQL" },
      { text: "Learn how to create database" },
      { text: "Learn SQL" },
      { text: "Learn how to connect to PostgreSQL from Node" },
      { text: "Learn how to use Sequelize" }
    ]
  }
  response.render("todo", data)
})

app.listen(3000, function() {
  console.log("Successfully started express application!")
})
