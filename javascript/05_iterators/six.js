// const coding = ["javascript", "python", "java", "c++", "ruby"]; 
// const values=coding.forEach((item)=>{
//     console.log(item);

//     return item; // This return is not used by forEach

// })
// console.log(values); // Output: undefined, as forEach does not return anything



const mynum=[1,2,3,4,5,6,7,8,9,10];
const newnum=mynum.filter((item)=>item>4)
console.log(newnum); // Output: [5, 6, 7, 8, 9, 10]
// The filter method creates a new array with all elements that pass the test implemented by the provided function.



const books=[
    {title: 'book one',genre: 'fiction',published: 2010,edition: 1},
    {title: 'book two',genre: 'non-fiction',published: 2015,edition: 2},
    {title: 'book three',genre: 'fiction',published: 2020,edition: 3},
    {title: 'book four',genre: 'science',published: 2018,edition: 4},
    {title: 'book five',genre: 'history',published: 2012,edition: 5}

]

const userBooks=books.filter((book)=>book.genre==='fiction' && book.published > 2015)
// The filter method is used to create a new array with elements that meet the specified condition. 



console.log(userBooks); // Output: [{title: 'book one', genre: 'fiction', published: 2010, edition: 1}, {title: 'book three', genre: 'fiction', published: 2020, edition: 3}]