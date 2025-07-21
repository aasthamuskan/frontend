const user={
    username: "hitesh",
    price: 999,
    welcomemessage: function(){
        console.log(`${this.username},welcome to website`);
    }

}
// user.welcomemessage();
// user.username="sam";
// user.welcomemessage();

// console.log(this)//empty{} object in node ,window object in browser

// function chai(){
//     let username="hitesh";
//     console.log(this.username);
// }
// chai();//output is undefine

// const chai=function(){
//     let username="hitesh";
//     console.log(this);
// }
// chai();//undefine

// const chai =()=>{
//     let username="hitesh"
//     console.log(this);
// }
// chai()//{}

// const addtwo=(num1,num2)=>{
//     return num1+num2
// }

// console.log(addtwo(3,4))

//const addtwo=(num1,num2)=>num1+num2

// const addtwo=(num1,num2)=>(num1+num2)
const addtwo=(num1,num2)=>({username: "hitesh"})

console.log(addtwo(3,4))
