const sellingItems = [
	{
		title: 'Water Bottle',
		price: '$5',
		image: '',
		description: "you're only as cute as your water bottle is."
	},
	{
		title: 'Red Bicycle',
		price: '$100',
		image: '',
		description: 'cool red mountain bike!!!'
	}
];

const soldItems = [
	{
		title: 'UMass Hoodie',
		price: '$50',
		image: '',
		description: 'show off the merch'
	},
	{
		title: 'Electric Scooter',
		price: '$400',
		image: '',
		description: 'gotrax mint condition'
	}
];

function displaySellingItems() {
	const sellingList = document.getElementById('selling-list');
	sellingList.innerHTML = '';

	sellingItems.forEach((item) => {
		const itemCard = createItemCard(item);
		sellingList.appendChild(itemCard);
	});
}

function displaySoldItems() {
	const soldList = document.getElementById('sold-list');
	soldList.innerHTML = '';

	soldItems.forEach((item) => {
		const itemCard = createItemCard(item);
		soldList.appendChild(itemCard);
	});
}

function createItemCard(item) {
	const card = document.createElement('div');
	card.className = 'item-card';

	const img = document.createElement('img');
	img.src = item.image;
	img.alt = item.title;

	const title = document.createElement('h4');
	title.textContent = item.title;

	const price = document.createElement('p');
	price.textContent = item.price;

	const description = document.createElement('p');
	description.textContent = item.description;

	const button = document.createElement('button');
	button.textContent = 'View';
	button.className = 'btn';

	card.appendChild(img);
	card.appendChild(title);
	card.appendChild(price);
	card.appendChild(description);
	card.appendChild(button);

	return card;
}

document.addEventListener('DOMContentLoaded', () => {
	displaySellingItems();
	displaySoldItems();
});
