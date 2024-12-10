const DatabaseService = require('./DatabaseService');
const Product = require('./Product');
const dbService = new DatabaseService('../marketplaceDB.db');

const User = dbService.defineModel('User', { // Defines a User table in the SQLite DB
    id: {
        type: dbService.getSequelize().INTEGER,
        primaryKey: true,
    },
    username: {
        type: dbService.getSequelize().STRING,
        allowNull: false
    },
    password: {
        type: dbService.getSequelize().STRING,
        allowNull: false
    },
    phone_number: {
        type: dbService.getSequelize().STRING,
        allowNull: false
    },
    email: {
        type: dbService.getSequelize().STRING,
        allowNull: false
    },
    venmo: {
        type: dbService.getSequelize().STRING,
        allowNull: false,
    },
    name: {
        type: dbService.getSequelize().STRING,
        allowNull: false,
    },
});

module.exports = User;
User.hasMany(Product, { foreignKey: 'id' });
