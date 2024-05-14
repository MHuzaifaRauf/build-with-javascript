// Create a new SpeechSynthesisUtterance object to hold the speech parameters
let speech = new SpeechSynthesisUtterance();

// Create an array to store the available voices
let voices = [];

// Get a reference to the voice selection dropdown
let voiceSelect = document.querySelector("select");

// When the voices change, update the voices array and set the default voice
window.speechSynthesis.onvoiceschanged = () => {
    // Get the available voices
    voices = window.speechSynthesis.getVoices();

    // Set the default voice to the first voice in the array
    speech.voice = voices[0];

    // Populate the voice selection dropdown with the available voices
    voices.forEach((voice, index) => (voiceSelect.options[index] = new Option(voice.name, index)));
};

// Add an event listener to the voice selection dropdown
voiceSelect.addEventListener("change", () => {
    // Set the selected voice for the speech object
    speech.voice = voices[voiceSelect.value];
});

// Add an event listener to the "Speak" button
document.querySelector("button").addEventListener("click", () => {
    // Get the text from the textarea
    speech.text = document.querySelector("textarea").value;

    // Speak the text using the selected voice
    window.speechSynthesis.speak(speech);
});