const path = require('path');
const DatabaseService = require('./sequelize-db.js');

// Database file path
const databaseFilePath = path.resolve(__dirname, 'marketplaceDB.db');

// Connecting to Database
const databaseService = new DatabaseService(databaseFilePath);

(async () => {
    try {
        // Connects to database or creates it if it does not exist
        await databaseService.connect();
        console.log("Connected to the database");
    } catch (err) {
        console.error('Error during database connection:', err);
    }
})();