let counter = 0;
const intervalFunc = (limit) => {
    if(counter < limit){
        console.log('Hello World!');
    }else{
        console.log('Done!');
        clearInterval(intervalId);
    }
    counter++;
}

const intervalId = setInterval(intervalFunc, 1000, 5);