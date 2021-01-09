let hamburger = document.querySelector(".hamburger");
let close = document.querySelector(".close");
let ul = document.querySelector("nav ul");
let gradiant = document.querySelector(".gradiant");

hamburger.addEventListener("click", () => {
  hamburger.style.display = "none";
  close.style.display = "inline-block";
  ul.style.display = "inline-block";
  gradiant.style.display = "inline-block";
});

close.addEventListener("click", () => {
  close.style.display = "none";
  hamburger.style.display = "inline-block";
  ul.style.display = "none";
  gradiant.style.display = "none";
});
