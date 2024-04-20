// todo: preloader
// this is how i add preloader to my website and control the disappear time of the preloader
const preloader = document.querySelector("[data-preloader");

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.classList.add("remove");
  }, 100); // delay of 300ms
});

// navbar toggler for mobile view
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
const navLinks = document.querySelectorAll(".navbar-link");

navTogglers.forEach((navToggler) => {
  navToggler.addEventListener("click", () => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
    console.log("clicked");
  });
});

navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
        navbar.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("nav-active");
    });
    });

// header
const header = document.querySelector("[data-header]");
const headerHeight = header.clientHeight;

window.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
