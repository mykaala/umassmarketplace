const express = require('express'); // Import Express library
const { createProduct } = require('../controllers/productController'); // We'll create this controller next

const router = express.Router();

// Route for creating a product
router.post('/products', createProduct);

module.exports = router; // Export the router
