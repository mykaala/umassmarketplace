const DatabaseService = require('./DatabaseService');
const Product = require('./Product');
const dbService = new DatabaseService('../marketplaceDB.db');

const Image = sequelize.define('Image', {
    image_id: {
      type: dbService.getSequelize().INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image_url: {
        type: dbService.getSequelize().STRING,
    },
    product_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Product,    
          key: 'id', 
        },
        allowNull: false,
    }
});

Image.belongsTo(Product, { foreignKey: 'product_id' });

module.exports = Image;
