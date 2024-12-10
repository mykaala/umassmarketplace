const DatabaseService = require('./DatabaseService');
const User = require('./User');
const Image = require('./Image');
const dbService = new DatabaseService('../marketplaceDB.db');

const Product = dbService.defineModel('Product', { // Defines a Product table in the SQLite DB
    id: {
        type: dbService.getSequelize().INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: dbService.getSequelize().STRING,
        allowNull: false,
    },
    description: {
        type: dbService.getSequelize().TEXT,
        allowNull: false
    },
    price: {
        type: dbService.getSequelize().DECIMAL,
        allowNull: false
    },
    seller_id: {
        type: dbService.getSequelize().INTEGER,
        references: {
          model: User,    
          key: 'id', 
        },
        allowNull: false, 
    },
    seller_name: {
        type: dbService.getSequelize().STRING,
        allowNull: false
    },
    imageURL: {
        type: dbService.getSequelize().STRING,
        allowNull: false
    }
});

Product.belongsTo(User, { foreignKey: 'user_id' });

Product.hasMany(Image, { foreignKey: 'product_id' });

module.exports = Product;
