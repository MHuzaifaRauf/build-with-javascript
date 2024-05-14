// Get the notes container element from the DOM
const notesContainer = document.querySelector(".notes-container");

// Get the create button element from the DOM
const createBtn = document.querySelector(".btn");

// Get all the note input boxes from the DOM
let notes = document.querySelectorAll(".input-box");

// Function to display notes from localStorage
function showNotes() {
    // Set the innerHTML of the notes container to the stored notes
    notesContainer.innerHTML = localStorage.getItem("notes");
}

// Call the showNotes function to display notes on page load
showNotes();

// Function to update notes in localStorage
function updateStorage() {
    // Set the notes in localStorage to the current innerHTML of the notes container
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Add a click event listener to the create button
createBtn.addEventListener("click", () => {
    // Create a new paragraph element for the note input box
    let inputBox = document.createElement("p");

    // Create a new image element for the delete button
    let img = document.createElement("img");

    // Set the class of the input box to "input-box"
    inputBox.className = "input-box";

    // Make the input box editable
    inputBox.setAttribute("contenteditable", "true");

    // Set the source of the delete button image
    img.src = "assets/images/delete.png";

    // Append the input box and delete button to the notes container
    notesContainer.appendChild(inputBox).appendChild(img);
});

// Add a click event listener to the notes container
notesContainer.addEventListener("click", (event) => {
    // Check if the clicked element is an image (delete button)
    if (event.target.tagName === "IMG") {
        // Remove the parent element (note input box) of the clicked delete button
        event.target.parentElement.remove();

        // Update the notes in localStorage
        updateStorage();
    }
    // Check if the clicked element is a paragraph (note input box)
    else if (event.target.tagName === "P") {
        // Get all the note input boxes again
        notes = document.querySelectorAll(".input-box");

        // Add a keyup event listener to each note input box
        notes.forEach(nt => {
            nt.onkeyup = function() {
                // Update the notes in localStorage on keyup
                updateStorage();
            }
        });
    }
});

// Add a keydown event listener to the document
document.addEventListener("keydown", event => {
    // Check if the pressed key is "Enter"
    if (event.key === "Enter") {
        // Insert a line break in the note input box
        document.execCommand("insertLineBreak");

        // Prevent the default behavior of the "Enter" key
        event.preventDefault();
    }
});