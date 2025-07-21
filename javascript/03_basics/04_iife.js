//immediately invoked function expression

(function chai(){//named iife
    console.log('DB CONNEDCTED');
})();
// mostly we get polluted by global sourse variables thats why iife is introduced 
/*
IIFE stands for Immediately Invoked Function Expression.
It is a JavaScript function that runs as soon as it is defined.
IIFEs help avoid polluting the global scope by encapsulating variables and logic.
Syntax:
(function() {
    // code here
})();
*/