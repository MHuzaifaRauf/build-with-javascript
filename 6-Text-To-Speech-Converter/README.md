## Text-to-Speech Converter App

This is a simple web application that allows users to convert text input into speech using the browser's built-in speech synthesis capabilities.

### Features

- Select from a variety of available voices.
- Input text in a textarea.
- Click a button to have the text spoken out loud.

### How to Use

1. Clone or download the repository to your local machine.
2. Open the `index.html` file in a web browser.
3. Select a voice from the dropdown menu.
4. Enter the text you want to convert to speech in the textarea.
5. Click the "Speak" button to hear the text spoken out loud.

### Code Overview

The main functionality of the app is implemented in `script.js`. Here's a brief overview of the key components:

- `speech`: A `SpeechSynthesisUtterance` object used to hold the speech parameters.
- `voices`: An array to store the available voices.
- `voiceSelect`: A reference to the voice selection dropdown.
- Event listeners:
  - `onvoiceschanged`: Updates the available voices and sets the default voice.
  - `change` on `voiceSelect`: Sets the selected voice for the speech object.
  - `click` on the "Speak" button: Speaks the text using the selected voice.

### Technologies Used

- HTML
- CSS
- JavaScript

### Compatibility

This app utilizes the browser's built-in speech synthesis capabilities, so it should work on most modern web browsers that support this feature.