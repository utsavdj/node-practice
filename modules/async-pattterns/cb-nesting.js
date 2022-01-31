const fs = require('fs');

fs.readFile(__filename, function cb1(err, data) {
    fs.readFile(__filename + '.copy', data, function cb2(err) {
        // Nest mode callbacks here
    });
});

console.log('TEST');