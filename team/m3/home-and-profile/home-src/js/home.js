const products = [
	{
		title: 'Water Bottle',
		price: '$5',
		image: ''
	},
	{
		title: 'PS4',
		price: '$150',
		image: ''
	},
	{
		title: 'Red Bicycle',
		price: '$100',
		image: ''
	},
	{
		title: 'Lamp',
		price: '$25',
		image: ''
	}
];

function displayProducts() {
	const productGrid = document.getElementById('product-grid');

	products.forEach((product) => {
		const card = document.createElement('div');
		card.className = 'product-card';

		const img = document.createElement('img');
		img.src = product.image;
		img.alt = product.title;
		card.appendChild(img);

		const title = document.createElement('h3');
		title.textContent = product.title;
		card.appendChild(title);

		const price = document.createElement('p');
		price.textContent = `${product.price}`;
		card.appendChild(price);

		const button = document.createElement('button');
		button.textContent = 'View';
		button.onclick = () => alert(`Details for ${product.title}`);
		card.appendChild(button);

		productGrid.appendChild(card);
	});
}

document.addEventListener('DOMContentLoaded', displayProducts);

fetch('../../navbar/navbar.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('navbar-container').innerHTML = data;
            })
            .catch(error => console.error('Error loading navbar:', error));