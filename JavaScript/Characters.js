// Getting images inside the slideshow container
const slides = document.querySelectorAll('.slideshow-container img');
let currentSlideIndex = 0;

// Function that proceeds to the next slide
function showNextSlide() {
    // Using display none on the current slide
    slides[currentSlideIndex].style.display = 'none';
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    // And using display block on the next slide
    slides[currentSlideIndex].style.display = 'block';
}

// Transitioning to the next slide in every 4 seconds
setInterval(showNextSlide, 4000);

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

// Getting the empty container to add images
document.querySelector(".container").innerHTML = '';

// Creating an array of image URLs
const imageUrls = [
'./Images/Characters/toto1.png',
'./Images/Characters/toto2.png',
'./Images/Characters/toto3.png',
'./Images/Characters/mononoke1.png',
'./Images/Characters/mononoke2.png',
'./Images/Characters/mononoke3.png',
'./Images/Characters/ponyo1.png',
'./Images/Characters/ponyo2.png',
'./Images/Characters/ponyo3.png',
'./Images/Characters/spirited1.png',
'./Images/Characters/spirited2.png',
'./Images/Characters/spirited3.png',
'./Images/Characters/wind1.png',
'./Images/Characters/wind2.png',
'./Images/Characters/wind3.png',
'./Images/Characters/poppy1.png',
'./Images/Characters/poppy2.png',
'./Images/Characters/poppy3.png',
'./Images/Characters/heart1.png',
'./Images/Characters/heart2.png',
'./Images/Characters/heart3.png',
'./Images/Characters/howl1.png',
'./Images/Characters/howl2.png',
'./Images/Characters/howl3.png',
'./Images/Characters/Arrietty1.png',
'./Images/Characters/Arrietty2.png',
'./Images/Characters/Arrietty3.png',
'./Images/Characters/kiki1.png',
'./Images/Characters/kiki2.png',
'./Images/Characters/kiki3.png',
];

var fragment = document.createDocumentFragment();

// Looping through the image URLs and creating div elements with the images
for (var i = 0; i < imageUrls.length; i++) {
var photo = document.createElement("div");
photo.setAttribute('data-scroll', '');
photo.style.backgroundImage = `url(${imageUrls[i]})`; // Setting the background image
fragment.appendChild(photo);
}

document.querySelector(".container").appendChild(fragment);

// ScrollOut library initialization
ScrollOut({
threshhold: 0.5,
cssProps: {
    visibleY: true
}
});