// how data is store in the memory and it is accessed in JavaScript
// is of two types

//primitive and non-primitive data types



//primitive=>call by value

//7 ypes: string ,number, boolean, null, undefined, symbol, bigint
// its dynamically typed language


const score= false
const score1=100;
const scoreva=100.3
const outsidetemp= null;
const insideTemp= undefined;
const id= Symbol('id');
const anotherId= Symbol('id');
console.log(id === anotherId); // false, because symbols are unique


const bigNumber = BigInt(1234567890123456789012345678901234567890n);



//refrence type or non-primitive=>call by reference
//object, array, function

const heros=["aash","sachin","dhoni"];
const myObj={
    name:"aash",
    age:23,
    isActive:true
}
const myFunction = function() {
    console.log("Hello, World!");
}

console.log(typeof bigNumber); // bigint

// typeof undefined is "undefined"
// type of null is "object" (this is a known JavaScript quirk)
// type of boolean is "boolean"
// typeof 100 is "number"
// typeof "hello" is "string"
// type of object is "object"
// typeof [] is "object" (arrays are a type of object)
// typeof function() {} is "function" (functions are also objects in JavaScript)//object function





//+++++++++++++++++++++++++++++++
// stack (primitive)and heap memory(non-primitive)
// stack memory is used for primitive data types 
let myname="aastha"
let anothernamae=myname
anothernamae="sachin"
console.log(myname); // aastha
console.log(anothernamae); // sachin



let user1={
    email: "aasthamusakn@gmail.com",
    upi: "aasthamusakn@okicici"
}
let user2=user1;
user2.email="MUSKAa@gmail.com";
//image.png for more clarity
// heap memory is used for non-primitive data types

