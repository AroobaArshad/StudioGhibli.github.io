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

// Source code: YouTube tutorial video by Lun Dev
// Selecting necessary elements from the DOM
let items = document.querySelectorAll(".slider .list .item");
let back = document.getElementById("back");
let next = document.getElementById("next");
let slides = document.querySelectorAll(".slides .item");

// Getting the count of items and initializing active item index
let countItems = items.length;
let itemActive = 0;

// Event handler for the 'Next' button click
next.onclick = function() {
    // Incrementing the active item index and loop back to the beginning if reached the end
    itemActive = itemActive + 1;
    if(itemActive >= countItems){
        itemActive = 0;
    }

    // Calling the function to display the appropriate slider
    showSlider();
}

// Event handler for the 'Back' button click
back.onclick = function() {
    // Decrementing the active item index and loop back to the end if at the beginning
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItems -1;
    }

    // Calling the function to display the appropriate slider
    showSlider();
}

// Setting an interval to automatically trigger the 'Next' button click every 5 seconds
let interval = setInterval(() => {
    next.click();
}, 5000)

// Function to display the slider based on the active item index
function showSlider(){
    // Removing 'active' class from previously active elements
    let itemActivePrev = document.querySelector(".slider .list .item.active");
    let slidesActivePrev = document.querySelector(".slides .item.active");
    itemActivePrev.classList.remove("active");
    slidesActivePrev.classList.remove("active");

    // Adding 'active' class to the current active elements
    items[itemActive].classList.add("active");
    slides[itemActive].classList.add("active");
}

// Event listeners for individual slides to set the active item index and display the slider accordingly
slides.forEach((slide, index) => {
    slide.addEventListener("click", () => {
        itemActive = index;
        showSlider();
    });
});

// Registering ScrollTrigger plugin from GSAP
gsap.registerPlugin(ScrollTrigger);

// Applying animations to reveal individual characters within elements with class '.reveal-type'
const splitTypes = document.querySelectorAll(".reveal-type");
splitTypes.forEach((char, i) => {
    const text = new SplitType(char, { types: "chars" });

    // Animating characters using GSAP's ScrollTrigger
    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: char,
            // Triggering animation when element is 80% in view from the top
            start: 'top 80%',
            // Ending animation when element is 20% in view from the top
            end: 'top 20%',
            scrub: true, // Smooth scrubbing effect
            markers: false
        },

        y: 90,
        opacity: 0,
        // Staggering animation for each character
        stagger: 0.1
    });
});