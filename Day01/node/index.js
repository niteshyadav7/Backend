// Adding the number

// function add(a, b) {
//   return a + b;
// }
// const args = process.argv.slice(2);
// console.log(args);

// const ans = add(parseInt(args[0]), parseInt(args[1]));
// console.log(ans);

// const args = process.argv.slice(2);

// function multipy(a, b) {
//   return a * b;
// }
// const ans = multipy(parseInt(args[0]), parseInt(args[1]));
// console.log(ans);

const operations = require("./operations");
const args = process.argv.slice(2);

console.log(operations.add(parseInt(args[0]), parseInt(args[1])));

console.log(operations.multipy(parseInt(args[0]), parseInt(args[1])));
