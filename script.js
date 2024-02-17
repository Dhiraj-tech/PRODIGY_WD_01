document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar .all-links li");
  
    navLinks.forEach((link) => {
      link.addEventListener("mouseover", function () {
        this.style.color = "#ffcc00";
        this.style.textDecoration = "underline";
      });
  
      link.addEventListener("mouseout", function () {
        this.style.color = "";
        this.style.textDecoration = "";
      });
    });
  
    const headerFooterLinks = document.querySelectorAll("header a, footer a");
  
    headerFooterLinks.forEach((link) => {
      link.addEventListener("mouseover", function () {
        this.style.color = "#ffcc00";
        this.style.textDecoration = "underline";
      });
  
      link.addEventListener("mouseout", function () {
        this.style.color = "";
        this.style.textDecoration = "";
      });
    });
  });
  