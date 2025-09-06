const burger = document.getElementById("burger");
const burgerIcon = document.getElementById("burgerIcon");
const mobileMenu = document.getElementById("mobileMenu");

burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    // Toggle ikon antara burger dan close
    if (mobileMenu.classList.contains("hidden")) {
        burgerIcon.classList.remove("ri-close-line");
        burgerIcon.classList.add("ri-menu-line");
    } else {
        burgerIcon.classList.remove("ri-menu-line");
        burgerIcon.classList.add("ri-close-line");
    }
});