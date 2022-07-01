const btnMobile = document.querySelector(".btn");
const menuItem = document.querySelectorAll(".menu-item");

function toggleMenu(event) {
  if (event.type === "touchstart") {
    event.preventDefault();
  }
  const menuList = document.querySelector(".header-menu");
  menuList.classList.toggle("active");
  const active = menuList.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir menu");
  }
}

menuItem.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
