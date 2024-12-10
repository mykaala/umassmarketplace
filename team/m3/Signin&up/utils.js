function UserNameIsNew(username) {
    //This function checks to see if the username is not used before and returns a boolean. True if its does not exist in the DB and false otherwise.
}

function passwordIsValid(password) {
    if (password.length < 8) {
        return false;
    }
    const hasNumber = /\d/.test(password); // Checks for digits (0-9)
    const hasLetter = /[a-zA-Z]/.test(password); // Checks for alphabets (A-Z, a-z)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password); // Checks for special characters
    const hasNoWhitespace = !/\s/.test(password); //checks for whitespace
    
    return hasNumber && hasLetter && hasSpecialChar && hasNoWhitespace;
}

function passwordsMatch(password, repeatedPassword) {
    return password === repeatedPassword; //checks the entered passwords are matched or not. 
}

function validEmailFormat(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@umass\.edu$/.test(email);
  return emailRegex; //check to make sure that the email address belongs to UMass
}

function validPhoneFormat(phoneNumber) {
    const phoneRegex = /^\((\d{3})\) \d{3}-\d{4}$/.test(phoneNumber);
    return phoneRegex //checks to make sure that the phone number entered is all numbers in the form of (123) 456-7890
}

function validUsername(username) {
    if (username.length == 0) {
        return false; //checks to make sure the username field is not empty
    }
    return /^[a-zA-Z0-9._]+$/.test(username); //checks to make sure the username only contains letters, numbers, dot, and underscore
}

async function signInBackEnd(username, password) { 
    const response = await fetch("/signin", { //sending a request for sign in to the backEnd using post method with username and password in the body
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username, password})
    })
    if (response.status === 200) { //if the sign in is successful redirect to them homepage
        window.location.href = "../home-and-profile/home-src";
    }
    else {
        alert(response.statusText); //if the username is invalid show the error encountered to the user
    }
}

async function signUpBackEnd(username, password, email, phoneNumber, venmo) {
    const response = await fetch("/signup", { //sending a request for sign up to the backEnd using post method with username, password, venmo, phone, and email in the body
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username, password, email, phoneNumber, venmo})
    })
    if (response.status === 200) {
        window.location.href = "../home-and-profile/home-src"; //if the sign in is successful redirect to them homepage
    }
    else {
        alert(response.statusText); //if the username is invalid show the error encountered to the user
    }
}
//exporting functions to be used in main.js file
export {passwordIsValid, validEmailFormat, passwordsMatch, validPhoneFormat, validUsername, signInBackEnd, signUpBackEnd};