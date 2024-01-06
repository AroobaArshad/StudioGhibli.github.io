let items = document.querySelectorAll(".slider .list .item");
let back = document.getElementById("back");
let next = document.getElementById("next");
let slides = document.querySelectorAll(".slides .item");

let countItems = items.length;
let itemActive = 0;

next.onclick = function() {
    itemActive = itemActive + 1;
    if(itemActive >= countItems){
        itemActive = 0;
    }
    showSlider();
}

back.onclick = function() {
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItems -1;
    }
    showSlider();
}

let interval = setInterval(() => {
    next.click();
}, 5000)

function showSlider(){
    let itemActivePrev = document.querySelector(".slider .list .item.active");
    let slidesActivePrev = document.querySelector(".slides .item.active");
    itemActivePrev.classList.remove("active");
    slidesActivePrev.classList.remove("active");

    items[itemActive].classList.add("active");
    slides[itemActive].classList.add("active");
}

slides.forEach((slide, index) => {
    slide.addEventListener("click", () => {
        itemActive = index;
        showSlider();
    });
});

gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll(".reveal-type");
splitTypes.forEach((char, i) => {
    const text = new SplitType(char, { types: "chars" });

    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            markers: false
        },

        y: 90,
        opacity: 0,
        stagger: 0.1
    });
});

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