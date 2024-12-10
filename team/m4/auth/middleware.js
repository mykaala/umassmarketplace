export const isAuthenticated = (req, res, next) => { //checks to see if the user is authenticated using passport isAuthenticated functions.
    return req.isAuthenticated() ? next() : res.redirect("../../m3/Signin&up"); //if yes proceeds to the next function but if not will redirect them to sign in page.
} 