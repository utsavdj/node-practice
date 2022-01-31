const fs = require('fs');

const files = ['./loop.js', './zz.js', './try.js'];

files.forEach(file => {
    try{
        // const data = fs.readFileSync(file, 'utf-42');
        const data = fs.readFileSync(file);
        console.log('File data is', data);
    }catch(err){
        if(err.code === 'ENOENT'){
            console.log('File not found')
        }else{
            throw err;
        }
    }
});