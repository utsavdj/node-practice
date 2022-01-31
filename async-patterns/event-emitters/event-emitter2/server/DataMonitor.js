const EventEmitter = require('events');

class DataMonitor extends EventEmitter{
    logLevel = 'Dev';
}

module.exports = DataMonitor;