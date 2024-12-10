const Product = require('../models/Product'); // Import the Product model

const createProduct = async (req, res) => {
    try {
        const { name, category, price, description, condition, email, number, imageURL } = req.body;

        // Log the received data
        console.log('Product data received:', req.body);

        // Check if all required fields are present
        if (!name || !category || !price || !condition || !email || !number) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Save the product to the database
        const newProduct = await Product.create({
            name,
            category,
            price,
            description,
            condition,
            email,
            number,
            imageURL: imageURL || null, // Optional image
            seller_id: 1, // Temporary hardcoded value for now
            seller_name: 'Test User', // Temporary hardcoded value for now
        });

        // Fetch all products to verify the database state
        const allProducts = await Product.findAll();
        console.log('Current Products in Database:', allProducts);

        // Send a success response
        res.status(201).json({ message: 'Product created successfully', product: newProduct });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { createProduct };
