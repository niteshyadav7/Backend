const args = process.argv.slice(2);
const operation = require("./operation");

const myAge = operation.calcAge(parseInt(args[0]), parseInt(args[1]));
console.log(myAge);

/**
 * HOW TO TAKE INPUT
 * HOW TO REQUIRE USE
 * HOW TO IMPORT AND EXPORT
 */
