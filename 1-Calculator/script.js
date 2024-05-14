// Get the display element from the DOM
const display = document.getElementById("display");

// Function to append input to the display value
let appendToDisplay = (input) => display.value += input;

// Function to clear the display
let clearDisplay = () => display.value = "";

// Function to calculate the expression in the display
let calculate = () => {
    try {
        // Evaluate the expression in the display and update the display value
        display.value = eval(display.value);
    } catch (error) {
        // If there's an error, display "Error" on the display
        display.value = "Error";
    }
}