const DatabaseService = require('./sequelize-db.js');
const dbService = new DatabaseService('./marketplaceDB.db');

const User = require('./models/User.js');
const Product = require('./models/Product.js');
const Image = require('./models/Image.js');

// Sync all models
async function sync() {
  await dbService.syncModels();
}

module.exports = { User, Product, Image, sync };
