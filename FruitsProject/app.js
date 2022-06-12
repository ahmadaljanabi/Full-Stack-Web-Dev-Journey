const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "You did not enter a name!"]
    },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Orange",
  rating: 10,
  review: "Pretty solid as a fruit."
});

fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const mango = new Fruit({
  name: "Mango",
  score: 10,
  review: "Decent fruit."
})

mango.save();

Person.updateOne({name: "John"}, {favoriteFruit: mango}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully updated the document");
  }
})

// const person = new Person({
//   name: "Amy",
//   age: 12,
//   favoriteFruit: pineapple
// });
//
// person.save();

// Fruit.insertMany([apple, kiwi, orange], function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// });

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    });
  }
});

// Fruit.deleteOne({name: "Peach", function(err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Successfully deleted the document");
//     }
//   }
// });
//
// Person.deleteMany({name: "John"}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted all the document");
//   }
// });
