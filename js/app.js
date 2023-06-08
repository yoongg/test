const no=document.querySelectorAll(".classNo>li");
const img=document.querySelector(".img_wrap");
let div=document.querySelectorAll(".input")
let time=document.querySelectorAll(".time")
let now=new Date()
let day=now.getDay();
let month=now.getMonth();
let date=now.getDate();
let arr=["월","화","수","목","금","토","일"]
div.forEach(element=>{
    element.textContent=`${month}/${date}(${day})`
})


no.forEach(element => {
    element.addEventListener("click",()=>{
        let idx=element.className;
        img.scrollTo(0,idx*600)
    })
});