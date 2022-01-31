const {Worker, isMainThread, parentPort} = require('worker_threads');

if(isMainThread){
    console.log('Starting the main thread.');

    const worker = new Worker(__filename);

    worker.on('message', (msg) => {
        console.log(`Worker: ${msg}`);
    });

    console.log('Still in the main thread');
}else{
    parentPort.postMessage('Getting started');
    wasteTime(2000);
    parentPort.postMessage('In the middle');
    wasteTime(2000);
    parentPort.postMessage('All done');
}

// console.log('Starting the main thread.');

// console.log('Getting started');
// wasteTime(2000);
// console.log('In the middle');
// wasteTime(2000);
// console.log('All done');

// console.log('Still in the main thread');

function wasteTime(delay){
    const end = Date.now() + delay;
    while(Date.now() < end){}
}

