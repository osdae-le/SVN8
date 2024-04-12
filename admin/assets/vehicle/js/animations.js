var member1=document.getElementById('member-1');
console.log(member1);
var member2=document.getElementById('member-2');
var member3=document.getElementById('member-3');
var member4=document.getElementById('member-4');
window. addEventListener("scroll", ()=> {
    member1.classList.toggle("slide-in-bottom", window.scrollY> (0.4*window.innerHeight+100));
})
window. addEventListener("scroll", ()=> {
    member2.classList.toggle("slide-in-bottom", window.scrollY> (0.7*window.innerHeight+300));
})
window. addEventListener("scroll", ()=> {
    member3.classList.toggle("slide-in-bottom", window.scrollY> (1.5*window.innerHeight+500));
})
window. addEventListener("scroll", ()=> {
    member4.classList.toggle("slide-in-bottom", window.scrollY> (1.9*window.innerHeight)+700);
})
