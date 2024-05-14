// Get the gallery container element from the DOM
let scrollContainer = document.querySelector(".gallery");

// Get the back button element from the DOM
let backBtn = document.getElementById("backBtn");

// Get the next button element from the DOM
let nextBtn = document.getElementById("nextBtn");

// Add a wheel event listener to the gallery container
scrollContainer.addEventListener("wheel", (event) => {
    // Prevent the default scroll behavior
    event.preventDefault();

    // Scroll the gallery horizontally based on the mouse wheel scroll
    scrollContainer.scrollLeft += event.deltaY;

    // Set the scroll behavior to "auto" for instant scrolling
    scrollContainer.style.scrollBehavior = "auto";
});

// Add a click event listener to the next button
nextBtn.addEventListener("click", () => {
    // Set the scroll behavior to "smooth" for smooth scrolling
    scrollContainer.style.scrollBehavior = "smooth";

    // Scroll the gallery 900 pixels to the right
    scrollContainer.scrollLeft += 900;
});

// Add a click event listener to the back button
backBtn.addEventListener("click", () => {
    // Set the scroll behavior to "smooth" for smooth scrolling
    scrollContainer.style.scrollBehavior = "smooth";

    // Scroll the gallery 900 pixels to the left
    scrollContainer.scrollLeft -= 900;
});