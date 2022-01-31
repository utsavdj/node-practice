const http = require('http');

const requestListener = (req, res) => {
    // res.end('Hello World\n');
    // console.dir(req, {depth: 0});
    // console.log(req.url);
    console.dir(res, {depth: 0});

    // both req (readable stream) and res (writable stream) are streams!
    res.write('Hello Node\n');
    res.end();
};

// const server = http.createServer(requestListener);
const server = http.createServer();
server.on('request', requestListener);

server.listen(4242, () => {
    console.log('Server is running...');
});