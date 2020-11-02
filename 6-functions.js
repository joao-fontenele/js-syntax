const fs = require('fs');


function isEven(num1) {
  const even = num1 % 2 === 0;
  return even;
}

console.log('isEven(10)', isEven(10));
console.log('isEven(101)', isEven(101));

function procedure(str) {
  console.log(str);
}

const result = procedure('hello world');
console.log('result', result, typeof result);

// arrow functions

const isOdd = (num1) => {
  const odd = num1 % 2 !== 0;
  return odd;
}

console.log('isOdd(1)', isOdd(1));
console.log('isOdd(2)', isOdd(2));
console.log('isOdd(3)', isOdd(3));
console.log('isOdd(4)', isOdd(4));

// callbacks

function asyncSquare(num, cb) {
  const square = num * num;
  if (typeof cb === 'function') {
    cb(square);
  }
}

asyncSquare(2, (square) => {
  console.log('square', square);
});

const path = './5-objects.js';
fs.readFile(path, (err, result) => {
  if (!err) {
    console.log('\n\n\npath', path);
    console.log(result.toString());
  } else {
    console.log('err', err);
  }
})
