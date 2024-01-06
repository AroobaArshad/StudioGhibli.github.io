console.clear();

ScrollOut({
cssProps: {
    visibleY: true,
    viewportY: true
}
});

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