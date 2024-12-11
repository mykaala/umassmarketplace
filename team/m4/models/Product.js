const { DataTypes } = require('sequelize');
const DatabaseService = require('../sequelize-db.js');
const dbService = new DatabaseService('../marketplaceDB.db');

const Product = dbService.defineModel('Product', {
    id: { // Primary key for each row in the Product table
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: { // Product name
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: { // Product category
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: { // Product description
        type: DataTypes.TEXT,
        allowNull: true,
    },
    price: { // Product price
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    condition: { // Product condition (new or used)
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: { // Seller email
        type: DataTypes.STRING,
        allowNull: true,
    },
    number: { // Seller phone number
        type: DataTypes.STRING,
        allowNull: true,
    },
    imageURL: { // Optional product image URL
        type: DataTypes.STRING,
        allowNull: true,
    },
    seller_id: { //the user id of the user who posted, retrieved from User table
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    seller_name: { //the user name of the user who posted, retrieved from User table
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Product;


