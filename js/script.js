document.addEventListener("DOMContentLoaded", () => {
    const heroText = document.querySelector(".hero h1");
    const heroSubText = document.querySelector(".hero h2 span");
    const bioText = document.querySelector(".bio p");
    const links = document.querySelectorAll("footer a");

    // Fade in effect for Hero Text
    heroText.style.opacity = "0";
    heroText.style.transform = "translateY(20px)";
    setTimeout(() => {
        heroText.style.transition = "all 1s ease";
        heroText.style.opacity = "1";
        heroText.style.transform = "translateY(0)";
    }, 500);

    // Fade in effect for SubText
    heroSubText.style.opacity = "0";
    heroSubText.style.transform = "translateY(20px)";
    setTimeout(() => {
        heroSubText.style.transition = "all 1s ease";
        heroSubText.style.opacity = "1";
        heroSubText.style.transform = "translateY(0)";
    }, 800);

    // Fade in effect for Bio
    bioText.style.opacity = "0";
    setTimeout(() => {
        bioText.style.transition = "all 1.2s ease";
        bioText.style.opacity = "1";
    }, 1200);

    // Hover Animation for Footer Links
    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transition = "color 0.3s ease";
            link.style.color = "gray";
        });

        link.addEventListener("mouseleave", () => {
            link.style.color = "black";
        });
    });
});