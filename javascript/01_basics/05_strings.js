const name="aastha"
const repocount=10;
console.log(name + repocount+"value"); // aastha10value //not prefereble in todays world
console.log(` hello my name is ${name}  and the value ${repocount} value`); // aastha 10 value //template literals

const gamename=new String("cricket");
console.log(gamename[0 ]);   // [String: 'cricket'] //object
console.log(gamename.__proto__); // String {}
console.log(gamename.length); // 7
console.log(gamename.toUpperCase()); // CRICKET
console.log(gamename.charAt(0)); // c
console.log(gamename.indexOf("c")); // 0
console.log(gamename.lastIndexOf("c")); // 0
console.log(gamename.includes("c")); // true
console.log(gamename.startsWith("c")); // true
console.log(gamename.endsWith("t")); // true
console.log(gamename.slice(0, 3)); // cri
console.log(gamename.substring(0, 3)); // cri
console.log(gamename.split("c")); // [ '', 'ricket' ]
console.log(gamename.replace("c", "C")); // Cricket
console.log(gamename.trim()); // cricket
console.log(gamename.trimStart()); // cricket
console.log(gamename.trimEnd()); // cricket
console.log(gamename.valueOf()); // 'cricket'
console.log(gamename.toString()); // 'cricket'  
console.log(gamename.charCodeAt(0)); // 99 (ASCII value of 'c')
console.log(gamename.localeCompare("cricket")); // 0 (same string)
console.log(gamename.localeCompare("football")); // -1 (cricket comes before football)
console.log(gamename.localeCompare("basketball")); // 1 (cricket comes after basketball)
console.log(gamename.match(/c/)); // [ 'c', index: 0, input: 'cricket', groups: undefined ]
console.log(gamename.search(/c/)); // 0 (index of first occurrence of 'c')
console.log(gamename.repeat(2)); // cricketcricket
console.log(gamename.padStart(10, "x")); // xxxxxcricket
console.log(gamename.padEnd(10, "x")); // cricketxxxx
console.log(gamename.toLocaleLowerCase()); // cricket
console.log(gamename.toLocaleUpperCase()); // CRICKET
console.log(gamename.anchor("anchorName")); // <a name="anchorName">cricket</a>
console.log(gamename.big()); // <big>cricket</big>

// convert string to Array
const strArray = gamename.split("");
console.log(strArray); // [ 'c', 'r', 'i', 'c', 'k', 'e', 't' ]
console.log(strArray.join("-")); // c-r-i-c-k-e-t
console.log(gamename.concat(" is a great game.")); // cricket is a great game.
console.log(gamename.startsWith("cr")); // true
console.log(gamename.endsWith("et")); // true
console.log(gamename.localeCompare("cricket")); // 0 (same string)
console.log(gamename.localeCompare("football")); // -1 (cricket comes before football)
console.log(gamename.localeCompare("basketball")); // 1 (cricket comes after









const url="https://www.example.com/path/to/resource?query=string#fragment";
console.log(url.replace('=', '-')); // https://www.example.com/path/to/resource?query-string#fragment
