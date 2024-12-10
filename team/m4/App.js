const path = require('path');
const express = require('express');// Import Express
const bodyParser = require('body-parser');
const productRoutes = require('./controllers/express-products.js'); // Import your routes
const cors = require('cors'); // Import CORS middleware
// const productRoutes = require('./routes/productRoutes'); // Import Product Routes
const DatabaseService = require('./sequelize-db.js'); // Import Database Service

// Database file path
const databaseFilePath = path.resolve(__dirname, 'marketplaceDB.db');

// Connecting to Database
const databaseService = new DatabaseService(databaseFilePath);

(async () => {
    try {
        // Connect to database or create it if it does not exist
        await databaseService.connect();
        console.log("Connected to the database");

        // Sync the models
        await databaseService.syncModels();
        console.log("Models synchronized successfully!");
    } catch (err) {
        console.error('Error during database connection:', err);
        process.exit(1); // Exit the process if database connection fails
    }
})();

// Create an Express app
const app = express();

app.use(bodyParser.json()); // Parse JSON bodies
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files
app.use(cors());
// Routes
app.use('/api/products', productRoutes);

// Define a default route
app.get('/', (req, res) => {
    res.send('Welcome to the Marketplace API!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
