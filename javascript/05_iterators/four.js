const myobject = {
    js: "JavaScript",
    python: "Python",
    java: "Java"
};
for (const key in myobject) {
    console.log(`${key}: ${myobject[key]}`);
}
// Output: js: JavaScript, python: Python, java: Java

//for in loop in array
const array = ["apple", "banana", "cherry"];
for (const index in array) {
    console.log(`${index}: ${array[index]}`);
}
// Output: 0: apple, 1: banana, 2: cherry


// map ke andar itration nhai ki zaa sakti