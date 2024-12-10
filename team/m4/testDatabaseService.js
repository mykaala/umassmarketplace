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
            id: "1",
            username: 'johndoe', 
            password: 'password123', 
            phone_number: '1234567890', 
            venmo: 'johndoe_venmo',
            email: "example@example.com",
            name: "example"
        });
        console.log('Created User:', newUser.toJSON());

        // Test CREATE operation for Product model with mock data
        console.log('Testing CREATE operation for Product...');
        const newProduct = await Product.create({
            seller_id: "3",
            seller_name: "j",
            name: 'Sample Product', 
            description: 'This is a sample product description', 
            imageURL: "test",
            price: 29.99, 
            user_id: "1" // Assuming Product has a foreign key to User (user_id)
        });
        console.log('Created Product:', newProduct.toJSON());

        // Test CREATE operation for Image model with mock data
        console.log('Testing CREATE operation for Image...');
        const newImage = await Image.create({
            image_url: 'http://example.com/sample-image.jpg', 
            product_id: "5" // Assuming Image has a foreign key to Product (product_id)
        });
        console.log('Created Image:', newImage.toJSON());

        // Test READ operation for User model
        console.log('Testing READ operation for User...');
        const users = await User.findAll();
        console.log('All Users:', users.map(user => user.toJSON()));

        // Test UPDATE operation for User model
        console.log('Testing UPDATE operation for User...');
        const updatedUser = await User.update({ username: 'janedoe' }, { where: { id: newUser.id } });
        console.log('Number of Users Updated:', updatedUser);

        // Test DELETE operation for User model
        console.log('Testing DELETE operation for User...');
        const deletedCount = await User.destroy({ where: { id: newUser.id } });
        console.log('Number of Users Deleted:', deletedCount);

        console.log('All tests completed successfully!');
    } catch (err) {
        console.error('Error during tests:', err);
    }
}

// Run the test
testDatabaseService();