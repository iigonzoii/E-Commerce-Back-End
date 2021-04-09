// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    // unique: false
  },
  // just like making queries in mysql we are making a variable/alias with "as" 
    // as: 'product_tags'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    // unique: false
  },
  // as: 'tag_info'
});

// we export multiple models together as an object so we can import them together and use their names as reference

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
