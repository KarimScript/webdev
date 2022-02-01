let section=document.querySelector("#our-skills");
let spans=document.querySelectorAll(".progress span");

let stats=document.querySelector(".stats");
let numbers=document.querySelectorAll(".box .number");
let started=false;
function startCount(el){
  let goal=el.dataset.goal;
  let count=setInterval(function(){
    el.textContent++;
    if(el.textContent==goal){
        clearInterval(count);
    }
  },2000/goal);
};

window.onscroll=function(){
    if(window.scrollY >= section.offsetTop){
        spans.forEach((span) => {
            span.style.width=span.dataset.width;
        });
    }

    if(window.scrollY >=stats.offsetTop){
        if(!started){
            numbers.forEach((num)=>startCount(num));
        }
        started=true;
        
    }
};



