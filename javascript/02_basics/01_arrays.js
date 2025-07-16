//arrays'
// 0 based indexing
// it makes shaalow copies=
// shalow copies is when you copy an array, it copies the reference to the original array, not the actual values.
const myarr=["aash","sachin","dhoni"];
const mynu=[0,1,2,3,4,5];
console.log(myarr[0]); // aash

//array methods
console.log(myarr.length); // 3
myarr.push("virat"); // adds "virat" to the end
console.log(myarr); // [ 'aash', 'sachin', 'dhoni', 'virat' ]
myarr.pop(); // removes the last element
console.log(myarr); // [ 'aash', 'sachin', 'dhoni' ]
myarr.unshift("msd"); // adds "msd" to the beginning
console.log(myarr); // [ 'msd', 'aash', 'sachin', 'dhoni' ]
myarr.shift(); // removes the first element
console.log(myarr); // [ 'aash', 'sachin', 'dhoni' ]
myarr.splice(1, 1, "rohit"); // removes 1 element at index 1 and adds "rohit"
console.log(myarr); // [ 'aash', 'rohit', 'dhoni' ]
console.log(myarr.includes("rohit")); // true
console.log(myarr.indexOf("dhoni")); // 2


const newarrr=myarr.join(", "); // joins elements into a string
console.log(newarrr); // "aash, rohit, dhoni"
console.log(typeof newarrr); // string


/************slice vs splice************/

console.log("A",myarr);
const myn1=myarr.slice(1, 3); // creates a new array from index 1 to 2 (not including 3)
console.log(myn1); // [ 'rohit', 'dhoni' ]
console.log("B",myarr); // [ 'aash', 'rohit', 'dhoni' ] (original array remains unchanged)

const myn2=myarr.splice(1, 2); // removes 2 elements starting from index 1
console.log(myn2); // [ 'rohit', 'dhoni' ] (removed elements)

// basic diffrerence:
// // slice() creates a new array without modifying the original array
// // splice() modifies the original array and returns the removed elements


