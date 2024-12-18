
fetch('/navbar/navbar.html')
	.then((response) => response.text())
	.then((data) => {
		document.getElementById('navbar-container').innerHTML = data;
	})
	.catch((error) => console.error('Error loading navbar:', error));

async function displayProducts() {
	const productGrid = document.getElementById('product-grid');

	try {
		// Fetch products from the API
		const response = await fetch('/api/products');
		const products = await response.json();

		// Clear any existing products in the grid
		productGrid.innerHTML = '';

		// Dynamically populate the product grid
		products.forEach((product) => {
			const card = document.createElement('div');
			card.className = 'product-card';

			const img = document.createElement('img');
			img.src = product.imageURL || 'default-image.jpg'; // Use default if no image provided
			img.alt = product.name;
			card.appendChild(img);

			const title = document.createElement('h3');
			title.textContent = product.name;
			card.appendChild(title);

			const price = document.createElement('p');
			price.textContent = `$${product.price}`;
			card.appendChild(price);

			const button = document.createElement('button');
			button.textContent = 'View';
			button.onclick = () => {
				const encodedData = encodeURIComponent(JSON.stringify(product));
				window.location.href = `/product-details/productDetails.html?data=${encodedData}`;
			};

			card.appendChild(button);

			productGrid.appendChild(card);
		});
	} catch (error) {
		console.error('Error fetching products:', error);
		productGrid.innerHTML = '<p>Failed to load products. Please try again later.</p>';
	}
}

document.addEventListener('DOMContentLoaded', displayProducts);
//document.addEventListener('DOMContentLoaded', fetchAndDisplayProducts);
