const useremail= "aasthamuskan@gmail.com";
if( useremail) {
    console.log("Email is present");
} else {
    console.log("Email is not present");
}

//falsy values in JavaScript: 0, "", null, undefined, NaN,false ,-0,BigInt(0)
// truthy values in JavaScript: all other values that are not falsy
// truthy values include: "0", "false", [], {}, function() {}, true, 1, -1, BigInt(1), Symbol("symbol")," ";
// in browser console= false==0//true
// false=""//true
// 0==""//true

//nullish coalescing operator (??) is used to provide a default value when the left-hand side is null or undefined
let userName = null;
let defaultName = "Guest";
let displayName = userName ?? defaultName;
console.log(displayName); // Output: "Guest"
// The nullish coalescing operator is useful for setting default values when dealing with optional data.
// It only checks for null or undefined, not for other falsy values like 0 or


//terniary operator
//condition ? expressionIfTrue : expressionIfFalse
const age = 18;
const canVote = age >= 18 ? "You can vote" : "You cannot vote";
console.log(canVote); // Output: "You can vote"
// The ternary operator is a shorthand for if-else statements and is often used for simple conditional assignments.

