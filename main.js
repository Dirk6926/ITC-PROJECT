window.addEventListener("scroll", function() {
  const nav = document.querySelector(".nav");

  if (window.scrollY > 30) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});