# Note Taking App

This is a simple note taking application written in JavaScript. It allows users to create, edit, and delete notes. The notes are stored in the local storage of the browser.

## How it works

The application uses the following HTML elements:

- A container for the notes (`notesContainer`)
- A button for creating new notes (`createBtn`)
- Note elements (`inputBox`)

When the application is loaded, it retrieves any stored notes from the local storage and displays them in the `notesContainer`.

When the `createBtn` is clicked, a new note is created. This note is an editable paragraph (`<p>`) element with a delete button (an `<img>` element). The new note is appended to the `notesContainer`.

When a note's delete button is clicked, the note is removed from the `notesContainer` and the local storage is updated.

When a note is edited (i.e., when a key is pressed in a note), the local storage is updated.

When the Enter key is pressed, a line break is inserted instead of creating a new paragraph. This allows for multi-line notes.

## How to use

1. Open the application in a web browser.
2. Click the create button to create a new note.
3. Click on a note to edit it.
4. Press Enter to insert a line break in a note.
5. Click the delete button on a note to delete it.