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

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric() {
  for(let key in menu) {
    if(typeof(menu[key]) === 'number') {
      menu[key] *= 2;
    }
  }
}
multiplyNumeric();

console.log(menu);
