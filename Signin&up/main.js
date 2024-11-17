import {passwordIsValid, validEmailFormat, passwordsMatch, validPhoneFormat, validUsername} from './utils.js';

const signInTog = document.getElementById('signInTog');
const signUpTog = document.getElementById('signUpTog');
const toggleBar = document.getElementById('toggleBar');
const signInContainer = document.getElementById('signInContainer');
const signUpContainer = document.getElementById('signUpContainer');
const passwordUpInput = document.getElementById('password-input-up');
const emailInput = document.getElementById('email-input');
const repeatedPassword = document.getElementById('password-reinput');
const phoneInput = document.getElementById('phone-input');
const usernameUp = document.getElementById('username-input-up');
const signInButton = document.getElementById('sign-in-button');
const usernameIn = document.getElementById('username-input');
const passwordIn = document.getElementById('password-input');
const signUpButton = document.getElementById('sign-up-button');

signInTog.addEventListener('click', () => {
        toggleBar.style.left = "0%"
        toggleBar.style.color = "white";
        toggleBar.innerHTML = "Sign In";
        signUpContainer.style.display = "none";
        signInContainer.style.display = "flex";
})


signUpTog.addEventListener('click', () => {
        toggleBar.style.left = "50%";
        toggleBar.style.color = "white";
        toggleBar.innerHTML = "Sign Up";
        signUpContainer.style.display = "flex";
        signInContainer.style.display = "none";
})


passwordUpInput.addEventListener("input", () => {
    if (passwordIsValid(passwordUpInput.value)) { 
        document.getElementById('passwordFeedback-up').style.display = "none";
    }
    else {
        document.getElementById('passwordFeedback-up').style.display = "block";
        document.getElementById('passwordFeedback-up').innerHTML = "Your password should be at least 8 characters long and contain at least one number, alphabet, and special character!";
    }
}
)

emailInput.addEventListener("input", () => {
    if (validEmailFormat(emailInput.value)) {
        document.getElementById('emailFeedback').style.display = "none";
    }
    else {
        document.getElementById('emailFeedback').style.display = "block";
        document.getElementById('emailFeedback').innerHTML = "Email should be of example@umass.edu format.";
    }
})

repeatedPassword.addEventListener("input", () => {
    if (passwordsMatch(passwordUpInput.value, repeatedPassword.value)) {
        document.getElementById('confirmerFeedback').style.display = "none";
    }
    else {
        document.getElementById('confirmerFeedback').style.display = "block";
        document.getElementById('confirmerFeedback').innerHTML = "Passwords Don't Match.";
    }
})

phoneInput.addEventListener("input", () => {
    if (validPhoneFormat(phoneInput.value)) {
        document.getElementById('phoneFeedback').style.display = "none";
    }
    else {
        document.getElementById('phoneFeedback').style.display = "block";
        document.getElementById('phoneFeedback').innerHTML = "Phone should be of the format (123) 456-7890.";
    }
})

usernameUp.addEventListener("input", () => {
    if (validUsername(usernameUp.value)) {
        document.getElementById('usernameFeedback-up').style.display = "none";
    }
    else {
        document.getElementById('usernameFeedback-up').style.display = "block";
        document.getElementById('usernameFeedback-up').innerHTML = "Username should not be empty and it should only contain alphanumerical characters, dot, and underscore.";
    }
})

signInButton.addEventListener('click', () => {
    const signInContainer = document.getElementById('signInContainer');
    const inputs = signInContainer.querySelectorAll('.textBox');
    const feedbacks = signInContainer.querySelectorAll('.feedback');
    inputs.forEach((input, index) => {
        const feedback = feedbacks[index];
        if (input.value.trim() === '') {
            feedback.innerHTML = "This field is required.";
            feedback.style.display = "block";
        }
        else {
            feedback.innerHTML = "";
            feedback.style.display = "none";
        }
    })
    if (Array.from(feedbacks).filter(feedback => feedback.style.display === 'none').length === feedbacks.length) {
        alert(`This feature has not been implemented yet as it requires back-end code. Thank you for your patience while we work on it.`);
        passwordIn.value = '';
        usernameIn.value = '';
    }
})

signUpButton.addEventListener('click', () => {
    const signUpContainer = document.getElementById('signUpContainer');
    const inputs = signUpContainer.querySelectorAll('.textBox');
    const feedbacks = signUpContainer.querySelectorAll('.feedback');
    console.log(inputs.length);
    inputs.forEach((input, index) => {
        const feedback = feedbacks[index];
        if (input.value.trim() === '') {
            feedback.innerHTML = "This field is required.";
            feedback.style.display = "block";
        }
        else {
            feedback.innerHTML = "";
            feedback.style.display = "none";
        }
    })
    if (Array.from(feedbacks).filter(feedback => feedback.style.display === 'none').length === feedbacks.length) {
        alert(`This feature has not been implemented yet as it requires back-end code. Thank you for your patience while we work on it.`);
        passwordIn.value = '';
        usernameIn.value = '';
        repeatedPassword.value = '';
        document.getElementById('venmo-input').value = '';
        phoneInput.value = '';
        emailInput.value = '';
    }
})

