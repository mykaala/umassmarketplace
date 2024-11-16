function updateProgressBar(progress) {
    const progressBar = document.querySelector('.progress-bar::before');
    progressBar.style.width = progress + '%'; // Adjust progress as needed
}