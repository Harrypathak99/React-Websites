const mobileNav = document.querySelector(".nav__toggle");
const navbar = document.querySelector(".nav__wrapper");
// const any = document.querySelector("body");

const toggleNav = () => {
  navbar.classList.toggle("hidde");
};
// const toggleNav2 = () => {
//   navbar.classList.remove("hidden");
// };
if(mobileNav) {
mobileNav.addEventListener("click", () => toggleNav());
}
// any.addEventListener("click", () => toggleNav());
