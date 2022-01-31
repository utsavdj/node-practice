// const {writeFile} = require('fs');

// writeFile(
//     './data/app.log',
//     '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-append-test" 405 21512',
//     {flag: 'a'},
//     (err) => {
//         err ? console.log(err) : console.log('File saved!');
//     }
// );

// ------------------------------- OR ---------------------------------------

const {appendFile} = require('fs');

appendFile(
    './data/app.log',
    '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-append-test-2" 405 21512',
    (err) => {
        err ? console.log(err) : console.log('File saved!');
    }
);
