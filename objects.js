/* Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
*/

// let user = {};

// user.name = 'John';
// user.surname = 'Smith';

// console.log(user);

// user.name = 'Pete';

// console.log(user);

// delete user.name;

// console.log(user);

/* Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise. */

// let obj = {};

// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }

// console.log(isEmpty(obj));

/* Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.

*/

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let total = 0;

// function sumSalaries(obj) {
//   if(salaries === null) return 0;
//   for (let key in salaries) {
//     total += salaries[key];
//   }
//   return total;
// }

// console.log(sumSalaries(salaries));

/* Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2. */

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric() {
//   for(let key in menu) {
//     if(typeof(menu[key]) === 'number') {
//       menu[key] *= 2;
//     }
//   }
// }
// multiplyNumeric();

// console.log(menu);



/* Store the value of the name property inside the catName variable, using bracket notation.
Run the greeting() method using dot notation (it will log the greeting to the browser DevTools' console).
Update the color property value to black. */

// let cat = {
//   name : 'Bertie',
//   breed : 'Cymric',
//   color : 'white',
//   greeting: function() {
//     console.log('Meow!');
//   }
// }

// // Put your code here
// let catName = cat['name'];
// cat.greeting();
// cat.color = 'black';


/* name: A string representing the band name.
nationality: A string representing the country the band comes from.
genre: What type of music the band plays.
members: A number representing the number of members the band has.
formed: A number representing the year the band formed.
split: A number representing the year the band split up, or false if they are still together.
albums: An array representing the albums released by the band. Each array item should be an object containing the following members:
name: A string representing the name of the album.
released: A number representing the year the album was released.
Include at least two albums in the albums array.   

Once you've done this, you should then write a string to the variable bandInfo, which will contain a small biography detailing their name, nationality, years active, and style, and the title and release date of their first album.


*/

// let bandInfo;

// // Put your code here
// let obj = {
//   name: 'Ac/Dc',
//   nationality: 'Australia',
//   genre: 'Heavy Metal',
//   members: 3,
//   formed: 1978,
//   split: false,
//   albums: [{name: 'Back in Black', released: 1983}, {name: 'Hells Bells', released: 1980}],
  
// }

// bandInfo = `Name is ${obj.name}, Nationality is ${obj.nationality}, genre is ${obj.genre}, members are ${obj.members}, formed in ${obj.formed}, Did split? ${obj.split}, Albums released are ${obj.albums[0].name} and ${obj.albums[1].name} `

/* Finally for our object basics assessment, we want you to return to the cat object literal from Task #1. We want you to rewrite the greeting() method so that it logs "Hello, said Bertie the Cymric." to the browser DevTools' console, but in a way that will work across any cat object of the same structure, regardless of its name or breed.

When you are done, write your own object called cat2, which has the same structure, exactly the same greeting() method, but a different name, breed, and color.

Call both greeting() methods to check that they log appropriate greetings to the console.
*/

let cat = {
  name : 'Bertie',
  breed : 'Cymric',
  color : 'white',
  greeting: function() {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  }
}

let cat2 = {
  name : 'Run',
  breed : 'Golden Retriever',
  color : 'Golden',
  greeting: function() {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  }
}

cat.greeting()
cat2.greeting()