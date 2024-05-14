# Form Validator

This JavaScript script provides a form validation functionality for a web form. It includes validation for name, phone number, email, and message fields.

## Features

- Validates the name field to ensure it is not empty and follows a specific format (first name and last name separated by a space).
- Validates the phone number field to be exactly 11 digits long and contain only numerical characters.
- Validates the email field to match a basic email pattern.
- Validates the message field to be at least 25 characters long.

## Usage

1. Include the `formValidator.js` file in your HTML document.
2. Ensure the following elements are present in your HTML form:
   - `contact-name` for the name input field.
   - `contact-phone` for the phone number input field.
   - `contact-email` for the email input field.
   - `contact-message` for the message input field.
   - `name-error`, `phone-error`, `email-error`, and `messsage-error` for displaying specific error messages.
   - `submit-error` for displaying a general error message when the form is not valid.
3. Call the `validateForm()` function when the form is submitted to trigger the validation process.

## Customization

- You can modify the validation patterns in the script to suit your specific requirements for email and phone number formats.
- Adjust the minimum character count for the message field by updating the `required` variable in the `validateMessage()` function.

## Notes

- This script provides basic form validation and can be further enhanced or customized based on your project's needs.
- Error messages are displayed dynamically based on the validation results for each field.
- The script includes a timeout function to hide the general submission error message after 3 seconds.

Feel free to integrate and adapt this form validator script to enhance the user experience and data integrity of your web forms.