/* This is a collection of code examples from the book
Eloquent JavaScript by Marijn Haverbeke.

  "I do not enlighten those who are not eager to learn, nor arouse
  those who are not anxious to give an explanation themselves.
  If I have presented one corner of the square and they cannot
  come back to me with the other three, I should not go over
  the points again."

  --Confucius

  "The computer programmer is a creator of universes for which
  he [sic] alone is responsible.  Universes of virtually unlimited
  complexity can be created in the form of computer programs."

  --Joseph Weizenbaum, Computer Power and Human Reason
*/

// this program adds the numbers from 1 to 10 together and prints
// out the result:
var total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);

// Same program, but using the operations 'range' and 'sum'.
console.log(sum(range(1, 10)));

// -------------------------------------------------------------
/*
  "Below the surface of the machine, the program moves.
  Without effort, it expands and contracts.  In great harmony,
  electrons scatter and regroup.  The forms on the monitor are
  but ripples on the water.  The essence stays invisibly below."

  --Master Yuan-Ma, The Book of Programming
*/
// -------------------------------------------------------------

// JAVASCRIPT VALUES
// -- (6) basic types of values: numbers, strings, booleans,
// objects, junctions, and undefined.

// -- Numbers:
13 // Used in a program, it will cause the bit pattern for the
   // number 13 to come into existence inside the comp's memory.

9.81 // Fractional numbers are written by using a dot.
2.998e8 // scientific notation. Uses an 'e' (for "exponent").

100 + 4 * 11 // The '+' and '*' are called operators.

Infinity -Infinity // javaScript special numbers.
NaN // "not a number" -- of the number type.  Not precise.

// -- Strings:
"Patch my boat with chewing gum" // Both single and double quotes
'Monkeys wave goodbye' // can be used as long as they quotes match.
"This is the first line\nAnd this is the second" // \n is newline.
"A newline character is written like \"\\n\"."
"con" + "cat" + "e" + "nate" // concatenation of strings

// -- Booleans
console.log(3 > 2); // -> true
console.log(3 < 2); // -> false
console.log("Aardvark" < "Zoroaster"); // -> true
// logical operators (and, or, and not) are use to reason booleans
// logical AND - evaluates to true if only both values are true
console.log(true && false); // -> false
console.log(true && true); // -> true
// logical OR - || - evaluates to true if either values are true
console.log(false || true); // -> true
console.log(false || false); // -> false
// Not (!) - unary operator that flips the value given to it
!true // -> false
!false // -> true
// Conditional operator (ternary operator).  The value on the left
// of the question mark 'picks' which of the other two values will
// come out.  When true, the middle value is chosen, and when it is
// false, the value on the right comes out.
console.log(true ? 1 : 2); // -> 1
console.log(false ? 1 : 2); // -> 2

// ---------------------------------------------------------------
/*
  "And my heart glows bright red under my filmy, translucent
  skin and they have to administer 10cc of JavaScript to get me
  to come back. (I respond well to toxins in the blood.) Man,
  that stuff will kick the peaches right out your gills!"

  --_why, Why's (Poignant) Guide to Ruby
*/
// ---------------------------------------------------------------

// PROGRAM STRUCTURE
// Expressions and Statements
// -- a fragment of code that produces a value is called an
// expression.  Every value written literally is an expression.
// -- a statement corresponds to a sentence fragment.
// a Program is simply a list of statements.
1;
!false;

// Variables
// Used to catch and store values.  After a variable has been
// defined, its name can be used as an expressoin.
var caught = 5 * 5; // the keyword 'var' declares a variable.

var ten = 10;
console.log(ten * ten);
// -> 100

// The = operator can be used at any time on existing variables
// to disconnect them from their current value and have them
// point to a new one.
var mood = "light";
console.log(mood);
// -> light
mood = "dark";
console.log(mood);
// -> dark

var luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// -> 105

// A single var statement may define multiple variables.  The
// definitions must be seperated by commas.
var one = 1, two = 2;
console.log(one + two);
// -> 3

// Keywords and reserved words
// - Words with special meaning, such as var, are Keywords and
// may not be use in Variable names.

// Reserved words - reserved for future versions of JavaScript
/*
  break case catch class const continue debugger
  default delete do else enum export extends false
  finally for function if implements import in
  instanceof interface let new null package private
  protected public return static super switch this
  throw true try typeof var void while with yield
*/

// Functions
// - A function is a piece of program wrapped in a value. Such
// values can be applied in order to run the wrapped program.
alert("Good morning!"); // the variable alert holds a function.

// You can call a function by puttin gparentheses after an
// expression that produces a funciton value.
// Values given to functions are called arguments.

// - console.log funciton - writes out it's arguments to some
// text output device.  It's an expression that retrieves the
// log property from the value held by the console variable.
var x = 30;
console.log("the value of x is", x);
// -> the value of x is 30

// Return values - when a function produces a value, it is said
// to return that value. Anything that produces a value is an
// expressoin in JavaScript, which means function calls can be
// used within larger expressions.
console.log(Math.max(2, 4));
// -> 4
console.log(Math.min(2, 4) + 100);
// -> 102

// Prompt and Confirm
confirm("Shall we, then?"); // Asks an Ok/Cancel question.
// returns a Boolean: true if user clicks OK, false if cancel.
prompt("Tell me everything you know.", "..."); // Ask a question.
// first argument is the question, second is the placeholder txt

// Control Flow
// - when your program contains more than one statement, the
// statements are executed, predictably, from top to bottom.
var theNumber = Number(prompt("Pick a number", ''));
alert("Your number is the square root of " +
      theNumber * theNumber);
// 2 statements: the first one askes the user for a number,
// and the second, which is executed afterward, shows the square
// of that number. (the function Number converts a value
// to a number.)

// Conditional Execution
// - conditional execution, where we choose between two different
// routes based on a boolean value.
var theNumber = Number(prompt("Pick a number", ""));
if (!isNaN(theNumber))
  alert("Your number is the square root of" +
        theNumber * theNumber);
// the keyword 'if' executes or skips a statement depending on the
// value of a Boolean expression. The deciding expression is
// written after the keyword, between parentheses, followed
// by the statement to execute.
var theNumber = Number(prompt("Pick a number", ""));
if (!isNaN(theNumber))
  alert("Your number is the square root of" +
        theNumber * theNumber);
else
  alert("Hey. Why didn't you give me a number?");

// multiple if/else pairs can be "chained" together
var num = Number(prompt("Pick a number", "0"));

if (num < 10)
  alert("Small");
else if (num < 100)
  alert("Medium");
else
  alert("Large");
// the program will first check whether num is less than 10,
// If it is, it chooses that branch, shows "small", and is done.
// If it isn't, it takes the else branch, which itself contains
// a second if.

// While and Do loops
// - a way to repeat some code. Looping control flow allows us
// to go back to some point in the program where we were before
// and repeat it with our current program state.
var number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
// -> 0
// -> 2
// ... etcetera and continues as long as the expression produces
// a value that is true when converted to Boolean type.
while (true) {
  // block;
}

// a program that calculates and shows the value of 2e10
var result = 1;
var counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
// -> 1024

// the do loop
// - a do loop always executes its body at least once,
// and starts testing whether it should stop only after the first
// execution.
do {
  var yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);
// this program will force you to enter a name.  It will ask
// again and again until it gets something that is not an empty
// string.  Applying the ! operator will convert a value to
// Boolean type before negating it, and all strings exept ""
// convert to true.

// for loops
// - many loops follow a similar pattern of a "counter" variable
// that's created to track the progress of the loop.
for (var number = 0; number <= 12; number = number + 2)
  console.log(number);
// -> 0
// -> 2
// ... etcetera
// the parentheses after a for keyword must contain two semicolons
// (initialize the loop (define a variable); the check; the update)

var result = 1;
for (var counter = 0; counter < 10; counter = counter + 1)
  result = result * 2; // { } not needed - one-line statement
console.log(result);
// -> 1024

// Break
// - having a condition 'false' is not needed, you can use break;
for (var current = 20; ; current++) {
  if (current % 7 == 0) // remainder operator
    break;
}
console.log(current);
// -> 21
// the remainder (%) operator is an easy way to test whether a
// number is divisible by another number.  If it is, the remainder
// of their division is zero.

// Updating variables succinctly
// - JavaScript provides a shortcut:
counter += 1; // counter = counter + 1;
result *= 2; // result = result * 2;
counter -= 1; // counter = counter -1;

for (var number = 0; number <= 12; number += 2)
  console.log(number);
// for counter +=1 and counter -=1; counter++ counter--

// Switch statements
// - solves a more common dispatch:
if (variable == "value1") action1();
else if (variable == "value2") action2();
else if (variable == "value3") action3();
else defaultAction();

switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly."); // Both statements will run
  case "cloudy":
    console.log("Go outside."); // Both statements will run
    break; // <- until a break statement is reached
  default: // Handles all unknown types
    console.log("Unknown weather type!");
    break;
}
// ---------------------------------------------------------------
/*
  "People think that computer science is the art of geniuses but
  the actual reality is the opposite, just many people doing things
  that build on each other, like a wall of mini stones"

  -- Donald Knuth
*/
// ---------------------------------------------------------------

// FUNCTIONS
// - A tool to structure larger programs, to reduce repetition, to
// associate names with subprograms, and to isolate these
// subprograms from each other.

// Defining a function
// - A funciton definition is just a regular variable definition
// where the value given to the variable happens to be a function.
var square = function(x) {
  return x + x;
};
console.log(square(12));
// -> 144
// A function has a set of parameters (in this case 'x') and a
// body, which contains the statements that are to be executed
// when the function is called.  The function body must always
// be wrapped in braces, even when it consists of only a single
// statement.

var makeNoise = function() {
  console.log("Pling!");
};

makeNoise();
// -> Pling!

var power = funciton(base, exponent) { // these params are local
  var result = 1; // local variable, redefined everytime
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
};

console.log(power(2, 10));
// -> 1024

// Some functions produce a value, such as power and square, and
// some don't, such as makeNoise, which produces only a side effect
// A return statement determines the value the function returns.
// The return keyword without an expression after it will cause
// the function to return undefined.

// Parameters and scopes
// - parameters behave like regular variables, but their initial
// values are given by the caller of the function, not the code
// in the funciton itself.
// Global variables, useable outside and inside the funciton.
// Local variables, useable only inside the funcion and
// redifined everytime.

var x = "outside"; // global variable

var f1 = function() {
  var x = "inside f1"; // defines x 'locally'
};
f1();
console.log(x);
// -> outside

var f2 = function() {
  x = "inside f2"; // references the global variable 'x'
};
f2();
console.log(x);
// -> inside f2

// By treating function-local variable as existing only within
// the function, the language makes it possible to read and
// understand functions as small universes, without haveing to
// worry about all the code at once.

// Nested scope
// - Functions can be created inside other functions, producing
// several degrees of locality.

var landscape = function() {
  var result = ""; // local to the function
  var flat = function(size) {
    for (var count = 0; count < size; count++)
    result += "_"; // can see b/c inside function that def it
  };
  var mountain = function(size) {
    result += "/"; // can see b/c inside function that def it
    for (var count = 0; count < size; count++)
    result += "`";
  result += "\\";
  }; // flat and mountain cannot see each others 'count' variable

  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};

console.log(landscape());
// -> ___/````\______/`\_
