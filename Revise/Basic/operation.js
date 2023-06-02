module.exports.add = function (x, y) {
  return x + y;
};

module.exports.substarct = function (x, y) {
  return Math.abs(x - y);
};

module.exports.multiply = function (x, y) {
  return x * y;
};

module.exports.remainder = function (x, y) {
  return x % y;
};

module.exports.divison = function (x, y) {
  return Math.ceil(x / y);
};

/**
 * IMPORTANT FUNCTION CALLED "CURRING"
 */

// module.exports.addition = function (x) {
//   return function (y) {
//     return function (z) {
//       return x + y + z;
//     };
//   };
// };
