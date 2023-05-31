const operation = require("./operation");
const args = process.argv.slice(2);

// Adding
const adding = operation.add(parseInt(args[0]), parseInt(args[1]));
console.log(adding);

// Substraction
const substraction = operation.substract(parseInt(args[0]), parseInt(args[1]));
console.log(substraction);

// Multiply
const multiply = operation.multiply(parseInt(args[0]), parseInt(args[1]));
console.log(multiply);
