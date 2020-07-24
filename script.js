const display1 = document.getElementById('display1');
const display2 = document.getElementById('display2');


const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');

const sections = document.getElementsByClassName('sections');


function show(display,section){
    display.addEventListener("click",function(){
        for(let i = 0; i < sections.length; i++){
            sections[i].classList.add('off');
        }
        section.classList.remove("off");
    });
};


show(display1,section1);
show(display2,section2);
show(display3,section3);