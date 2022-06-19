// Change H1 Tage
document.querySelector("h1").innerHTML="Welcome";

// Get Element by class name to change the Text, Color, etc..
document.getElementsByClassName("list")[2].innerHTML="Ahmed";

// Use ClassList to add an exist class in style.css to a html tag
document.querySelector("h1").classList.addClass("huge");

// Get attribute in a tage
document.querySelector("a").getAttribute("href");

// Set attribute to www.bing.com
document.querySelector("a").setAttribute("href", "https://www.bing.com");
