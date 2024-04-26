const toggleButton = document.getElementById("header-toggle");
const closeButton = document.getElementById("header-close");
const sidebar = document.getElementById("sidebar");

toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

closeButton.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

// COurse Detils Accordian styleing

document.addEventListener("DOMContentLoaded", function () {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
});
