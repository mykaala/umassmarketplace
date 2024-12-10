import {passwordIsValid, validEmailFormat, passwordsMatch, validPhoneFormat, validUsername, signInBackEnd, signUpBackEnd} from './utils.js';
//initializing variables for each of the DOM elements that are interactive in the sign in/up page
const signInTog = document.getElementById('signInTog'); //toggle to choose sign in/up, to show sign in
const signUpTog = document.getElementById('signUpTog'); //toggle to choose sign in/up, to show sign up
const toggleBar = document.getElementById('toggleBar'); //the toggleBar itself
const signInContainer = document.getElementById('signInContainer'); //container form for sign in 
const signUpContainer = document.getElementById('signUpContainer'); //container form for sign up
const passwordUpInput = document.getElementById('password-input-up'); //password input textbox for the sign up page
const emailInput = document.getElementById('email-input'); //email input textbox for the sign up page
const repeatedPassword = document.getElementById('password-reinput'); //password repeated input textbox for the sign up page
const phoneInput = document.getElementById('phone-input'); //phone number input textbox for the sign up page
const usernameUp = document.getElementById('username-input-up'); //username input textbox for sign up page
const signInButton = document.getElementById('sign-in-button'); //sign in button
const usernameIn = document.getElementById('username-input'); //username input textbox for sign in page
const passwordIn = document.getElementById('password-input'); //password input textbox for sign in page
const signUpButton = document.getElementById('sign-up-button'); //sign up button

signInTog.addEventListener('click', () => { //functionality of the toggle for choosing sign in or sign up implemented here. In this instance sign in page is being shown.
        toggleBar.style.left = "0%"
        toggleBar.style.color = "white";
        toggleBar.innerHTML = "Sign In";
        signUpContainer.style.display = "none";
        signInContainer.style.display = "flex";
})


signUpTog.addEventListener('click', () => { //functionality of the toggle for choosing sign in or sign up implemented here. In this instance sign up page is being shown.
        toggleBar.style.left = "50%";
        toggleBar.style.color = "white";
        toggleBar.innerHTML = "Sign Up";
        signUpContainer.style.display = "flex";
        signInContainer.style.display = "none";
})


passwordUpInput.addEventListener("input", () => {
    if (passwordIsValid(passwordUpInput.value)) { //checking to see if the password entered is valid in the sign up page
        document.getElementById('passwordFeedback-up').style.display = "none"; //if yes removing any feedback that may have existed before.
        document.getElementById('passwordFeedback-up').innerHTML = "";
        if (!passwordsMatch(passwordUpInput.value, repeatedPassword.value)) { //checking to see if the password and repeated password match
            document.getElementById('confirmerFeedback').style.display = "block"; //if not, providing feedback under the repeat password textbox letting the user know
            document.getElementById('confirmerFeedback').innerHTML = "Passwords Don't Match.";
        }
        else {
            document.getElementById('confirmerFeedback').style.display = "none"; //if they match removing any feedback that may have existed before under repeat password.
            document.getElementById('confirmerFeedback').innerHTML = "";
        }
    }
    else { //if the password does not meet the requirements, providing feedback letting the user know about all of the requirements.
        document.getElementById('passwordFeedback-up').style.display = "block"; 
        document.getElementById('passwordFeedback-up').innerHTML = "Your password should be at least 8 characters long and contain at least one number, alphabet, and special character!";
    }
}
)

emailInput.addEventListener("input", () => {
    if (validEmailFormat(emailInput.value)) { //checking the inputted email format. 
        document.getElementById('emailFeedback').style.display = "none"; //if it satisfies all the requirements, removing all of the feedbacks that may have existed under
        document.getElementById('emailFeedback').innerHTML = ""; //the email textbox.
    }
    else { //if it doesn't meet the requirements, umass domain email in this case, providing feedback to user under the email input textbox.
        document.getElementById('emailFeedback').style.display = "block";
        document.getElementById('emailFeedback').innerHTML = "Email should be of example@umass.edu format.";
    }
})

repeatedPassword.addEventListener("input", () => { //whenever the repeated password textbox is changed, checking to make sure that it still matches the password entered.
    if (passwordsMatch(passwordUpInput.value, repeatedPassword.value)) { //This is to stop people from changing this field after matching it initially.
        document.getElementById('confirmerFeedback').style.display = "none"; //if it does removing any feedbacks that may have existed under the repeated password textbox
        document.getElementById('confirmerFeedback').innerHTML = "";
    }
    else { //if they don't match, add a feedback under the repeated password input textbox letting the user know that the passwords don't match.
        document.getElementById('confirmerFeedback').style.display = "block";
        document.getElementById('confirmerFeedback').innerHTML = "Passwords Don't Match.";
    }
})

phoneInput.addEventListener("input", () => { //making sure that the phone number inputted consists of all numbers and of the right format.
    if (validPhoneFormat(phoneInput.value)) { //if yes, removing any feedback that may have existed in the feedback placeholder under the phone number textbox.
        document.getElementById('phoneFeedback').style.display = "none";
        document.getElementById('phoneFeedback').innerHTML = "";
    }
    else { //if not, providing feedback under the phone input textbox to the let the user know about the requirements.
        document.getElementById('phoneFeedback').style.display = "block";
        document.getElementById('phoneFeedback').innerHTML = "Phone should be of the format (123) 456-7890.";
    }
})

usernameUp.addEventListener("input", () => {
    if (validUsername(usernameUp.value)) { //checking the username for the sign up page to make sure it meets the requirements
        document.getElementById('usernameFeedback-up').style.display = "none"; //if it does, then removing any feedback that may have existed under the input textbox
        document.getElementById('usernameFeedback-up').innerHTML = "";
    }
    else { //if it doesn't displaying a feedback under the username field to let the user know about the requirements.
        document.getElementById('usernameFeedback-up').style.display = "block";
        document.getElementById('usernameFeedback-up').innerHTML = "Username should not be empty and it should only contain alphanumerical characters, dot, and underscore.";
    }
})

signInButton.addEventListener('click', () => { //when the sign in button is clicked
    const signInContainer = document.getElementById('signInContainer');
    const inputs = signInContainer.querySelectorAll('.textBox');
    const feedbacks = signInContainer.querySelectorAll('.feedback');
    inputs.forEach((input, index) => { //check to see if any of the fields are empty
        const feedback = feedbacks[index];
        if (input.value.trim() === '') { //if there are any letting the user know that they are mandatory
            feedback.innerHTML = "This field is required.";
            feedback.style.display = "block";
        }
        else {
            feedback.innerHTML = ""; //if not removing any that may have existed
            feedback.style.display = "none";
        }
    })
    if (Array.from(feedbacks).filter(feedback => feedback.style.display === 'none').length === feedbacks.length) { //making sure that the inputs meet the requirements as thats the only way for the feedback fields to be empty
        //alert(`This feature has not been implemented yet as it requires back-end code. Thank you for your patience while we work on it.`);
        signInBackEnd(usernameIn.value, passwordIn.value); //calling the signInBackEnd functions to connect to backend and sign in
        passwordIn.value = ''; //resetting the input fields
        usernameIn.value = '';
    }
})

signUpButton.addEventListener('click', () => { //when the sign up button is clicked
    const signUpContainer = document.getElementById('signUpContainer');
    const inputs = signUpContainer.querySelectorAll('.textBox');
    const feedbacks = signUpContainer.querySelectorAll('.feedback');
    inputs.forEach((input, index) => { //check to see if any of the fields are empty
        const feedback = feedbacks[index];
        if (input.value.trim() === '') { //if there are any letting the user know that they are mandatory
            feedback.innerHTML = "This field is required.";
            feedback.style.display = "block";
        }
        else if (feedback.innerHTML == "This field is required." || feedback.innerHTML == "") { //if not removing any that may have existed
            feedback.innerHTML = "";
            feedback.style.display = "none";
        }
    })
    if (Array.from(feedbacks).filter(feedback => feedback.style.display === 'none').length === feedbacks.length) { //making sure that the inputs meet the requirements as thats the only way for the feedback fields to be empty
        // alert(`This feature has not been implemented yet as it requires back-end code. Thank you for your patience while we work on it.`);
        signUpBackEnd(usernameUp.value, passwordUpInput.value, document.getElementById('venmo-input').value, phoneInput.value, emailInput.value); //calling the signUpBackEnd functions to connect to backend and sign up
        passwordUpInput.value = ''; //resetting the input fields
        usernameUp.value = '';
        repeatedPassword.value = '';
        document.getElementById('venmo-input').value = '';
        phoneInput.value = '';
        emailInput.value = '';
    }
})

