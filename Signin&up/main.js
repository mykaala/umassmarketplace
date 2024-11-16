const signInTog = document.getElementById('signInTog');
const signUpTog = document.getElementById('signUpTog');
const toggleBar = document.getElementById('toggleBar');
const signInContainer = document.getElementById('signInContainer');
const signUpContainer = document.getElementById('signUpContainer');


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