const {closeSync, openSync, readdirSync, writeSync, watch} = require('fs'); // readddirSync reads all the files in the directory
const camelCase = require('camelcase');

watch('./read', () => {
    const indexFd = openSync('./index.js', 'w'); // if w is not specified then the file will open in read mode which will throw an exception when we try to write it
    const files = readdirSync('./read');
    files.map((file) => {
        const name = file.replace('.js', '');
        console.log(`Adding a file: ${file}`);

        writeSync(
            indexFd,
            `module.exports.${camelCase(name)} = require('./read/${name}').read;\n`
        );
    });
    closeSync(indexFd);
});