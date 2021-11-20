/* let stats = document.getElementById("menu-statistics")
let food = document.getElementById("menu-food")

function showFood() {
    stats.style.display = "none"
    food.style.display = "block"
}

function showStats() {
    stats.style.display = "block"
    food.style.display = "none"
} */


function showEdit() {
    let popup = document.getElementsByClassName("edit-food");
    popup.classList.toggle("show");
  }