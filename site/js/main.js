
function menu_open(){
    menu = document.querySelector(".sidebar")
    menu.classList.toggle("active")
    console.log("haskdj")
}

s = document.querySelector(".menu")
s.addEventListener("click", menu_open)
