const mynumbers=[1,2,3,4,5,6,7,8,9,10];
// mynumbers.map((item)=>num+10)
// console.log(mynumbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//chaining methods
const newnums=mybumbers
                .map((item)=>item+10)// Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
                .map((item)=>item*2)// Output: [22, 24, 26, 28, 30, 32, 34, 36, 38, 40]
                .reduce((accumulator,currentValue)=>accumulator+currentValue,0);


console.log(newnums); // Output: 300    