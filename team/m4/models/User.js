const DatabaseService = require('./DatabaseService');
const Product = require('./Product');
const dbService = new DatabaseService('../marketplaceDB.db');

const User = dbService.defineModel('User', {
    id: {
        type: dbService.getSequelize().INTEGER,
        primaryKey: true,
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

User.hasMany(Product, { foreignKey: 'user_id' });
