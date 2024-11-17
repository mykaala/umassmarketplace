document.addEventListener("DOMContentLoaded", function () {
    // Get the main image element and all the smaller image elements
    const mainImage = document.querySelector("#mainImage");
    const thumbnailImages = document.querySelectorAll(".thumbnail-image");

    // Add event listeners to each thumbnail image
    thumbnailImages.forEach((thumbnail) => {
        thumbnail.addEventListener("click", function () {
            // Change the main image's source to the clicked thumbnail's source
            mainImage.src = thumbnail.src;
        });
    });
});
