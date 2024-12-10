const DatabaseService = require('../sequelize-db.js');
const { DataTypes } = require('sequelize');
const Product = require('./Product.js');
const dbService = new DatabaseService('../marketplaceDB.db');

const Image = dbService.defineModel('Image', { // Defines a Image table in the SQLite DB
    image_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image_url: {
        type: DataTypes.STRING,
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});


module.exports = Image;
