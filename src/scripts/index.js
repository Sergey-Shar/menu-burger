const menuButton = document.querySelector('.menu-toggle')

const toggleMenuButton = () => menuButton.classList.toggle('active')

menuButton.addEventListener("click",toggleMenuButton)