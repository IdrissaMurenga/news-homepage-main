const openIconMenu = document.querySelector(".menu-icon");
const body = document.querySelector(".body")
const display = document.querySelector(".display-list")
const closeIconMenu = document.querySelector(".close-menu")
// EVENT
openIconMenu.addEventListener("click",()=>{
    display.classList.remove("display-list")
    body.style.position = "fixed"
})

closeIconMenu.addEventListener("click",()=>{
    display.classList.add("display-list")
    body.style.position = "relative"
})
