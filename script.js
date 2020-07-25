const display1 = document.getElementById("display1");
const display2 = document.getElementById("display2");

const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");

const sections = document.getElementsByClassName("sections");

const pick = document.getElementById("pick");

const moreInfoBtn = document.getElementsByClassName("more");
const infosHidden = document.getElementsByClassName("hide-infos");

function show(display, section) {
  display.addEventListener("click", function () {
    for (let i = 0; i < sections.length; i++) {
      sections[i].classList.add("off");
    }
    section.classList.remove("off");
    pick.style.display = "none";
  });
}

for (let i = 0; i < moreInfoBtn.length; i++) {
  for (let j = 0; j < infosHidden.length; j++) {
    moreInfoBtn[i].addEventListener("click", function () {

      if ((infosHidden[i].style.display = "none")) {
        infosHidden[i].style.display = "block";
      } else if ((infosHidden[i].style.display = "block")) {
        infosHidden[i].style.display = "none";
      }
      
    });
  }
}

show(display1, section1);
show(display2, section2);
