const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res) {

  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);

  var result = num1 + num2;

  res.send("The result is " + result);
});

app.post("/bmiCalculator", function(req, res) {

  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);

  var bmi = weight / (height * height);

  res.send("Your BMI is " + bmi);

});

app.listen(3000, function() {
  console.log("Server listening on port 3000");
});
