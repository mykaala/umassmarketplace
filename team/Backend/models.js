const DatabaseService = require('./DatabaseService');
const dbService = new DatabaseService('./database.sqlite');

const User = require('./models/User');
const Product = require('./models/Product');
const Image = require('./models/Image');

// Sync all models
async function sync() {
  await dbService.syncModels();
}

module.exports = { User, Product, Image, sync };
