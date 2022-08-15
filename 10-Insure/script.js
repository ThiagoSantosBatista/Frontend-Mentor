const menu = document.querySelector("#mobile-menu");
const navItem = document.querySelectorAll(".nav-header__item");
function toggleMenu(event) {
  if (event.type === "touchstart") {
    event.preventDefault();
  }
  const body = document.querySelector("body");
  body.classList.toggle("ativo");

  const ativo = body.classList.contains("ativo");
  event.currentTarget.setAttribute("aria-expanded", ativo);
  if (ativo) {
    event.currentTarget.setAttribute("aria-label", "Fechar menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir menu");
  }
}

navItem.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});

menu.addEventListener("click", toggleMenu);
menu.addEventListener("touchstart", toggleMenu);
window.addEventListener("scroll", () => {
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
