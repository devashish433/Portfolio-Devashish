document.addEventListener("DOMContentLoaded", function () {
    // Navbar scroll effect
    const header = document.querySelector(".navbarScroll");
    window.addEventListener("scroll", function () {
        if (window.scrollY >= 100) {
            header.classList.add("navbarDark");
        } else {
            header.classList.remove("navbarDark");
        }
    });

    // Collapse navbar after click on small devices
    const navLinks = document.querySelectorAll(".nav-item");
    const menuToggle = document.getElementById("navbarSupportedContent");
    navLinks.forEach((l) => {
        l.addEventListener("click", () => { new bootstrap.Collapse(menuToggle).toggle(); });
    });

    // Typing effect in hero section
    let text = "I am a C++ Developer, looking for Development Opportunities";
    let index = 0;
    function typeEffect() {
        if (index < text.length) {
            document.querySelector(".hero_desc").textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    document.querySelector(".hero_desc").textContent = ""; // Clear previous text
    setTimeout(typeEffect, 500); // Delay to start

    // Hover effect on portfolio cards
    let portfolioCards = document.querySelectorAll(".portfolioContent");
    portfolioCards.forEach(card => {
        card.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "0.3s ease-in-out";
        });
        card.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Dark mode toggle
    let darkModeBtn = document.createElement("button");
    darkModeBtn.textContent = "Toggle Dark Mode";
    darkModeBtn.classList.add("btn", "btn-dark");
    darkModeBtn.style.position = "fixed";
    darkModeBtn.style.bottom = "20px";
    darkModeBtn.style.right = "20px";
    document.body.appendChild(darkModeBtn);

    darkModeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
    });

    // Persist Dark Mode
    if (localStorage.getItem("dark-mode") === "true") {
        document.body.classList.add("dark-mode");
    }

    // Dark mode CSS injection
    let darkModeStyle = document.createElement("style");
    darkModeStyle.innerHTML = `
        .dark-mode {
            background-color: #121212;
            color: white;
        }
        .dark-mode .navbarScroll.navbarDark {
            background-color: #333;
        }
        .dark-mode .card {
            background-color: #222;
            color: white;
        }
        .dark-mode .hero-text {
            color: #ffcc00;
        }
    `;
    document.head.appendChild(darkModeStyle);
});
