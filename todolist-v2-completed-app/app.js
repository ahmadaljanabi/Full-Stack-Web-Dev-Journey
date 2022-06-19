//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
// Require Mongoose after install it in command line (npm i mongoose)
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// Connect to mongoose and define the Database name you want to create
mongoose.connect("mongodb+srv://ahmadaljanabi:Aa8527664@cluster0.udtog.mongodb.net/todolistDB", {useNewUrlParser: true});

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

// List Schema
const listSchema = {
  name: String,
  items: [itemsSchema]
};

// List Model
const List = mongoose.model("List", listSchema);

// Get Home Directory
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

app.get("/:customListName", function(req, res) {
  const customListName = _.capitalize(req.params.customListName);

  List.findOne({name: customListName}, function(err, foundList) {
    if (!err) {
      if (!foundList) {
        // Create a new list
        const list = new List({
          name: customListName,
          items: defaultItems
        });

        list.save();
        res.redirect("/" + customListName);

      } else {
        // Show an existing list
        res.render("list", {listTitle: foundList.name, newListItems: foundList.items});
      }
    }
  });

});

app.post("/", function(req, res){

  const itemName = req.body.newItem;
  const listName = req.body.list;

  const item = new Item({
    name: itemName
  });

  if (listName === "Today") {
    item.save();
    res.redirect("/");
  } else {
    // Find custome List
    List.findOne({name: listName}, function(err, foundList) {
      foundList.items.push(item);
      foundList.save();
      res.redirect("/" + listName);
    });
  }
});

app.post("/delete", function(req, res) {
  const checkedItemId = req.body.checkbox;
  const listName = req.body.listName;

  if (listName === "Today") {
    Item.findByIdAndRemove(checkedItemId, function(err) {

      if (!err) {
        console.log("Successfully deleted the checked item!");
        res.redirect("/");
      }
    });
  } else {
    List.findOneAndUpdate({name: listName}, {$pull: {items: {_id: checkedItemId}}}, function(err, foundList) {
      if (!err) {
        res.redirect("/" + listName);
      }
    });
  }

});

app.get("/about", function(req, res){
  res.render("about");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);

app.listen(port, function() {
  console.log("Server has started Successfully!");
});
