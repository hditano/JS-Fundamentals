// .ToFixed(n) round number to the n of decimal places

let number = 1.234567
let twoDecimals = number.toFixed(2);
console.log(twoDecimals)

// Converting to number data types

let myNumber = '74';
console.log(Number(myNumber) + 2);
console.log(typeof(Number(myNumber) + 2));

// Fix this code

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b);

// Add 2 numbers together! (just type console.log(23 + 97) into your html file)
// Add a sequence of 6 different numbers together.
// Print the solution to the following equation: (4 + 6 + 9) / 77
// Answer should be approximately 0.24675
// Let’s use variables!
// Type the following at the top of the script tag: let a = 10
// console.log(a) should print 10
// Try the following: 9 * a
// and this: let b = 7 * a (returns undefined) and then console.log(b)
// You should be getting the hang of this by now… try this sequence:
// Declare a constant variable max with the value 57
// Set another variable actual to max - 13
// Set another variable percentage to actual / max
// If you type percentage in the console and press enter you should see a value like 0.7719
// Take a few minutes to keep playing around with various things in your script tag. Eventually, we will learn how to actually make those numbers and things show up on the webpage, but all of this logic will remain the same, so make sure you’re comfortable with it before moving on.

console.log(23 + 97);
let a1 = (4 + 6 + 9) / 77;
console.log(a1);
let a2 = 10;
console.log(a2);

let max = -13;
const variableMax = 57;
let variablePercentage = max / variableMax;  
