const btn1=document.getElementById("btn1")
btn1.addEventListener("click",function(){
    document.body.style.backgroundColor="Blue"
})

const btn2=document.getElementById("btn2")
btn2.addEventListener("click",myfunction=()=>{
    document.body.style.backgroundColor="Black"
    document.getElementById("head").style.color="white"
    document.getElementById("head1").style.color="white"
})

const btn3=document.getElementById("btn3");
btn3.addEventListener("click",function(){
    document.body.style.backgroundColor="green"
})

const btn4=document.getElementById("btn4");
btn4.addEventListener("click",function(){
    document.body.style.backgroundColor="red"
})

const btn5= document.getElementById("btn5")
btn5.addEventListener("click",function(){
    document.body.style.backgroundColor="white"
    document.getElementById("head").style.color="Black"
    document.getElementById("head1").style.color="Black"
})