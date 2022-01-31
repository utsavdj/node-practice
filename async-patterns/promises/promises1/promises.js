function doAsyncWork(resolve, reject){
    // perform async call
    if(success){
        resolve(data);
    }else{
        reject(reason);
    }
}

const myPromise = new Promise(doAsyncWork);

// ------------------ OR --------------------

const myPromise1 = new Promise((resolve, reject) => {
    // perform async call
    if(success){
        resolve(data);
    }else{
        reject(reason);
    }
});


MethodThatReturnsPromise()
.then(data => console.log(data))
.catch(err => console.log(err))
.finally(() => console.log('All done!'));

