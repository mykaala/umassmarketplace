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

function onOpenContactForm() {
    const contactName = document.getElementById("contact-name").textContent;
    const contactEmail = document.getElementById("contact-email").textContent;
    const contactPhone = document.getElementById("contact-phone").textContent;
    const contactAddress = document.getElementById("contact-address").textContent;

    // set default edit form values
    document.getElementById("new-name").value = contactName;
    document.getElementById("new-email").value = contactEmail;
    document.getElementById("new-phone").value = contactPhone;
    document.getElementById("new-address").value = contactAddress;

    // display modal
    const modal = document.getElementById("edit-modal");
    modal.style.display = "block";
}

function saveContactInfo() {
    const newName = document.getElementById("new-name").value;
    const newEmail = document.getElementById("new-email").value;
    const newPhone = document.getElementById("new-phone").value;
    const newAddress = document.getElementById("new-address").value;

    // set default edit form values
    document.getElementById("contact-name").textContent = newName;
    document.getElementById("contact-email").textContent = newEmail;
    document.getElementById("contact-phone").textContent = newPhone;
    document.getElementById("contact-address").textContent = newAddress;

    // close modal
    const modal = document.getElementById("edit-modal");
    modal.style.display = "none";
}


function createContactForm() {
    const modal = document.getElementById("edit-modal");
    const editButton = document.getElementById("edit-contact-btn");
    const saveButton = document.getElementById("save-edit-btn");
    const cancelButton = document.getElementById("cancel-edit-btn");

    editButton.addEventListener("click", onOpenContactForm);
    saveButton.addEventListener("click", saveContactInfo);
    cancelButton.addEventListener("click", () => {
        modal.style.display = "none"; // close modal
    });

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none"; // close modal
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
	displaySellingItems();
	displaySoldItems();
	createContactForm();
});
