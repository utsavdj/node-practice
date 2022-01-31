const url = require( 'url' );

const myUrl = new URL('s3://utsav-testing-bucket/configfiles/upload/config.json');
console.log(myUrl);
console.log('test', myUrl.pathname.replace('/', ''));
console.log(myUrl.pathname);

const allTokens = 's3://utsav-testing-bucket/configfiles/upload/config.json'.split( '/' );
const s3key = allTokens.slice( 3 ).join( '/' );
const pathTokens = s3key.split( '/' );
console.log(pathTokens[ pathTokens.length - 1 ]);
console.log(s3key);