const menuButton = document.querySelector(".menu-toggle");
const menuBox = document.querySelector(".header__menu-box")

const toggleMenuButton = () => {
    menuButton.classList.toggle("active")
    menuBox.classList.toggle("active")
};

menuButton.addEventListener("click", toggleMenuButton);
