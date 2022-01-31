const {constants, writeFile} = require('fs');

// writeFile(
//     './data/app.log',
//     '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-file-test" 405 21512',
//     {
//         flag: 'wx' // x is exclusive which throws error if the file already exists
//     },
//     (err) => {
//         err ? console.log(err) : console.log('File saved!');
//     }
// );

// writeFile(
//     './data/new-app.log',
//     '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-file-test" 405 21512',
//     {
//       mode: constants.S_IWUSR | constants.S_IRUSR // equivalent to chmod 0o600
//     },
//     (err) => {
//         err ? console.log(err) : console.log('File saved!');
//     }
// );

writeFile(
    './data/new-app.log',
    '163.3.217.18 - - [21/09/2019:10:07:21 -0500] "GET /write-file-test" 405 21512',
    {
      encoding: 'base64'
    },
    (err) => {
        err ? console.log(err) : console.log('File saved!');
    }
);
