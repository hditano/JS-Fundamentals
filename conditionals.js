// Write an if condition to check that age is between 14 and 90 inclusively.

// “Inclusively” means that age can reach the edges 14 or 90.

let age = 13;

// if (age >= 14 && age <= 90) {
//   console.log('la edad es entre 14 y 90');
// } else {
//   console.log('no lo es');
// }

// Write an if condition to check that age is NOT between 14 and 90 inclusively.

// Create two variants: the first one using NOT !, the second one – without it.

// if (!(age >= 14 && age <= 90)) {
//   console.log('la edad NO es entre 14 y 90');
// } else {
//   console.log('es entre 14 y 90');
// }

// let user = prompt('Please write your username');

// if(user == 'admin') {
//   let password = prompt('Please enter your password: ');
//   if(password == 'The Master') {
//     console.log('Welcome');
//   } else if (password !== 'The Master') {
//     console.log('Wrong Password');
//   } else {
//     console.log('Canceled');
//   }
// } else if (user == 'hernan') {
//   console.log('I don\'t know you');
// } else {
//   console.log('canceled');
// }


// Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

const javascriptName = 'ECMAScript';

let result = prompt('What\'s the official name of "JavaScript"?');
console.log(result == javascriptName ? 'Right' : 'You don\'t know JavaScript?');
