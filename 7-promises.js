// const axios = require('axios');

// const BASE_URL = 'http://jp-go-url-shortener.herokuapp.com';

// const client = axios.create({
//   baseURL: BASE_URL,
//   timeout: 5000, // 5000 milliseconds || 5 seconds
// })

// function promiseGetLinks() {
//   return client.get(`${BASE_URL}/links?ski=0&limit=10`)
//     .then((result) => {
//       return result.data;
//     })
//     .then((result) => {
//       console.log('result', result);
//       return result;
//     })
//     .catch((err) => {
//       console.log('err', err.response.data);
//     });
// }


// promiseGetLinks()
//   .then(() => console.log('request done'));

function asyncDivide(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject(new Error('cannot divide by 0'));
    }
    resolve(num1 / num2);
  });
}

// asyncDivide(1, 2)
//   .then((result) => {
//     console.log('result is', result);
//   })
//   .catch((err) => {
//     console.log('err', err);
//   })

async function main() {
  try {
    const result = await asyncDivide(1, 0);
    console.log('result', result);
  } catch (err) {
    console.log('err', err);
  }
}

main();
