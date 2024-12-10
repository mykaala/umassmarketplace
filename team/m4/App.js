const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const DatabaseService = require('./sequelize-db.js');
const productRoutes = require('./controllers/express-products.js');
const cartRoutes = require('./controllers/express-cart.js');
const detailsRoutes = require('./controllers/express-details.js');

// Database file path
const databaseFilePath = path.resolve(__dirname, 'marketplaceDB.db');
const app = express();

// Connecting to Database
const databaseService = new DatabaseService(databaseFilePath);

(async () => {
	try {
		// Connect to database or create it if it does not exist
		await databaseService.connect();
		console.log('Connected to the database');

		// Sync the models
		await databaseService.syncModels();
		console.log('Models synchronized successfully!');
	} catch (err) {
		console.error('Error during database connection:', err);
		process.exit(1); // Exit the process if database connection fails
	}
})();

app.use(bodyParser.json()); // Parse JSON bodies

// Routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/details', detailsRoutes);

// Serve all files in the m3 directory as static files
app.use(express.static(path.join(__dirname, '../m3')));

// Wildcard route: if no other route matches, serve home.html
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../m3/home-and-profile/home-src/home.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
