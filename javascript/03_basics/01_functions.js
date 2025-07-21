function addtwonombers(a, b) {//a,b are parameters 
    return a + b;
}
addtwonombers(2, 3); // 5 //2,3 is arguments
addtwonombers(2, 3, 4); // 5 (ignores the third argument)
addtwonombers(2); // NaN (second argument is undefined)
addtwonumbers(2,"3"); // 5 (string is converted to number)
const resutl = addtwonombers(2, 3);
// console.log(resutl); // 5


function loginusermessage(username){
    if(username === undefined){
        return "Please provide a username";
    }
    return `Welcome ${username} to the app`;
}

console.log(loginusermessage("Aastha"));
// console.log(loginusermessage()); // indefined (no argument passed)
console.log(loginusermessage()); // Please provide a username



function calculatecartprice(val1,val2,...num1){//... is rest operator
    return num1
}
console.log(calculatecartprice(100, 200, 300)); // [ 100, 200, 300 ]


const user={
    username:"Aastha",
    price:100,
}
function handleuser(anyobject){
    console.log(`usernmae is ${anyobject.username} and price is ${anyobject.price}`);
    console.log(user.price);
}
handleuser({
    username:"Aastha",
    price:100,
})

const mynewarray=[1,2,3,4,5];
function returnsecondvalue(getarray){
    return getarray[1];
}
console.log(returnsecondvalue(mynewarray)); // 2