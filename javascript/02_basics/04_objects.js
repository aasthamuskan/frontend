// const tinder= new Object()//SINGLETON OBJECT
// console.log(tinder); // {}
// const tinder={};//non singleton object
// console.log(tinder); // {} 

// tinder.id="123asd";
// tinder.name="Aastha";
// tinder.isLoggedin=true;
// console.log(tinder); // { id: '123asd', name: 'Aastha', isLoggedin: true }


const regularuser={
    email:"some@gmil.com",
    fullname:{
        userfullname:{
            firstname:"Aastha",
            lastname:"gupta"
        }
    }
}
console.log(regularuser.fullname.userfullname.firstname); // Aastha
console.log(regularuser.fullname.userfullname.lastname); // gupta


///***************************************merging two or more object**************************/
const obj1={
    1:"a",
    2:"b"

}
const obj2={
    3:"c",  
    4:"d"
}
//const obj3={obj1, obj2}; // merging two objects
console.log(obj3); // { obj1: { '1': 'a', '2 : 'b' }, obj2: { '3': 'c', '4': 'd' } }

//const obj3=Object.assign({},obj1,obj2); // merging two objects
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj3={...obj1,...obj2}; // merging two objects
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users=[
    {id:1, name:"Aastha", age:22},
    {id:2, name:"Aasha", age:23},
    {id:3, name:"Aasa", age:24},
]
users[1].email
const tinder={};
tinder.id="123asd";
tinder.name="Aastha";
tinder.isLoggedin=true;
 console.log(tinder); 
 console.log(Object.keys(tinder)); // [ 'id', 'name', 'isLoggedin' ]
 console.log(Object.values(tinder)); // [ '123asd', 'Aastha', true  ]
 console.log(Object.entries(tinder)); // [ [ 'id', '123asd' ], [
//   'name', 'Aastha' ], [ 'isLoggedin', true ] ]
console.log(Object.entries(tinder).length); // 3
console.log(Object.keys(tinder).length); // 3
console.log(Object.values(tinder).length); // 3
console.log(Object.hasOwn(tinder, "id")); // true
console.log(Object.hasOwn(tinder, "email")); // false
console.log(Object.hasOwn(tinder, "isLoggedin")); // true



const course={
    coursename: "js in hindi",
    price: 999,
    courseinstructor: "Aastha Gupta",

}
// course.courseinstructor
// destructuring is a way to extract values from an object and assign them to variables
const {courseinstructor}= course; // destructuring
console.log(courseinstructor); // Aastha Gupta
const {coursename, price}= course; // destructuring
console.log(coursename); // js in hindi
console.log(price); // 999
// destructuring with default value
const {coursename: cname, price: cost, courseinstructor: instructor="Aastha"}= course; // destructuring with default value
console.log(cname); // js in hindi
console.log(cost); // 999
console.log(instructor); // Aastha Gupta
// destructuring with default value and renaming
const {coursename: courseName="js in english", price: coursePrice=1000, courseinstructor: courseInstructor="Aastha Gupta"}= course; // destructuring with default value and renaming
console.log(courseName); // js in hindi

// api is a way to extract values from an object and assign them to variables

// {
//     "name": "Aastha",
//     "course": "js in hindi",
//    " price": 999,

// }