const navBtn= document.getElementsByClassName("nav-button");
const section= document.getElementsByTagName("section");
window.addEventListener('DOMContentLoaded',()=>{
    section[0].classList.add("show-section");
})
for(let i=0;i<navBtn.length;i++){
    navBtn[i].addEventListener('click',()=>{
        navToggle();
        navBtn[i].classList.add("nav-btn-color");
        section[i].classList.add("show-section");
        for(let j=0;j<navBtn.length;j++){
        if(section[j].classList.contains("show-section")&&(i!==j)){
            navBtn[j].classList.remove("nav-btn-color");
            section[j].classList.remove("show-section");
        }
    }
    })
}
const navBar= document.getElementById("navBar");
const burgerBtn=document.getElementById("burgerbtn");

burgerBtn.addEventListener('click',()=>{
    navToggle();
})
function navToggle(){
    navBar.classList.toggle("shownav");
    burgerBtn.classList.toggle("burgerclick");
}

