var carousel = document.querySelectorAll(".banniere__image");
//var image = document.querySelector(".banniere__image");

const leftSlide = document.querySelector(".left-slide");
const nextSlide = document.querySelector(".right-slide");

var totalslide = carousel.length;


let index = 0;


function reset () {
    for (let  i = 0; i< carousel.length;i++){
        carousel[i].style.display ="none";
    }
}
function startSlide () {
    reset();
    carousel[0].style.display ="block";
}
function  left() {
    reset();
    carousel[index - 1].style.display ="block";
    index --;
} 
function  right() {
    reset();
    carousel[index + 1].style.display ="block";
    index ++;
} 

leftSlide.addEventListener('click',function(){
    if(index ===0) {
        index = carousel.length;
    }
    left();
});
nextSlide.addEventListener('click',function(){
    if(index === carousel.length - 1) {
        index = -1  
    }
    right();
});

startSlide();
