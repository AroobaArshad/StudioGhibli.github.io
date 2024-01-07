// Clearing the console to ensure a clean workspace
console.clear();

// Initializing ScrollOut library with specific CSS properties tracked
ScrollOut({
cssProps: {
    visibleY: true,
    viewportY: true
}
});

// Applying the Splitting.js library to the target element with class '.main-heading'
Splitting({ target: '.main-heading' });

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