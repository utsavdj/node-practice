const http = require('http');
const https = require('https');

// const request = http.request(
//     { hostname: 'www.google.com' },
//     (response) => {
//         console.log(`statusCode: ${response.statusCode}`);
//         console.log(response.headers);

//         response.on('data', (chunk) => {
//             console.log('This is a chunk: \n');
//             console.log(chunk.toString());
//         });
//     }
// );

// request.on('error', (err) => {
//     console.error(err);
// });

// request.end();

// const request = https.get(
//     'https://www.google.com',
//     (response) => {
//         console.log(`statusCode: ${response.statusCode}`);
//         console.log(response.headers);

//         response.on('data', (chunk) => {
//             console.log('This is a chunk: \n');
//             console.log(chunk.toString());
//         });
//     }
// );

// request.on('error', (err) => {
//     console.error(err);
// });

const data =  JSON.stringify({
    userName: 'fredV100'
});

const options = {
    hostname: 'localhost',
    port: 443,
    path: '/users',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length,
        // Authorization: Basic username:password in base64
        'Authorization': Buffer.from('myUsername' + ':' + 'myPassword').toString('base64')
    }
}

const request = https.request(
    options,
    (response) => {
        console.log(`statusCode: ${response.statusCode}`);
        console.log(response.headers);

        response.on('data', (chunk) => {
            console.log('This is a chunk: \n');
            console.log(chunk.toString());
        });
    }
);

request.on('error', (err) => {
    console.error(err);
});

request.write(data);

request.end();