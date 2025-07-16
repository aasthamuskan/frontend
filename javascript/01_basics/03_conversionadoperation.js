let score=null
console.log(typeof score); //number
console.log(typeof(score)); //string
let valueinnumber=Number(score);
console.log(typeof valueinnumber); //number
console.log(valueinnumber); //33
//"33"=>33
//"33abc"=>NaN
//true=>1
//false=>0
let isloggedIn="";//false
let booleanNumber=boolean(isloggedIn);
//1=true 0=false
//""=false
//"aastha"=true
let somenumber=33
let stringnumber =String(somenumber);
console.log(typeof stringnumber); //string
console.log(stringnumber); //33












//**************************operations ************************ */
let a=10;
let negvalue=-a;
console.log(negvalue); //-10
console.log(2+2);
console.log(2-2); //0'
console.log(2*2); //4
console.log(2/2); //1
console.log(2**3); //8
console.log(2%3); //2
console.log(2%2); //0
console.log(2%1); //0
console.log(2%0); //Infinity
console.log(2%NaN); //NaN
console.log(2%undefined); //NaN
console.log(2%null); //0
console.log(2%true); //0
console.log(2%false); //0
console.log(2%"aastha"); //NaN

console.log(2 + "aastha"); //2aastha
console.log("aastha" + 2); //aastha2
  

let str="aastha";
let str2="muskan";
console.log(str + str2); //aasthamuskans
console.log("1"+2+2); //122
console.log(1+2+"3")// 33
console.log(1+2+3); //6


console.log(+true); //1
console.log(+false); //0
// console.log(true+)//error
console.log(+"aastha"); //NaN
//prefix operator                                   
console.log(++x); //12  


//postfix operator
let x=10;       
console.log(x++); //10
console.log(x); //11


//COMPARISON OPERATORS
console.log(2==2); //true
console.log(2=="2"); //true
console.log(2==="2"); //false
console.log(1>2); //false
console.log(1<2); //true
console.log("2">1); //true
console.log("2">"1"); //true
console.log(null >0); //false
console.log(null <0); //false
console.log(null ==0); //false
console.log(null ==null); //true
console.log(null ===null); //true
console.log(undefined ==null); //true
console.log(undefined ===null); //false
console.log(undefined ==undefined); //true
console.log(undefined == 0); //true
console.log(undefined === 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false
console.log(undefined >= 0); //false
