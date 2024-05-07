const box_2El = document.querySelector(".box_2");
const box_3El = document.querySelector(".box_3");
const box_4El = document.querySelector(".box_4");
const box_5El = document.querySelector(".box_5");

box_2El.addEventListener("click", () => {
    box_2El.style.background = "#6c6c6c"
    box_2El.style.width = "340px"
    box_2El.style.zindex = "1"
    box_3El.style.background = "#d8d8d8"
    box_3El.style.width = "300px"

    box_4El.style.background = "#d8d8d8"
    box_4El.style.width = "300px"

    box_5El.style.background = "#d8d8d8"
    box_5El.style.width = "300px"

});
box_3El.addEventListener("click", () => {
    box_3El.style.background = "#6c6c6c"
    box_3El.style.width = "340px"

    box_2El.style.background = "#d8d8d8"
    box_2El.style.width = "300px"

    box_4El.style.background = "#d8d8d8"
    box_4El.style.width = "300px"

    box_5El.style.background = "#d8d8d8"
    box_5El.style.width = "300px"


});
box_4El.addEventListener("click", () => {
    box_3El.style.background = "#d8d8d8"
    box_3El.style.width = "300px"

    box_2El.style.background = "#d8d8d8"
    box_2El.style.width = "300px"

    box_4El.style.background = "#6c6c6c"
    box_4El.style.width = "340px"

    box_5El.style.background = "#d8d8d8"
    box_5El.style.width = "300px"


});
box_5El.addEventListener("click", () => {
    box_3El.style.background = "#d8d8d8"
    box_3El.style.width = "300px"

    box_2El.style.background = "#d8d8d8"
    box_2El.style.width = "300px"

    box_4El.style.background = "#d8d8d8"
    box_4El.style.width = "300px"

    box_5El.style.background = "#6c6c6c"
    box_5El.style.width = "340px"


});