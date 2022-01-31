// function (exports, module, require, __filename, __dirname) {
let g = 1; 

console.log(arguments);

exports.a = 42; // exports object is just an alias to modules.exports object
module.exports.b =37;

// exports = () => {}; // not OK

module.exports = () => {}; // OK

console.log(arguments);

// return module.exports;
// }(module.exports, )