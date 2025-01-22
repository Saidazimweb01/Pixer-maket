let btn = document.querySelector(".header-burger-btn");
let navBar = document.querySelector(".header-navbar");
btn.addEventListener("click", function () {
    navBar.classList.toggle("navbar--open");
}); 