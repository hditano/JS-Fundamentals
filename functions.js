// const input = document.querySelector('.numberInput');
// const para = document.querySelector('p');

// function squared(num) {
//   return num * num;
// }

// function cubed(num) {
//   return num * num * num;
// }

// function factorial(num) {
//   if (num < 0) return undefined;
//   if (num == 0) return 1;
//   let x = num - 1;
//   while (x > 1) {
//     num *= x;
//     x--;
//   }
//   return num;
// }

// input.onchange = function() {
//   const num = input.value;
//   if (isNaN(num)) {
//     para.textContent = 'You need to enter a number!';
//   } else {
//     para.textContent = num + ' squared is ' + squared(num) + '. ' +
//                        num + ' cubed is ' + cubed(num) + '. ' +
//                        num + ' factorial is ' + factorial(num) + '.';
//   }
// }

/* The following function returns true if the parameter age is greater than 18.

 Otherwise it asks for a confirmation and returns its result. */



// const age = 19;
// checkAge(age);

// function checkAge(age) {
//   console.log((age > 18) ? true : "Did parents allow you?");
// }


/* Write a function min(a,b) which returns the least of two numbers a and b. */

// function min(a, b) {
//   return (a > b) ? a : b;
// }

// console.log(min(10,20));

/* Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result. */

// function pow(x, n) {
//   let result = x;

//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// console.log(pow(3,2));

/* We’ll write a function ask(question, yes, no) with three parameters:

question
Text of the question
yes
Function to run if the answer is “Yes”
no
Function to run if the answer is “No” */


// function ask(question, yes, no) {
//   (confirm(question) ? yes() : no())
// }

// function showOk() {
//   alert( "You agreed." );
// }

// function showCancel() {
//   alert( "You canceled the execution." );
// }

// // usage: functions showOk, showCancel are passed as arguments to ask
// ask("Do you agree?", showOk, showCancel);

/* Replace Function Expressions with arrow functions in the code below:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); } 
); */

// let ask = (question, yes, no ) => (confirm(question)) ? yes() : no();

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); } 
// );

/* Write a function called add7 that takes one number and returns that number + 7.
Write a function called multiply that takes 2 numbers and returns their product.
Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
Write a function called lastLetter that takes a string and returns the very last letter of that string:
lastLetter("abcd") should return "d" */

// function add7 (number) {
//   return number + 7;
// }

// let add7 = (number) => number + 7;

// console.log(add7(2));


// function multiply (num1, num2) {
//   return num1 * num2;
// }

// let multi = (num1, num2) => num1 * num2;

// console.log(multiply(2,2));
// console.log(multi(2,2));

// function Capitalize(string) {
//    return string.charAt(0).toUpperCase() + string.slice(1);
// }

// console.log(Capitalize('hernan'));

// function lastLetter(string) {
//   return string.slice(-1);
// }

// let lastLetter = (string) => string.slice(-1);

// console.log(lastLetter('abcd'));
