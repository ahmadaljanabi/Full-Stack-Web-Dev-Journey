const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

// Connect to mongodb database
mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true});

// Create article schema
const articleSchema = {
  title: String,
  content: String
};

// Create article model
const Article = mongoose.model("Article", articleSchema);

///////////////////////// Requests Targeting All Articles ////////////////////

app.route("/articles")

// Get all articles stored in the database
.get(function(req, res) {
  Article.find(function(err, foundArticles) {
    if (!err) {
      res.send(foundArticles);
    } else {
      res.send(err);
    }

  });
})

// Add a new article
.post(function(req, res) {

  const newArticle = new Article({
    title: req.body.title,
    content: req.body.content
  });

  newArticle.save(function(err) {
    if (!err) {
      res.send("Successfully added a new article.");
    } else {
      res.send(err);
    }
  });
})

// Delete all articles
.delete(function(req, res) {
  Article.deleteMany({}, function(err) {
    if (!err) {
      res.send("Successfully deleted all articles.");
    } else {
      res.send(err);
    }
  });
});

///////////////////////// Requests Targeting A Specific Article ////////////////////

app.route("/articles/:articleTitle")

.get(function(req, res) {

  Article.findOne({title: req.params.articleTitle}, function(err, foundArticle) {
    if (!err) {
      res.send(foundArticle);
    } else {
      res.send(err);
    }
  });

})

.put(function(req, res) {
  Article.update(
    {title: req.params.articleTitle},
    {title: req.body.title, content: req.body.content},
    {overwrite: true},
    function(err) {
      if (!err) {
        res.send("Successfully updated article.")
      }
    }
  );
})

.patch(function(req, res) {

  Article.update(
    {title: req.params.articleTitle},
    {$set: req.body},
    function(err) {
      if (!err) {
        res.send("Successfully updated article.");
      } else {
        res.send(err);
      }
    }
  );
})

.delete(function(req, res) {

  Article.deleteOne(
    {title: req.params.articleTitle},
    function(err) {
      if (!err) {
        res.send("Successfully deleted the corresponding article.")
      } else {
        res.send(err);
      }
    }
  );

});

app.listen(3000, function() {
  console.log("Listening on port 3000");
});
