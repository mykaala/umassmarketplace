// Temporary in-memory storage (just for testing, replace with database later)
let products = [];

const createProduct = (req, res) => {
    try {
        const { name, category, price, description, condition, email, number, imageURL } = req.body;

        // Log the received data
        console.log('Product data received:', req.body);

        // Check if all required fields are present
        if (!name || !category || !price || !condition || !email || !number) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Create a new product object
        const newProduct = {
            id: products.length + 1, // Generate a simple ID for testing
            name,
            category,
            price,
            description,
            condition,
            email,
            number,
            imageURL: imageURL || null, // Optional image
        };

        // Add the product to the in-memory list (replace this with database later)
        products.push(newProduct);

        // Send a success response
        res.status(201).json({ message: 'Product created successfully', product: newProduct });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports = { createProduct };

