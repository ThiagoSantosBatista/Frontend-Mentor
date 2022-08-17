const menu = document.querySelector("#mobile-menu");
const navItem = document.querySelectorAll(".nav-header__item");
const data = document.querySelectorAll("[data-aos]");
const body = document.querySelector("body");
body.classList.add("js");
if (body.classList.contains("js")) {
  function toggleMenu(event) {
    if (event.type === "touchstart") {
      event.preventDefault();
    }
    body.classList.toggle("ativo");

    const ativo = body.classList.contains("ativo");
    event.currentTarget.setAttribute("aria-expanded", ativo);
    if (ativo) {
      event.currentTarget.setAttribute("aria-label", "Fechar menu");
    } else {
      event.currentTarget.setAttribute("aria-label", "Abrir menu");
    }
  }

  function animar() {
    const windowTop = window.pageYOffset + window.innerHeight * 0.75;
    data.forEach((element) => {
      if (windowTop > element.offsetTop) {
        element.classList.add("animacao");
      } else {
        element.classList.remove("animacao");
      }
    });
  }

  animar();

  navItem.forEach((link) => {
    link.addEventListener("click", toggleMenu);
  });

  menu.addEventListener("click", toggleMenu);
  menu.addEventListener("touchstart", toggleMenu);

  window.addEventListener("scroll", () => {
    animar();
    let header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
}
