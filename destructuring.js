// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const {PI, E, SQRT2} = Math;

console.log(PI);

// With require
const { readFile } = require('fs');

const circle = {
    label: 'circleX',
    radius: 2,
}

const circleArea = ({radius}, {precision = 2} = {}) => (PI * radius * radius).toFixed(precision);

console.log(circleArea(circle));
console.log(
    circleArea(circle, {precision: 5})
);

const [first, second, , fourth] = [1,2,3,4];
console.log(first);
console.log(fourth);

const [frst, ...restOfItems] = [10, 20, 30, 40];
console.log(frst);
console.log(restOfItems);

const data = {
    temp1: '001',
    temp2: '002',
    firstName: 'John',
    lastName: 'Doe',
}

const {temp1, temp2, ...person} = data;
console.log(temp1);
console.log(temp2);
console.log(person);

const newArray = [...restOfItems];

const newObject = {
    ...person,
};