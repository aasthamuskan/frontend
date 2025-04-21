const container=document.querySelector('.container');
const output=document.querySelector('#output');
// output.innerHTML=container
// output.innerHTML=container.children[3].innerHTML;

//Ways to append text 
let s=' in hindi';
//way1
// for(e of container.children){//of wala loop
//     e.innerHTML+=s;

// }
//way2
// for(i in container.children){
//     container.children[i].innerHTML+=' in hindi';
// }

//way3
// for(i=0;i<container.children.length;i++){
//     container.children[i].innerHTML+=' in hindi'
// }

// console.log(container.firstElementChild.innerHTML)
// console.log(container.lastElementChild.innerHTML)

// console.log(container.parentElement.childElementCount)
//how to create nodes
const dl=document.createElement('div');
dl.innerHTML="javascript";
dl.classname="courses";
dl.setAttribute('id','js');
container.appendChild(dl);
