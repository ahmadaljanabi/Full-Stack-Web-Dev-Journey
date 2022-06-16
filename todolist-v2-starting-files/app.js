//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
// Require Mongoose after install it in command line (npm i mongoose)
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// Connect to mongoose and define the Database name you want to create
mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true});

// Create a schema sctructure for the data you will create later
const itemsSchema = {
  name: String
};

// Create a model with a singular form of that schema
const Item = mongoose.model("Item", itemsSchema);

// Create a value by calling the model you created
const item1 = new Item({
  name: "Web Development",
});

const item2 = new Item({
  name: "CCNA",
});

const item3 = new Item({
  name: "Spanish & Japanese"
});

// Collect items in an array
const defaultItems = [item1, item2, item3];

app.get("/", function(req, res) {

  Item.find({}, function(err, foundItems) {

    if (foundItems.length === 0) {
      // Using model name and insertMany function for inserting data you created to the Database
      Item.insertMany(defaultItems, function(err) {
        // Create the logic if there is an error
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully added items to the database");
        }
      });
      res.redirect("/");
    } else {
      res.render("list", {listTitle: "Today", newListItems: foundItems});
    }

  });

});

app.post("/", function(req, res){

  const itemName = req.body.newItem;

  const item = new Item({
    name: itemName
  });

  item.save();

  res.redirect("/");


});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
