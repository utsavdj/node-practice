const fs = require('fs');

const files = ['./loop.js', './zz.js', './try.js'];

files.forEach(file => {
    try{
        const data = fs.readFileSync(file, 'utf-42');
        console.log('File data is', data);
    }catch(err){
        // console.log('File not found');
        console.log('Something went wrong and we are going to ignore it.');
    }
});