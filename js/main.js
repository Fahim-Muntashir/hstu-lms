const toggleButton = document.getElementById("header-toggle");
const closeButton = document.getElementById("header-close");
const sidebar = document.getElementById("sidebar");

toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

closeButton.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
