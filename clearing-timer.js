const timerId = setTimeout(() => {
    console.log('You\'ll not see this one');
}, 0);

// setImmediate

clearTimeout(timerId);

// clearImmediate
// clearInterval

