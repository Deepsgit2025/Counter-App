const inc=document.getElementById("increase");
const res=document.getElementById("reset");
const dec=document.getElementById("decrease");
const lab=document.getElementById("mylabel");
let count=0;

dec.onclick=function(){  
    lab.textContent=count;
    count--;
}
inc.onclick=function(){  
    lab.textContent=count;
    count++;
}
res.onclick=function(){  
    lab.textContent=count;
    count=0;
}