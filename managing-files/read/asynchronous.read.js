const {convertCsv} = require('./csv.parse');
const {readFile} = require('fs');

module.exports.read = () => {
    // if the utf8 encoding is not specified the system by default will read the file as buffer of bytes
    readFile('./data/pulitzer-circulation-data.csv', 'utf8', (err, data) => {
        if(err){
            console.log(`There was a problem with the file ${err}`);
            return;
        }
        // console.log(data);
        const vals = convertCsv(data);
        // console.log(vals);
        console.table(vals);
    });
};