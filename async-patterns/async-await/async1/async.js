// function getData(){
//     return MethodThatReturnsPromise()
//     .then(rawData => JSON.parse(rawData));
// }

async function getData(){
    const rawData = await MethodThatReturnsPromise();
    return JSON.parse(rawData);
}

getData()
.then(data => console.log(data))
.catch(err => console.log(err));

// Keep doing work while async code completes