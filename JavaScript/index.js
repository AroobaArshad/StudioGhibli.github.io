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
    // Displaying the side panel initially with the close arrow button
    const hero = document.querySelector(".hero");
    hero.classList.add("side-panel-open");

    // Functionality to toggle the side panel
    document.querySelector(".side-panel-toggle").addEventListener("click", function() {
        hero.classList.toggle("side-panel-open");

        // Functionality to toggle between open and close icons
        const openIcon = document.querySelector(".sp-icon-open");
        const closeIcon = document.querySelector(".sp-icon-close");

        // Setting display property for the open and close icons based on the side panel state
        openIcon.style.display = hero.classList.contains("side-panel-open") ? "none" : "initial";
        closeIcon.style.display = hero.classList.contains("side-panel-open") ? "initial" : "none";
    });
});