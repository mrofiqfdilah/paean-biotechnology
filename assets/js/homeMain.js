// ========================================================
//  MOBILE NAVIGATION  –  BURGER / CLOSE ICON TOGGLE
// ========================================================

// Cache DOM references once for performance.
// Using explicit names keeps intent clear in large codebases.
const burgerButton = document.getElementById("burger");
const burgerIcon = document.getElementById("burgerIcon");
const mobileMenu = document.getElementById("mobileMenu");

// Handle burger button click.
// Toggling a single utility class keeps re-render cost low
// and leverages Tailwind's "hidden" for display control.
burgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    // Update the icon to reflect the new menu state.
    // We avoid re-rendering the DOM; only classes change.
    const menuIsHidden = mobileMenu.classList.contains("hidden");
    burgerIcon.classList.toggle("ri-menu-line", menuIsHidden);
    burgerIcon.classList.toggle("ri-close-line", !menuIsHidden);
});


// ========================================================
//  DROPDOWN MENU  –  ACCESSIBLE TOGGLE WITH ANIMATION
// ========================================================

// DOM references for the dropdown system.
const dropdownToggle = document.getElementById("dropdownToggle");
const dropdownMenu = document.getElementById("dropdownMenu");
const dropdownIcon = document.getElementById("dropdownIcon");

// Keep animation duration in sync with the CSS transition.
// Centralizing the value avoids "magic numbers".
const ANIMATION_MS = 300;

/**
 * Opens the dropdown with a smooth transition.
 * We remove "pointer-events-none" so the menu becomes interactive
 * and apply utility classes for opacity/scale animation.
 */
function openDropdown() {
    dropdownMenu.classList.remove("pointer-events-none", "opacity-0", "scale-95");
    dropdownMenu.classList.add("flex", "opacity-100", "scale-100");
    dropdownIcon.classList.add("rotate-180");
}

/**
 * Closes the dropdown while preserving the exit animation.
 * Pointer events are disabled *after* the animation completes
 * to avoid abrupt clicks during the transition.
 */
function closeDropdown() {
    dropdownMenu.classList.add("opacity-0", "scale-95");
    dropdownMenu.classList.remove("opacity-100", "scale-100");
    dropdownIcon.classList.remove("rotate-180");

    setTimeout(() => {
        dropdownMenu.classList.remove("flex");
        dropdownMenu.classList.add("pointer-events-none");
    }, ANIMATION_MS);
}

// Toggle dropdown on button click.
// Prevent default stops a <button> or <a> from submitting or navigating.
dropdownToggle.addEventListener("click", (e) => {
    e.preventDefault();
    const isClosed = dropdownMenu.classList.contains("pointer-events-none");
    isClosed ? openDropdown() : closeDropdown();
});

// Close dropdown when clicking anywhere outside.
// Using "contains" ensures clicks on nested children are ignored.
document.addEventListener("click", (e) => {
    const clickedInside =
        dropdownToggle.contains(e.target) || dropdownMenu.contains(e.target);

    if (!clickedInside && !dropdownMenu.classList.contains("pointer-events-none")) {
        closeDropdown();
    }
});
