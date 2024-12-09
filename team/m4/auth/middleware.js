export const isAuthenticated = (req, res, next) => {
    return req.isAuthenticated() ? next() : res.redirect("../../m3/Signin&up");
} 