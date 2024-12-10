// Import necessary modules
const express = require('express');
const router = express.Router();
const { Product } = require('../models'); // Import the Product model

// Endpoint to fetch all products

// Endpoint to fetch a single product by ID
router.get('/:id', async (req, res) => {
    try {
        // Parse the product ID from the request parameters
        const productId = parseInt(req.params.id, 10);

        // Fetch the product from the database using its primary key
        const product = await Product.findByPk(productId);

        // If the product is not found, return a 404 error
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Send the product as a JSON response
        res.json(product);
    } catch (error) {
        // Log and handle errors that occur during the fetch
        console.error('Error fetching product:', error);
        res.status(500).json({ error: 'Failed to fetch product' });
    }
});

// Export the router to be used in the application
module.exports = router;
