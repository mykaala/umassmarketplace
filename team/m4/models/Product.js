const { DataTypes } = require('sequelize');
const DatabaseService = require('../sequelize-db.js');
const dbService = new DatabaseService('../marketplaceDB.db');

const Product = dbService.defineModel('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    seller_id: {
        type: DataTypes.INTEGER, 
        allowNull: false,
    },
    seller_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imageURL: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Product;