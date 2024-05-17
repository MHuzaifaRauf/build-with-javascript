// Get elements for error messages
var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

// Function to validate name input
function validateName(){
    var name = document.getElementById('contact-name').value;

    // Check if name is empty
    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    } 

    // Check if name matches the pattern (first name and last name separated by a space)
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    } 

    // If valid, show a checkmark
    nameError.innerHTML = '<i class="fas fa-check" style="color: #44e708;"></i>';
    return true;
}

// Function to validate phone number input
function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    // Check if phone number is empty
    if(phone.length == 0){
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }

    // Check if phone number has 11 digits
    if(phone.length !== 11){
        phoneError.innerHTML = 'Phone number should be 11 digits';
        return false;
    }

    // Check if phone number contains only digits
    if(!phone.match(/^[0-9]{11}$/)){
        phoneError.innerHTML = 'Only digits';
        return false;
    }

    // If valid, show a checkmark
    phoneError.innerHTML = '<i class="fas fa-check" style="color: #44e708;"></i>';
    return true;
}

// Function to validate email input
function validateEmail(){
    var email = document.getElementById('contact-email').value;
    
    // Check if email is empty
    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }

    // Check if email matches the pattern (basic email pattern)
    if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)){
        emailError.innerHTML = 'Invalid Email';
        return false;
    }

    // If valid, show a checkmark
    emailError.innerHTML = '<i class="fas fa-check" style="color: #44e708;"></i>';
    return true;
}

// Function to validate message input
function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 25;
    var remaining = required - message.length;

    // Check if message is too short
    if(remaining > 0){
        messageError.innerHTML = remaining + ' more characters required';
        return true;
    }

    // If valid, show a checkmark
    messageError.innerHTML = '<i class="fas fa-check" style="color: #44e708;"></i>';
    return true;
}

// Function to validate the entire form
function validateForm(){
    // Check if any of the input fields are invalid
    if(!validateEmail() || !validateMessage() || !validatePhone() || !validateName()){
        // Show an error message for 3 seconds
        submitError.style.display = 'block';
        submitError.innerHTML = "Fill out the form to submit";
        setTimeout(function(){
            submitError.style.display = 'none';
        }, 3000);
        return false;
    }
    // If all fields are valid, return true
    return true;
}