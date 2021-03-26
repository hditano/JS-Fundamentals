const myArray = 'Hello';
let myArrayCopy = [...myArray];
let myOtherArrayCopy = [...myArrayCopy];

console.log(myArray);
console.log(myArrayCopy);
console.log(myOtherArrayCopy);

for(let i = 0; i < myOtherArrayCopy.length; i++) {
  console.log(myOtherArrayCopy[i]);
}


