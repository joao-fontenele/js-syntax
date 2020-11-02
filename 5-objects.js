// memory

// const obj = {};

// const obj2 = {};

// const isSame = obj === obj2;
// console.log('isSame', isSame);

// const obj3 = obj2;
// obj3.name = 'Barbara';
// console.log('obj2', obj2);

// acessing

const link = { url: 'https://www.google.com' };
link.slug = 'aU35s';
console.log('link', link);
const attr = 'slug';
console.log('link[slug]', link[attr]);
console.log('link.url', link.url); // best way to access

console.log('iteration');
for (const key in link) {
  console.log('link[' + key + ']', link[key]);
}

console.log('Object.keys(link)', Object.keys(link));

console.log('object keys foreach');
Object.keys(link).forEach((key) => {
  console.log('link[' + key + ']', link[key]);
});
