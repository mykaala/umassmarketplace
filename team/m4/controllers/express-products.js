const express = require('express');
const router = express.Router();
const { Product } = require('../models');

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

module.exports = router;
