var elSection1 = document.querySelector("[data-d-none-1]");
var elSection2 = document.querySelector("[data-d-none-2]");
var elSection3 = document.querySelector("[data-d-none-3]");
var elSection4 = document.querySelector("[data-d-none-4]");
var elSection5 = document.querySelector("[data-d-none-5]");

var elText1 = document.querySelector("[data-text-1]");
var elText2 = document.querySelector("[data-text-2]");
var elText3 = document.querySelector("[data-text-3]");
var elText4 = document.querySelector("[data-text-4]");
var elText5 = document.querySelector("[data-text-5]");

toggle(elSection1, elText1);
toggle(elSection2, elText2);
toggle(elSection3, elText3);
toggle(elSection4, elText4);
toggle(elSection5, elText5);

function toggle(section, text) {
  text.addEventListener("click", function (evt) {
    section.classList.toggle("visually-hidden");
  });
}
