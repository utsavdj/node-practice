const {Worker} = require('worker_threads');

const firstWorker = new Worker('cpu_intensive.js');

const secondWorker = new Worker(`
    console.log('Do CPU-intensive stuff here...');
`, {eval: true});