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


const toggle = document.getElementById("dropdownToggle");
const menu = document.getElementById("dropdownMenu");
const icon = document.getElementById("dropdownIcon");

toggle.addEventListener("click", function (e) {
    e.preventDefault();

    if (menu.classList.contains("pointer-events-none")) {
        // buka dropdown
        menu.classList.remove("pointer-events-none");
        menu.classList.add("flex", "opacity-100", "scale-100");
        menu.classList.remove("opacity-0", "scale-95");
        icon.classList.add("rotate-180");
    } else {
        // tutup dropdown dengan animasi
        menu.classList.add("opacity-0", "scale-95");
        menu.classList.remove("opacity-100", "scale-100");
        icon.classList.remove("rotate-180");
        // tunggu animasi selesai, baru disable pointer
        setTimeout(() => {
            menu.classList.remove("flex");
            menu.classList.add("pointer-events-none");
        }, 300); // durasi harus sama dengan transition
    }
});

// Klik di luar → tutup
document.addEventListener("click", function (e) {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.add("opacity-0", "scale-95");
        menu.classList.remove("opacity-100", "scale-100");
        icon.classList.remove("rotate-180");
        setTimeout(() => {
            menu.classList.remove("flex");
            menu.classList.add("pointer-events-none");
        }, 300);
    }
});

