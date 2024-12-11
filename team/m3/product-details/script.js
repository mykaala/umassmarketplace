document.addEventListener('DOMContentLoaded', function () {
	// Get the main image element and all the smaller image elements
	const mainImage = document.querySelector('#mainImage');
	const thumbnailImages = document.querySelectorAll('.thumbnail-image');

	// Add event listeners to each thumbnail image
	thumbnailImages.forEach((thumbnail) => {
		thumbnail.addEventListener('click', function () {
			// Change the main image's source to the clicked thumbnail's source
			mainImage.src = thumbnail.src;
		});
	});
});

document.addEventListener('DOMContentLoaded', () => {
	const params = new URLSearchParams(window.location.search);
	const productData = params.get('data');

	if (productData) {
		const product = JSON.parse(decodeURIComponent(productData));

		// Now you have the entire product object and can fill in the page details dynamically.
		document.querySelector('.product-title').textContent = product.name;
		document.querySelector('.product-price').textContent = `$${product.price}`;
		document.querySelector('.product-description').textContent = product.description;
		

		// If the product includes imageURL or other fields, apply them as well
		const mainImage = document.getElementById('mainImage');
		if (product.imageURL) {
			mainImage.src = product.imageURL;
			mainImage.alt = product.name;
		}
	} else {
		console.error('No product data found in URL');
	}
});

fetch('../navbar/navbar.html')
	.then((response) => response.text())
	.then((data) => {
		document.getElementById('navbar-container').innerHTML = data;
	})
	.catch((error) => console.error('Error loading navbar:', error));
