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


