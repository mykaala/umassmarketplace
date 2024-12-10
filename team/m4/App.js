const path = require('path');
const express = require('express'); // Import Express
const bodyParser = require('body-parser'); // Import Body Parser middleware
const cors = require('cors'); // Import CORS middleware
const productRoutes = require('./routes/productRoutes'); // Import Product Routes
const DatabaseService = require('./sequelize-db.js'); // Import Database Service

// Database file path
const databaseFilePath = path.resolve(__dirname, 'marketplaceDB.db');

// Connecting to Database
const databaseService = new DatabaseService(databaseFilePath);

(async () => {
    try {
        // Connects to the database or creates it if it does not exist
        await databaseService.connect();
        console.log("Connected to the database");

        // Initialize Express app
        const app = express();

        // Middleware to parse JSON bodies
        app.use(bodyParser.json());

        // Enable CORS to handle cross-origin requests
        app.use(cors());

        // Sync database models
        const sequelize = databaseService.getSequelize();
        await sequelize.sync({ alter: true }); // Adjusts table to match model
        console.log("Database models synced!");

        // Use product routes
        app.use('/api', productRoutes);

        // Start the server
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (err) {
        console.error('Error during database connection:', err);
    }
})();
