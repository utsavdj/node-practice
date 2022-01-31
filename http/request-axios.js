const axios = require('axios');
const fs = require('fs');

axios({
    method: 'get',
    url: 'http://www.google.com',
    responseType: 'stream'
})
.then((response) => {
    // console.log(response.data);
    response.data.pipe(fs.createWriteStream('google.html'));
})
.catch((error) => {
    console.log(error);
})

axios({
    method: 'post',
    url: 'http://localhost:8080/users',
    responseType: 'stream',
    data: {
        userNames: ['dannyt100', 'freddyv100']
    },
    transformRequest: (data, headers) => {
        const newData = data.userNames.map((userName) => {
            return userName + '!';
        });
        return JSON.stringify(newData);
    },
    transformResponse: (data) => {

    }
})
.then((response) => {
    // console.log(response.data);
    response.data.pipe(fs.createWriteStream('google.html'));
})
.catch((error) => {
    console.log(error);
});

const getMetadata = () => {
    return axios.get('http://localhost:8080/metadata?id=1');
}

const getMetadataAgain = () => {
    return axios.get('http://localhost:8080/metadata?id=2');
}

const getMetadataAgain2 = () => {
    return axios.get('http://localhost:8080/metadata?id=5');
}

axios.all([
    getMetadata(), getMetadataAgain(), getMetadataAgain2()
]).then((responseArray) => {
    console.log(responseArray[0].data.id);
    console.log(responseArray[1].data.id);
    console.log(responseArray[2].data.id);
})