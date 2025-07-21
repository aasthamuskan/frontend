// let a=10;
// const b=20;
 var c=30;
//scope
if(true){
    let a=100; // block scope
    const b=200; // block scope
    var c=300; // function scope or global scope
   
}
 console.log(a);//not defined in block scope
    console.log(b); // not defined in block scope
    console.log(c);   // 300 (var is function scoped, so it is accessible here)


// nested scope is when a variable is defined inside a function or block, it can access variables from its parent scope but not the other way around.
function one(){
    let a=10; // function scope
    function two(){
        let b=20; // function scope
        console.log(a); // 10 (accessing parent scope variable)
        console.log(b); // 20 (accessing own scope variable)
    }
    two();//output is 10 and 20
    console.log(a); // 10 (accessing own scope variable)
    console.log(b); // not defined (b is not accessible here)
}
// one();
if(true){
    const username="hitesh"
    if(username=="hitesh"){
        const website="youtube"
        //console.log(username+website);
    }
   // console.log(website);//output is not accesibble
}
//console.log(username);
//++++++++++++++++++++ intresting +++++++++++++++++

function addone(num){
    return num+1;
}
addone(5);

const addtwo=function(num){//basically is is function too but we can call this expresion
    return num+2
}
addtwo(7);
/*
Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (function or global scope) before code execution.
Variables declared with var are hoisted and initialized with undefined, while let and const are hoisted but not initialized.
Function declarations are hoisted completely, so they can be called before their definition.
Function expressions and arrow functions are not hoisted.
*/

