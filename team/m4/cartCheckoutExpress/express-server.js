const express = require('express');
const router = express.Router();
const Product = require('./Product'); // Assuming Product model is set up correctly
app.use(express.json());

// DELETE /cart/checkout
router.delete('/cart', async (req, res) => {
    try {
        const { productIds } = req.body;  // Only extract productIds from the request body

        if (!Array.isArray(productIds) || productIds.length === 0) {
            return res.status(400).json({ error: 'Invalid productIds' });
        }

        await Product.destroy({
            where: {
                id: productIds,  // Remove all products whose ids are in the productIds array
            },
        });

        res.status(200).json({ message: 'Products removed from cart successfully' });
    } catch (error) {
        console.error('Error during checkout:', error);
        res.status(500).json({ error: 'Failed to remove products from cart' });
    }
});


module.exports = router;
