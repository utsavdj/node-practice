setInterval(() => {
    console.log('Hello Event Loop!');
}, 5000); // node process or operating process will not exit unless it crashes, this is because node's event loop is busy

// event loop is what node uses to process asynchronous actions and interface them for you so that you do not have to deal with threads

// event loop is an infinite loop built into node to monitor asynchronous operations that need to be run and figure out when they are 
// ready to be consumed

// here event loop will monitor the setInterval timer, and every 5 seconds will take the interval's callback by sending the arrow function
// to v8 and v8 will execute what is inside of it

// after the process is killed the process will be removed from the os

//every node process starts event loop and when the process has no async operations to perform the event loop will exit and the os will
// terminate that node process