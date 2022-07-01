const btnMobile = document.querySelector('.mobile-menu');
const menuItem = document.querySelectorAll('.menu-item');

function toggleMenu() {
    const menuList = document.querySelector('.header-menu');
    menuList.classList.toggle('active');
}

menuItem.forEach((link) => {
    link.addEventListener('click', toggleMenu);
});
btnMobile.addEventListener('click', toggleMenu);

