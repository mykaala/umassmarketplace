const express = require('express');
const router = express.Router(); // Create a new router instance
const { Product } = require('../models'); 
// app.use(express.json());

// DELETE /cart endpoint to handle removing products from the cart
router.delete('/cart', async (req, res) => {
    try {
        // Extract the productIds array from the request body
        const { productIds } = req.body;

        // Validate the productIds to ensure it's an array and is not empty
        if (!Array.isArray(productIds) || productIds.length === 0) {
            return res.status(400).json({ error: 'Invalid productIds' }); // Return a 400 Bad Request error if validation fails
        }

        // Remove products from the database where the product IDs match the provided productIds array
        const deletedCount = await Product.destroy({
            where: {
                id: productIds,
            },
        });

        if (deletedCount !== productIds.length) { //sanity check
            return res.status(404).json({ error: "Not all products in cart were found in database"});
        }

        // If the operation is successful, return a success response
        res.status(200).json({ message: 'Products removed from cart successfully' });
    } catch (error) {
        // Log the error to the console for debugging purposes
        console.error('Error during checkout:', error);

        // Return a 500 Internal Server Error response if something goes wrong
        res.status(500).json({ error: 'Failed to remove products from cart' });
    }
});
// Export the router so it can be used in other parts of the application
module.exports = router;
