const {createReadStream, createWriteStream} = require('fs');

const stream = createReadStream('./data/stream.log', {
    encoding: 'utf8'
});

const writer = createWriteStream('./data/output.log');

// let iteration = 0;

// stream.on('data', (data) => {
//     // stream.pause();

//     console.log(++iteration);

//     writeData(data);
    
// });

// const writeData = data => {
//     setTimeout(() => {
//         writer.write(data);
//     }, 60000);
// }

stream.pipe(writer);