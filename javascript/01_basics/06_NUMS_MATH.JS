const score=400
console.log(score);// 400


const balance=new Number(100);
console.log(balance); // [Number: 100]
console.log(balance.toString()); // "100"
console.log(balance.valueOf()); // 100
console.log(balance.toFixed(2)); // "100.00"
const  othernumber=23.899;
console.log(othernumber.toPrecision(4)); // "23.90"


const hundereds=10000000;
console.log(hundereds.toLocaleString('en-IN')); // "1,00,00,000"




//*************************-----------maths------------------********************************/


console.log(math);
console.loh(math.abs(-5)); // 5
console.log(Math.ceil(4.2)); // 5 (rounds up)
console.log(Math.floor(4.8)); // 4 (rounds down)
console.log(Math.round(4.5)); // 5 (rounds to nearest integer)
console.log(Math.max(1, 2, 3)); // 3 (maximum value)
console.log(Math.min(1, 2, 3)); // 1 (minimum value)

console.log(Math.sqrt(16)); // 4 (square root)
console.log(Math.pow(2, 3)); // 8 (2 raised to the power
console.log(Math.PI); // 3.141592653589793 (value of π)
console.log(Math.E); // 2.718281828459045 (value of e)

console.log(Math.random()); // random number between 0 and 1
console.log((Math.random() * 10 )+1 ); // random number between 1 and 10
console.log(Math.floor(Math.random() * 100)); // random integer between 0 and 99
console.log(Math.ceil(Math.random() * 100)); // random integer between 1 and
console.log(Math.trunc(4.9)); // 4 (removes decimal part)

const min=10;
const max=20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // random integer between 10 and 20

