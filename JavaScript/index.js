// Basic setup for the lenis smooth scrolling library
// Comes directly from their documentation
const lenis = new Lenis()

lenis.on('scroll', (e) => {
console.log(e)
})

function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

document.addEventListener("DOMContentLoaded", function() {
    // Initially hiding the side panel
    document.querySelector(".hero").classList.remove("side-panel-open");

    // Toggle side panel and icon
    document.querySelector(".side-panel-toggle").addEventListener("click", function() {
        const hero = document.querySelector(".hero");
        hero.classList.toggle("side-panel-open");

        // Toggle between close/open icons
        const openIcon = document.querySelector(".sp-icon-open");
        const closeIcon = document.querySelector(".sp-icon-close");
        openIcon.style.display = hero.classList.contains("side-panel-open") ? "none" : "initial";
        closeIcon.style.display = hero.classList.contains("side-panel-open") ? "initial" : "none";
    });
});