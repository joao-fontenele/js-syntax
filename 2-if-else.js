let condition = true;

if (condition) {
  console.log('condition is true');
}

condition = false;

if (condition) {
  console.log('condition is true');
} else {
  console.log('condition is false');
}

if (!condition) {
  console.log('condition is true');
} else {
  console.log('condition is false');
}

let condition2 = false;

if (condition) {
  console.log('condition is true');
} else if (condition2) {
  console.log('condition2 is true');
} else {
  console.log('condition2 is false and condition is false');
}

if (!condition) {
  if (!condition2) {
    console.log('both condtions are false');
  }
}

// ternary ifs

let result = condition ? 'isTrue' : 'isFalse';
console.log('result', result);
result = !condition ? 'isTrue' : 'isFalse';
console.log('result', result);

