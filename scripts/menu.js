// hamburger menu
const menu = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

menu.addEventListener("click", () => {
    nav.classList.toggle("open");
    menu.classList.toggle("open");
});