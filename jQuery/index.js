// Change color of an element in jQuery
$("h1").css("color", "green");

// value of H1 font-size
console.log($("h1").css("font-size"));

// To call a class from CSS instead of HTML
$("h1").addClass("big-title");

// Add multiple classes
$("h1").addClass("big-title margin-50");

// Select all buttons in jQuery
$("button");

// Change Text
$("button").text("Don't Click Me");

// Use innerHTML in jQuery
$("button").html("<em>Hey</em>");

// Select source of img attribute in jQuery
$("img").attr("src");

// Change href to google website
$("a").attr("href", "https://www.yahoo.com");

// Add eventListener in jQuery
$("h1").click(function() {
  $("h1").css("color", "purple");
});

// JavaScript code VS. jQuery code in adding eventListeners to buttons

// JavaScript
for (var i = 0; i < 5; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    document.querySelector("h1").style.color="purple";
  });
}

// jQuery
$("button").click(function() {
  $("h1").css("color", "purple");
});

// Add keypress eventListener to input element
$("input").keypress(function(event) {
  console.log(event.key);
});

// Add keypress eventListener to the entire website
$(document).keypress(function(event) {
  $("h1").text(event.key);
});

// Add two eventListener to an element
$("h1").on("mouseover", function() {
  $("h1").css("color", "purple");
});

// Add element before H1 element in jQuery
$("h1").before("<button>New</button>");

// Remove all button elements in jQuery
// $("button").remove();

// Animate Elements in jQuery
$("button").on("click", function() {
  $("h1").fadeToggle(); // fadeOut(); && fadeIn(); || slideUp(); slideDown(); slideToggle();
});

$("button").on("click", function() {
  $("h1").animate({opacity: 0.5});
})

// Animate with more than one method in jQuery
$("button").on("click", function() {
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
})
