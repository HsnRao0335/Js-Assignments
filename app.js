// ALERTS

//  #1
alert("Welcome");

// #2
var input = prompt("Please enter your password");
var password = "Hassan";
if (password === input) {
  alert("welcome back");
} else {
  alert("Error! please enter a valid password");
}

// #3
alert("Welcome to JS land...\n Happy Coding!");

// #4
var a = alert("Weclome to Js land...");
var a = alert("Happy Coding!");

// #5
console.log("Hello... i can run JS through my web browser's console");

// VARIABLES FOR STRING
// #1
var username;
// #2
var myName = "Mohammad Hassan Rao";
// #3
var message;
message = "Hello World";
alert(message);
// #4
var Name = prompt("Enter your name");

var age = prompt("Your Age?");

var qual = prompt("Your Qualification?");
alert(Name + "\n" + age + "\n" + qual);
// #5
var food = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(food);
// #6
var email = "hassanribery0335@gmail.com";
alert("My email address is " + email);
// #6
var book = "A smarter way to learn JS";
alert("I am trying to learn from the Book" + book);
// #7
document.write("Yah! I can write HTML content through JAVASCRIPT");
// #8
alert("▬▬▬▬▬▬▬▬▬ஜ۩END۩ஜ▬▬▬▬▬▬▬▬▬");

// VARIABLES FOR NUMBER
// #1

var age1 = 21;

alert("I am " + age1 + " years old");

// #2
var birthYear = 1998;
document.write("<br>My birht year is " + birthYear);
// #3
var vName = prompt("Welcome to our store \n what's your name?");
var vPorduct = prompt("which product you want?");
var vQuantity = prompt("How many you want?");
document.write(
  "<br>" + vName + " ordered " + vQuantity + " " + vPorduct + " on our store"
);
