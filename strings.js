// let quoteStart = 'Don\'t judge each day by the harvest you reap';
// let quoteEnd = 'lalala';
// let finalQuote = `the phrase is ${quoteStart} ${quoteEnd}`;

// let length = finalQuote.length;

// console.log(length);

// let txt = "h, e, r, n, a, n"
// let result = txt.split(',');
// console.log(result);

let checkslice = document.getElementById('slice');
let checkstring = document.getElementById('string');
let checkreplace = document.getElementById('replace');
let checktext = document.getElementById('text')
let result = document.getElementById('resultado');

function myFunction() {
  if (checkslice.checked == true) {
    let res = checktext.value.slice(0,5);
    result.innerHTML = res;

  } else if(checkstring.checked == true) {
    let res = checktext.value.search(checktext.value);
    result.innerHTML = res;
  } else if (checkreplace.checked == true) {
    let res = checktext.value.replace(checktext.value, 'lo cambie yo');
    result.innerHTML = res;
  }
    else {
    result.innerHTML = "";
  }
}
