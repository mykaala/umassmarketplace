const express = require('express');
const router = express.Router();
const { Product } = require('../models');


router.get('/my-prods', async (req, res) => {
    try {
        // Get user_id from query parameters
        const userId = req.query.user_id;

        if (!userId) {
            return res.status(400).json({ error: 'user_id is required' });
        }

        // Find products where seller_id matches the user_id
        const products = await Product.findAll({
            where: {
                seller_id: userId,
            },
        });

        return res.status(200).json(products);
    } catch (error) {
        console.error('Error retrieving products:', error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});