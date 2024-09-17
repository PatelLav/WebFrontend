let slideIndex = 0; // Start at the first image
const slides = document.querySelectorAll("#slider img"); // Select all images in the slider

// Function to show the next or previous slide
function changeSlide(step) {
    slideIndex += step; // Increment or decrement slideIndex
    if (slideIndex >= slides.length) { // Loop back to the first image if we go past the last one
        slideIndex = 0;
    } else if (slideIndex < 0) { // Loop to the last image if we go before the first one
        slideIndex = slides.length - 1;
    }
    showSlide(); // Display the current slide
}

// Function to show the slide corresponding to slideIndex
function showSlide() {
    slides.forEach((slide, index) => {
        slide.style.display = "none"; // Hide all slides
        if (index === slideIndex) {
            slide.style.display = "block"; // Show only the active slide
        }
    });
}

// Initial display of the first slide
showSlide();

// Function to initiate automatic slide change
function startSlideShow() {
    setInterval(() => {
        changeSlide(1); // Change slide every 3 seconds
    }, 5000);
}

// Start the automatic slideshow
startSlideShow();

// Optional: To pause the slideshow on hover
document.querySelector('#slider').addEventListener('mouseover', () => {
    clearInterval(startSlideShow); // Pause the slideshow
});

document.querySelector('#slider').addEventListener('mouseout', () => {
    startSlideShow(); // Resume the slideshow
});
