// Get count of characters

var word;
var count;

word = prompt("Enter Paragraph you want to count: ");

count = word.length;

alert("You have entered " + count + " characters, you have " + (140 - count) + " characters remaining.");

// Get maximum count 140 chracters

var word = prompt("Enter Paragraph you want to count: ");

var count = word.slice(0, 140);

alert(count);

// Get UPPERCASE and lowercase

var name = "Ahmed";
name = name.toUpperCase();
name = name.toLowerCase();

// Get first character UPPERCASE

var name = prompt("What is your name?");

var firstCAP = name.slice(0,1);

var capFirst = firstCAP.toUpperCase();

var restOfName = name.slice(1, name.length).toLowerCase();

var fullName = capFirst + restOfName;

alert("Hello, " + fullName);

// Get Dog age and transform it to Human age

var dogAge = prompt("How old is your dog ? ");

var humanAge = (dogAge - 2) * 4 + 21;

alert("Your dog age compare to human age is " + humanAge);

// Life in weeks using function

function lifeInWeeks(age) {
        
    var ninetyDay = 32850;
    var ninetyWeek = 4680;
    var ninetyMonth = 1080;
    
    var day = age * 365;
    var dayResult = ninetyDay - day;
    var week = age * 52;
    var weekResult = ninetyWeek - week;
    var month = age * 12;
    var monthResult = ninetyMonth - month;
        
    console.log("You have " + dayResult + " days, " + weekResult + " weeks, and " + monthResult + " months left.");
    
}

// BMI Calculator

function bmiCalculator (weight, height) {
    
    var h2 = Math.pow(height, 2);
    var bmi = weight / h2;
    
    if (bmi < 18.5) {
        bmi = ("Your BMI is " + bmi + ", so you are underweight.");
    } else if (bmi < 25) {
        bmi = ("Your BMI is " + bmi + ", so you have a normal weight.");
    } else if (bmi < 30){
        bmi = ("Your BMI is " + bmi + ", so you are overweight.");
    }
    
    return bmi;
}

// Get random numbers from 1 - 6 for dice game

var n = Math.random();

n = n * 6;
n = Math.floor(n);
console.log(n);

// Love Calculator 

var name1 = prompt("Person 1 name: ");
var name2 = prompt("Person 2 name: ");

var n = Math.random() * 100;
n = Math.floor(n) + 1;

if (n === 100) {
    alert("Your love " + n + "% is insane");
} else if (n < 100 && n > 80){
    alert("Your love " + n + "% is very good");
} else if (n < 80 && n > 50) {
    alert("Your love " + n + "% is normal");
} else if (n < 50 && n > 30) {
    alert("Your love " + n + "% has some doubts");
} else {
    alert("Your love " + n + "% never love each other");
}

// Array

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

var guestName = prompt("What is your name?");

if (guestList.includes(guestName)) {
    alert("Welcome!");
} else {
    alert("Sorry, maybe next time.");
}

// Fizz Buzz 

var output = [];
var count = 1;

function fizzBuzz() {

    if (count % 3 === 0) {
        output.push("Fizz");
    } else if (count % 5 === 0) {
        output.push("Buzz");
    }
    else {
        output.push(count);
    }
    
    count++;
    
    console.log(output);
}

// Leap Year

function leap(year) {

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year!";
            } else {
                return "Not leap year!";
            }
        } else {
            return "Leap year!";
        }
    } else {
        return "Not leap year!";
    }

}

// Who is buying lunch

function whosPaying(names) {

    var n = names.length;
    var random = Math.floor(Math.random() * n);
    var name = names[random];

    return name + " is going to buy lunch today!";

}