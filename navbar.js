const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.querySelector(".nav-links");

    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuBtn.classList.toggle("rotate");
      // Toggle icon ☰ ↔ ✖
      menuBtn.innerHTML = navLinks.classList.contains("active") ? "&#10005;" : "&#9776;";
    });