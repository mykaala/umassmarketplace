const express = require('express');
const router = express.Router();
const { Product } = require('../models'); // Adjust the path based on your project structure

// Route to fetch all products
router.get('/', async (req, res) => {
    try {
        // Fetch all products from the database
        const allProducts = await Product.findAll();
        
        // Send the products as a JSON response
        res.status(200).json(allProducts);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});
router.post('/', async (req, res) => {
    console.log('POST /api/products route hit'); // Log when route is accessed
    console.log('Request body:', req.body); // Log the received data

    try {
        const { name, category, price, description, condition, email, number, imageURL } = req.body;

        // Validate required fields
        if (!name || !category || !price || !condition || !email || !number) {
            console.log('Missing required fields:', {
                name, category, price, condition, email, number,
            });
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Create a new product in the database
        const newProduct = await Product.create({
            name,
            category,
            price,
            description,
            condition,
            email,
            number,
            imageURL: imageURL || null,
            seller_id: 1,
            seller_name: 'Test User',
        });

        console.log('New product created:', newProduct); // Log the created product

        res.status(201).json({ message: 'Product created successfully', product: newProduct });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Failed to create product' });
    }
});
module.exports = router;
