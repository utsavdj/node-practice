const http = require('http');
// const https = require('https');
const services = require('./services');
// const textBody = require('body');
const jsonBody = require('body/json');
// const formBody = require('body/form');
// const anyBody = require('body/any');
const fs = require('fs');
const formidable = require('formidable');

const server = http.createServer();
// const server = https.createServer({
//     key: fs.readFileSync('./key.pem'),
//     cert: fs.readFileSync('./cert.pem')
// });
server.on('request', (req, res) => {
    const parsedUrl = new URL(`http://${req.headers.host}${req.url}`);
    if(req.method === 'GET' && parsedUrl.pathname === '/metadata'){
        const params = parsedUrl.searchParams;
        const id = params.get('id');
        const metaData = services.fetchImageMetadata(id);
        // console.log(metaData);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        const serializedJSON = JSON.stringify(metaData);
        res.write(serializedJSON);
        res.end();
    }

    // const body = [];
    // req.on('data', (chunk) => { // Chunk = buffer
    //     // console.log('This is a chunk \n');
    //     // console.log(chunk.toString() + '\n');
    //     body.push(chunk);
    // }).on('end', () => {
    //     const parsedJSON = JSON.parse(Buffer.concat(body));
    //     const userName = parsedJSON[0].userName;
    //     console.log(userName);
    //     services.createUser(userName);
    // });

    else if(req.method === 'POST' && parsedUrl.pathname === '/users'){
        jsonBody(req, res, (err, body) => {
            console.log(body);
            if(err){
                console.log(err);
            }else{
                services.createUser(body.userName);
            }
        });
    }else if(req.method === 'POST' && parsedUrl.pathname === '/upload'){
        const form = new formidable.IncomingForm({
            uploadDir: __dirname,
            keepExtensions: true,
            multiples: true,
            maxFileSize: 5 * 1024 * 1024,
            encoding: 'utf-8',
            maxFields: 20
        });
        form.parse(req)
        .on('fileBegin', (name, file) => {
            console.log('Our upload has started!');
        })
        .on('file', (name, file) => {
            console.log('Field + file pair has been received');
        })
        .on('field', (name, value) => {
            console.log('Field received');
            console.log(name, value);
        })
        .on('progress', (bytesReceived, bytesExpected) => {
            console.log(bytesReceived + ' / ' + bytesExpected);
        })
        .on('error', (err) => {
            console.error(err);
            res.end('Error!')
            req.resume();
        })
        .on('aborted', () => {
            console.error('Request aborted by the user!');
        })
        .on('end', () => {
            console.log('Done - request fully received!');
            res.end('Success!');
        });
        // form.parse(req, (err, fields, files) => {
        //     if(err){
        //         console.log(err);
        //         res.statusCode = 500;
        //         res.end('Error!');
        //     }
        //     // console.log('\n fields:');
        //     // console.log(fields);
        //     // console.log('\n files');
        //     // console.log(files);
        //     res.statusCode = 200;
        //     res.end('Success!');
        // });
    }else{
        // res.statusCode = 404;
        // res.setHeader('X-Powered-By', 'Node');
        // res.setHeader('Hello', 'World');
        // res.writeHead(404, {
        //     'X-Powered-By': 'Node'
        // })
        // res.end();
        fs.createReadStream('./index.html').pipe(res);
    }

    req.on('error', (err) => {
        console.log(err);
    });

    res.on('error', (err) => {
        console.log(err);
    });
    // res.end('This was served with https!');
});

const port = 8080 || process.env.PORT;
// const port = 443 || process.env.PORT;

server.listen(port, () => console.log(`Server listening on port ${port}...`));