const DatabaseService = require('./DatabaseService');
const User = require('./User');
const Image = require('./Image');
const dbService = new DatabaseService('../marketplaceDB.db');

const Product = dbService.defineModel('Product', {
    id: {
        type: dbService.getSequelize().INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: { // product title
        type: dbService.getSequelize().STRING,
        allowNull: false,
    },
    category: { // product category
        type: dbService.getSequelize().STRING,
        allowNull: false,
    },
    description: { //description
        type: dbService.getSequelize().TEXT,
        allowNull: true
    },
    price: { //price
        type: dbService.getSequelize().DECIMAL,
        allowNull: false
    },
    seller_id: {// Foreign key to the User table
        type: dbService.getSequelize().INTEGER,
        references: {
          model: User,    
          key: 'id', 
        },
        allowNull: false, 
    },
    seller_name: { //username of user, retrieve from user.js table
        type: dbService.getSequelize().STRING,
        allowNull: false
    },
    imageURL: { //url of product image
        type: dbService.getSequelize().STRING,
        allowNull: true
    },
    condition: { //condition of product
        type: dbService.getSequelize().STRING,
        allowNull: false
    },
    email: { //seller email
        type: dbService.getSequelize().STRING,
        allowNull: false
    },
    number: { // Seller phone number
        type: dbService.getSequelize().STRING, // Changed to STRING to accommodate symbols
        allowNull: false,
        validate: {
            len: [10, 15], // Ensures the phone number is within a reasonable range
        },
    }
});

Product.belongsTo(User, { foreignKey: 'user_id' });

Product.hasMany(Image, { foreignKey: 'product_id' });

module.exports = Product;
