const display1 = document.getElementById("display1");
const display2 = document.getElementById("display2");
const display3 = document.getElementById("display3");

const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");

const sections = document.getElementsByClassName("sections");

const moreInfoBtn = document.getElementsByClassName("more");
const infosHidden = document.getElementsByClassName("hide-infos");

const main = document.querySelector('main');

const modalDiv = document.getElementById("modal");
const imgModal = document.getElementById("img_modal");
const textModal = document.getElementById("text_modal");
const closeModal = document.getElementById("close");
modalDiv.classList.add("displayNone");

let allImg = [];
allImg = document.querySelectorAll("img");

let allsrcImages = [];

for (let k = 0; k < allImg.length; k++) {
  allsrcImages.push(allImg[k].src);
}
allsrcImages.shift(); // supprime la src de la liste des images car pas une src utilisable reste uniquement les bonnes images


function show(display, section) {
  display.addEventListener("click", function () {
    for (let i = 0; i < sections.length; i++) {
      sections[i].classList.add("off");
      sections[i].classList.add('on');
    }
    section.classList.remove("off");
    
  });
}



for (let i = 0; i < moreInfoBtn.length; i++) {
  infosHidden[i].classList.add("displayNone");


  moreInfoBtn[i].addEventListener("click", function () {
    modalDiv.classList.remove("displayNone");
    modalDiv.classList.add("modalDisplay");
    for (let j = 0; j < infosHidden.length; j++) {
      textModal.innerHTML = infosHidden[i].textContent;
      imgModal.src = allsrcImages[i];
      main.classList.add('filterMain');
    }
  });
}

closeModal.addEventListener("click", function () {
    modalDiv.classList.add("displayNone");
    main.classList.remove('filterMain');
  });

show(display1, section1);
show(display2, section2);
show(display3, section3);
