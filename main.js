// scroll navbar style

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// show/hide skills

const skills = document.querySelectorAll(".skill");
skills.forEach((skill) => {
  skill.addEventListener("click", () => {
    skill.classList.toggle("open");

    // change icon
    const icon = skill.querySelector(".skill_icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

// show/hide nav menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

// close nav menu
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeNav);

// typing animation script
var typed = new Typed(".typing", {
  strings: ["Dancer", "Developer", "Friendly", "Cute", "Humble"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
