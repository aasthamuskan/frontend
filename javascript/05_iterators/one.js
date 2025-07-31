//for loop
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// The for loop is used to iterate over arrays or perform a block of code a certain number of times.
// The loop continues until the condition is false.
// The loop variable 'i' is incremented by 1 in each iteration.
// The loop can be used to access each element of the array by its index.

// nested for loop
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}
// The nested for loop is used to iterate over a two-dimensional array (matrix).
// The outer loop iterates over each row, and the inner loop iterates over each element
//output is // 1, 2, 3, 4, 5, 6, 7, 8, 9





// keyword break is used to exit a loop or switch statement prematurely




// The break statement can be used to stop the execution of a loop or switch case.
// It is often used when a certain condition is met, allowing for more control over the flow of the program.
// The continue statement is used to skip the current iteration of a loop and move to the next iteration
// The continue statement can be used to skip the current iteration of a loop and continue with the next iteration.
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 3) {
        continue; // Skip the number 3
    }
    console.log(numbers[i]); // Output: 1, 2, 4, 5
}
// The continue statement is useful when you want to skip certain values in a loop without exiting the loop entirely.
// The continue statement can be used to skip the current iteration of a loop and continue with the next iteration.
// The continue statement can be used in any type of loop, including for, while, and do-while loops.
// The do-while loop is similar to the while loop, but it guarantees that the code block will be executed at least once.
// The do-while loop is a variant of the while loop that guarantees at least one execution of the code block.
// The do-while loop is a variant of the while loop that guarantees at least one execution of the code block.
let count = 0;
do {
    console.log(count);
    count++;
}
while (count < 5);
// The do-while loop is useful when you want to ensure that the code block is executed at least once, regardless of the condition.
// The do-while loop is useful when you want to ensure that the code block is executed at least once, regardless of the condition.


// The for...of loop is used to iterate over iterable objects like arrays, strings, and maps.
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
    console.log(fruit);
}
// The for...of loop provides a simpler syntax for iterating over iterable objects compared to traditional for loops.
// The for...in loop is used to iterate over the properties of an object.
const person = { name: "Alice", age: 30, city: "New York" };
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
// The for...in loop iterates over the enumerable properties of an object.
// It is commonly used to access object properties and their values.
// The for...in loop is not recommended for arrays, as it iterates over all enumerable properties, including inherited ones.

// The forEach method is used to iterate over arrays and execute a provided function for each element.
const numberss = [1, 2, 3, 4, 5];
numbers.forEach((numberss) => {
    console.log(numberss);
});
// The forEach method is a higher-order function that takes a callback function as an argument.
// It is often used for side effects, such as logging or modifying elements in an array.
// The forEach method does not return a new array, and it cannot be used with break or continue statements.
// The map method is used to create a new array by applying a function to each element of the original array.
const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
// The map method is a higher-order function that returns a new array with the results of applying the provided function to each element.
// It is commonly used for transforming data in arrays.
// The filter method is used to create a new array with elements that pass a test defined by a provided function.
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
// The filter method is a higher-order function that returns a new array containing only the elements that satisfy the provided condition.
// It is commonly used for selecting specific elements from an array based on a condition.
// The reduce method is used to apply a function against an accumulator and each element in the array to reduce it to a single value.
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15
// The reduce method is a higher-order function that takes a callback function and an initial value as arguments.
// It is commonly used for aggregating data, such as calculating sums, averages, or concatenating strings.
// The find method is used to return the first element in an array that satisfies a provided testing function.
const firstEvenNumber = numbers.find((number) => number % 2 === 0);
console.log(firstEvenNumber); // Output: 2
// The find method is a higher-order function that returns the first element that matches the condition.
// It is useful for searching for specific elements in an array.
// The some method is used to test whether at least one element in the array passes the test implemented by the provided function.
const hasEvenNumber = numbers.some((number) => number % 2 === 0);
console.log(hasEvenNumber); // Output: true
// The some method is a higher-order function that returns true if at least one element satisfies the condition.
// It is useful for checking if any elements in an array meet a specific condition.
// The every method is used to test whether all elements in the array pass the test implemented by the provided function.
const allEvenNumbers = numbers.every((number) => number % 2 === 0);
console.log(allEvenNumbers); // Output: false
// The every method is a higher-order function that returns true if all elements satisfy the condition.
// It is useful for checking if all elements in an array meet a specific condition.
// The includes method is used to check if an array contains a certain value.
const hasThree = numbers.includes(3);
console.log(hasThree); // Output: true
// The includes method is a simple way to check for the presence of a value in an array.
// It returns true if the value is found, and false otherwise.
// The indexOf method is used to find the first index of a specified value in an array.
const indexOfThree = numbers.indexOf(3);
console.log(indexOfThree); // Output: 2
// The indexOf method returns the index of the first occurrence of the specified value.
// If the value is not found, it returns -1.
// The lastIndexOf method is used to find the last index of a specified value in an array.

