const toggles = document.querySelectorAll(".faq-toggle");
const icon = document.querySelector(".tog");
const expand = document.querySelector(".expand");
toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

expand.addEventListener("click", () => {
  toggles.forEach((toggle) => {
    toggle.parentNode.classList.toggle("active");
  });
});
