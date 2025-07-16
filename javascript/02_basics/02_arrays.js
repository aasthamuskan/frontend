const marvelheros=["thor","hulk","ironman","spiderman","captain america","black widow","hawkeye"];
const dcheros=["superman","batman","flash"]
marvelheros.push(dcheros); // adds dcheros array as a single element
console.log(marvelheros[3][1]); // "batman" (accessing nested array element)
 const allhero=marvelheros.conceat(dcheros); // concatenates dcheros to marvelheros
console.log(marvelheros); // ["thor", "hulk", "ironman", "spiderman", "captain america", "black widow", "hawkeye", ["superman", "batman", "flash"]]


// ... =spread operator
const allheros=[...marvelheros,...dcheros]; // spreads elements of both arrays into a new array
console.log(allheros); // ["thor", "hulk", "ironman", "spiderman", "captain america", "black widow", "hawkeye", "superman", "batman",   "flash"]

const another_array=[1,3,4,[1,3,5],4,5,[6,7,[1,2,3]]];
console.log(another_array.flat(Infinity)); // [1, 3, 4, 1, 3, 5, 4, 5, 6, 7, 1, 2, 3] (flattens nested arrays to a single level)

console.log(Array.isArray("hitesh"))// false (checks if it's an array)
console.log(Array.from("hitesh")) // ["h", "i", "t", "e", "s", "h"] (converts string to an array of characters )

console.log(Array.from({name: "aastha"}))//intresting output: [ 'name' ] (converts object keys to an array)
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1, score2, score3)); // [100, 200, 300] (creates an array from the arguments)
console.log(Array.of(1, 2, 3, 4, 5)); // [1, 2, 3, 4, 5] (creates an array from the arguments)
