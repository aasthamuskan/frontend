//4 pillors iof DOM
// 1.selection of an Element


// 2.changing html'
// 3.changing css
// 4.event listner


// selection of an Element
//  var a=document.querySelector("h1")//here document means html
//  console.log(a)


//  //changing html
//  var b=document.querySelector("h1")
//  b.innerHTML="aastha muskan"//CASE IS important

//  //changing the css
//  var c=document.querySelector("h1")
//  c.style.color="pink"//follow camel case
//  c.style.backgroundColor="black"


//  //event listner
//  a.addEventListener("click",function(){//do property lagainge- pehla konsa event fir karna kya hai function likhna hai
//     a.innerHTML="badal gai mai"
//     a.style.color="yellow"
//     a.style.backgroundColor="brown"
//  })
//  //yeipiiii ho gaya
var b=document.querySelector("#bulb")
var a=document.querySelector("button")
var flag=0

a.addEventListener("click",function(){
    if(flag==0){
    b.style.backgroundColor="red"
    b.style.borderColor="green"
    console.log("clicked") 
    flag=1 }
    else{
        b.style.backgroundColor="yellow"
    b.style.borderColor="black"
    console.log("transparent") 
    flag=0
    }
})
var c=document.querySelectorAll("h1")
console.log(h)
h.forEach(function(e){
    console.log(e)
})
//getelementbyid
//getelementbytheclass
