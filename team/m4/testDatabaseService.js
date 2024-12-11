const { User, Product, Image } = require('./models');
const DatabaseService = require('./sequelize-db.js');

async function testDatabaseService() {
	try {
		// Initialize the DatabaseService
		const dbService = new DatabaseService('./marketplaceDB.db');

		// Connect to the database
		console.log('Connecting to the database...');
		await dbService.connect();
		console.log('Connected to the database!');

		// Sync the models (ensure they match the database schema)
		console.log('Synchronizing models...');
		await dbService.syncModels();
		console.log('Models synchronized!');

		// Test CREATE operation for User model with mock data
		console.log('Testing CREATE operation for User...');
		const newUser = await User.create({
			id: '28384324',
			username: 'johndoe',
			password: 'password123',
			phone_number: '1234567890',
			venmo: 'johndoe_venmo',
			email: 'example@example.com',
			name: 'John Doe'
		});
		console.log('Created User:', newUser.toJSON());

		// Test CREATE operation for multiple Product entries (Initial 4 products)
		console.log('Testing CREATE operation for multiple Products...');
		const productsData = [
			{
				seller_id: '3',
				seller_name: 'Alice',
				category: "test category 1",
				name: 'Vintage Lamp',
				description: 'A charming antique lamp to brighten your room.',
				imageURL: 'images/vintage_lamp.jpg',
				price: 49.99,
				user_id: '123123'
			},
			{
				seller_id: '4',
				seller_name: 'Bob',
				category: "test category 1",
				name: 'Ergonomic Office Chair',
				description: 'Comfortable chair with lumbar support and adjustable height.',
				imageURL: 'images/office_chair.jpg',
				price: 89.99,
				user_id: '234234'
			},
			{
				seller_id: '5',
				seller_name: 'Charlie',
				category: "test category 1",
				name: 'Noise-Cancelling Headphones',
				description: 'High-quality headphones with excellent sound and noise isolation.',
				imageURL: 'images/headphones.jpg',
				price: 199.99,
				user_id: '456456'
			},
			{
				seller_id: '6',
				seller_name: 'Diana',
				category: "test category 1",
				name: 'Ceramic Coffee Mug',
				description: 'Hand-painted mug perfect for coffee, tea, and other hot beverages.',
				imageURL: 'images/coffee_mug.jpg',
				price: 14.99,
				user_id: '657567'
			}
		];

		const createdProducts = await Product.bulkCreate(productsData);
		console.log(
			'Created Products:',
			createdProducts.map((product) => product.toJSON())
		);

		// Test CREATE operation for Image model with mock data
		console.log('Testing CREATE operation for Image...');
		const newImage = await Image.create({
			image_url: 'http://example.com/sample-image.jpg',
			product_id: createdProducts[0].id // Link to the first created product
		});
		console.log('Created Image:', newImage.toJSON());

		// Test READ operation for User model
		console.log('Testing READ operation for User...');
		const users = await User.findAll();
		console.log(
			'All Users:',
			users.map((user) => user.toJSON())
		);

		// Test UPDATE operation for User model
		console.log('Testing UPDATE operation for User...');
		const updatedUser = await User.update({ username: 'janedoe' }, { where: { id: newUser.id } });
		console.log('Number of Users Updated:', updatedUser);

		// Test DELETE operation for User model
		console.log('Testing DELETE operation for User...');
		const deletedCount = await User.destroy({ where: { id: newUser.id } });
		console.log('Number of Users Deleted:', deletedCount);

		console.log('Initial test scenario completed successfully!');

		// -------------------------------------------------------------
		// Additional Data Insertion (More Users, Products, and Images)
		// -------------------------------------------------------------
		console.log('Inserting more test data...');

		// Create multiple users
		const newUsersData = [
			{
				id: '2',
				username: 'alice',
				password: 'alicepassword',
				phone_number: '9876543210',
				venmo: 'alice_venmo',
				email: 'alice@example.com',
				name: 'Alice Smith'
			},
			{
				id: '3',
				username: 'bob',
				password: 'bobpassword',
				phone_number: '5555555555',
				venmo: 'bob_venmo',
				email: 'bob@example.com',
				name: 'Bob Johnson'
			},
			{
				id: '4',
				username: 'charlie',
				password: 'charliepassword',
				phone_number: '4444444444',
				venmo: 'charlie_venmo',
				email: 'charlie@example.com',
				name: 'Charlie Brown'
			}
		];

		const createdUsers = await User.bulkCreate(newUsersData);
		console.log(
			'Created Users:',
			createdUsers.map((u) => u.toJSON())
		);

		// Create more products associated with the new users
		const moreProductsData = [
			{
				seller_id: '7',
				seller_name: 'Erin',
				name: 'Wireless Keyboard',
				description: 'A sleek keyboard with Bluetooth connectivity.',
				imageURL: 'images/wireless_keyboard.jpg',
				price: 35.99,
				user_id: '21' // Owned by Alice (user_id=2)
			},
			{
				seller_id: '8',
				seller_name: 'Frank',
				name: 'Smartwatch',
				description: 'Track your fitness and stay connected on the go.',
				imageURL: 'images/smartwatch.jpg',
				price: 129.99,
				user_id: '22' // Also owned by Alice
			},
			{
				seller_id: '9',
				seller_name: 'Georgia',
				name: 'Portable Speaker',
				description: 'Enjoy music outdoors with a compact wireless speaker.',
				imageURL: 'images/portable_speaker.jpg',
				price: 59.99,
				user_id: '33' // Owned by Bob (user_id=3)
			},
			{
				seller_id: '10',
				seller_name: 'Henry',
				name: 'E-book Reader',
				description: 'Read your favorite books on a lightweight e-ink device.',
				imageURL: 'images/ebook_reader.jpg',
				price: 99.99,
				user_id: '44' // Owned by Charlie (user_id=4)
			}
		];

		const moreCreatedProducts = await Product.bulkCreate(moreProductsData);
		console.log(
			'More Created Products:',
			moreCreatedProducts.map((product) => product.toJSON())
		);

		// Create multiple images referencing the newly created products
		const moreImagesData = [
			{
				image_url: 'http://example.com/wireless_keyboard_1.jpg',
				product_id: moreCreatedProducts[0].id // For Wireless Keyboard
			},
			{
				image_url: 'http://example.com/smartwatch_1.jpg',
				product_id: moreCreatedProducts[1].id // For Smartwatch
			},
			{
				image_url: 'http://example.com/portable_speaker_1.jpg',
				product_id: moreCreatedProducts[2].id // For Portable Speaker
			},
			{
				image_url: 'http://example.com/ebook_reader_1.jpg',
				product_id: moreCreatedProducts[3].id // For E-book Reader
			}
		];

		const moreCreatedImages = await Image.bulkCreate(moreImagesData);
		console.log(
			'More Created Images:',
			moreCreatedImages.map((img) => img.toJSON())
		);

		console.log('Additional test data insertion completed successfully!');
	} catch (err) {
		console.error('Error during tests:', err);
	}
}

// Run the test
testDatabaseService();
