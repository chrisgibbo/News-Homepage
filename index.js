const openMenuBtn = document.querySelector(".menu-open")
const mobileMenu = document.querySelector(".mobile-menu")
const closeMenuBtn = document.querySelector(".mobile-close")
const backGround = document.querySelector(".background")

openMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden")
    document.querySelector(".background").style.opacity = "0.4";
})

closeMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden")
    document.querySelector(".background").style.opacity = "1";
})


// document.querySelector(".mobile-menu").style.opacity = "1";
// document.querySelector(".background").style.opacity = "0.3";

// document.querySelector(".background").style.opacity = "1";
