//sigleton=ye apne tarike ka ek hi object hai
// koi v constructor se jab ham banate hai to uska ek hi instance hota hai
const singleton = {
  name: 'Singleton',
    getName: function() {
        return this.name;
    }
};

// when we declare like litrals then sigleton is not created in heap memory

//object literal
const mysum=symbol("key1");
const myObject = {
    name: 'My Object',
    age: 30,
    [mysum] : "mykey1",// symbole ki tarah use karna hai to sqare bracket me likhna padega

    isActive: true,
    "full name": 'My Full Name',
    };

console.log(myObject.name); // My Object
console.log(myobject[age]); // 30
console.log(myobject["full name"]); // My Full Name
 

console.log(myObject['full name']); // My Full Name
jsuser.email="aasta@gmail.com";
Object.freeze(jsuser); // prevents modification of the object
jsuser.email="muskan@gmail.com"; // this will not change the email
console.log(jsuser.email); //


jsuser.greeting = function() {
    console.log(`Hello, ${this.email}`);
    
}

console.log(jsuser.greeting);//undefined, because we cannot add new properties to a frozen object
console.log(jsuser.greeting()); // TypeError: jsuser.greeting is not a function

