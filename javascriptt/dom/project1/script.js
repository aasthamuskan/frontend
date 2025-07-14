var isst=document.querySelector("h5")
var addf=document.querySelector("#add")
var flag=0;
addf.addEventListener("click",function(){
    if(flag==0){
    isst.innerHTML="mitra bann gai hamare"
    isst.style.color="blue"
    flag=1
}else{
    isst.innerHTML="palan hare"
    isst.style.color="pink"
    flag=0
}

})

