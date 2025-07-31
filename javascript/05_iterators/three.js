//for of
const numbers = [1, 2, 3, 4, 5];
for (const i of numbers) {
    console.log(i);
}
// The for...of loop is used to iterate over iterable objects like arrays, strings, and maps.
// It provides a simpler syntax compared to traditional for loops and is often more readable.
// The for...of loop is useful when you want to iterate over the values of an iterable object without needing to access the index.
// Output: 1, 2, 3, 4, 5
// The for...of loop is useful when you want to iterate over the values of an iterable object without needing to access the index.

//maps

const map = new Map();
map.set("name", "John");
map.set("age", 30);
map.set("city", "New York");
for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}
// The for...of loop can also be used with maps, allowing you to iterate over key-value pairs.
// The for...of loop with maps provides a convenient way to access both keys and values in a single iteration.
// Output: name: John, age: 30, city: New York


const myobject = {
    'name1': "Alice",
    'name2': "Bob",
    'name3': "Charlie"
};
for (const key in myobject) {
    console.log(`${key}: ${myobject[key]}`);
}
//output is myobject is not iterable reson is because objects are not iterable by default.

