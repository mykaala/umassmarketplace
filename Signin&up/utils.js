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
  return emailRegex;
}

function usernameMatchesPassword(username, password) {
    //checks to see if the entered password is correct for the username entered based on the database.
}

function validPhoneFormat(phoneNumber) {
    const phoneRegex = /^\((\d{3})\) \d{3}-\d{4}$/.test(phoneNumber);
    return phoneRegex
}

function validUsername(username) {
    if (username.length == 0) {
        return false;
    }
    return /^[a-zA-Z0-9._]+$/.test(username);
}

export {passwordIsValid, validEmailFormat, passwordsMatch, validPhoneFormat, validUsername};