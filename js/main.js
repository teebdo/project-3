const parallaxElements = document.querySelectorAll('.parallax-container');

// Listen for scroll event
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;

    // Loop through each parallax container to update background position
    parallaxElements.forEach(element => {
        const imageSrc = element.getAttribute('data-image-src');
        const zIndex = parseInt(element.getAttribute('data-z-index'), 10) || 1;
        
        // Update background position based on scroll position and zIndex
        let speed = zIndex * 0.5; // Control speed based on zIndex (layer speed)
        let offset = (scrollPosition * speed) + 'px';
        
        // Apply the calculated offset to the background position
        element.style.backgroundPosition = `center ${offset}`;
    });
});