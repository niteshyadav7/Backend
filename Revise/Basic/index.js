/**
 * HOW TO TAKE DYNAMIC INPUTS
 */

// FIRST WAYS

// let args = process.argv;
// args = args.slice(2);
// console.log(args);

// SECOND WAYS

// const args = process.argv.slice(2);
// console.log(args);

/**
 * HOW TO USE MODULES "IMPORT AND EXPORTS"
 */

// const args = process.argv.slice(2);
// const operation = require("./operation");
// const adding = operation.add(parseInt(args[0]), parseInt(args[1]));
// console.log(adding);

// const substraction = operation.substarct(parseInt(args[0]), parseInt(args[1]));
// console.log(substraction);

// const multiplication = operation.multiply(parseInt(args[0]), parseInt(args[1]));
// console.log(multiplication);

// const remainder = operation.remainder(parseInt(args[0]), parseInt(args[1]));
// console.log(remainder);

// const divison = operation.divison(parseInt(args[0]), parseInt(args[1]));
// console.log(divison);

/**
 * CURRYING FUNCTION:
 */

// const addX = operation.addition(10);
// const addY = addX(20);
// const addZ = addY(30);
// console.log(addZ);

// OR

// const results = operation.addition(parseInt(args[0]))(parseInt(args[1]))(
//   parseInt(args[2])
// );

// console.log(results);
