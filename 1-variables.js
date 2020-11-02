// var é velho

// var variable1;
// var variable2 = 'hello world';

// const + let

// const x = 23;
// let a;
// let i = '0';

// a = 'a';
// a = 1;
// a = [];
// a = {};

// console.log('a', a);
// console.log('i', i);
// console.log('variable1', variable1);
// console.log('variable2', variable2);

// variable types

const str = 'aaaa';
const number = 1;
const aBoolean = false; // or false
const number2 = 1.2;
const arr = [1,2,3,4];
const object = { url: 'https://www.google.com', itsNull: null };
let undef;
const nil = null;

// console.log('str', str, typeof str);
// console.log('number', number, typeof number);
// console.log('number2', number2, typeof number2);
// console.log('arr', arr, typeof arr, Array.isArray(arr));
// console.log('object', object, typeof object, Array.isArray(object));
// console.log('undef', undef, typeof undef);
// console.log('nil', nil, typeof nil);
// console.log('aBoolean', aBoolean, typeof aBoolean);

// console.log('object.itsNull', object.itsNull, typeof object.itsNull);
// console.log('object.foo', object.foo, typeof object.foo);

// when to use const or let

const name = 'Barbara';
// name += ' Xavier'; // exceptions will be thrown. Can't alter variable after initialization

let name2 = 'Barbara';
name2 += ' Xavier';

console.log('name2', name2);
