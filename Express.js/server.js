
const express = require("express");

const app = express();

app.get("/", function(req, res) { // Request = req, Response = res
  res.send("<h1>Hello</h1>");
});

app.get("/contact", function(req, res) {
  res.send("Contact me at: ahmad-3434@hotmail.com");
});

app.get("/about", function(req, res) {
  res.send("I'm Ahmed, I'm a Network Engineer, Fullstack Developer, Cybersecurity Engineer.");
});

app.get("/hobbies", function(req, res) {
  res.send("<ul><li>Watching</li><li>Learning</li><li>Travelling</li></ul>")
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
