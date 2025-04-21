document.write("hello")
// var h=document.createElement("h2")
const h=document.getElementById("heading1")
const txt =h.getAttribute("id")
Document.write(h.textContent+"<br>");
document.write(h.innerText+"<br>")
document.write(h.innerHTML+"<br>")

h.innerHTML="My Custom Heding";
h.style.color="purple";
h.style.textDecoration="underline";
h.setAttribute("class","heading")
document.write(h.getAttribute("class"));
document.getElementsByTagName("p");//return collection of objects
const paras=document.getElementsByTagName("p");
document.write("<br>total paragraph: "+paras.length);
paras[1].style.color="red";
const d1=document.getElementsByClassName("container");
documen.write("<br>"+d1.length);
d2=document.querySelector(".container");
document.write("<br>"+d2)
p1=d2.querySelector("p");
document.write("<br>"+p1.innerHTML);