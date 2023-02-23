// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


// Products belongsTo Category
Product.belongsTo(Category,function(event){
  forighnKey = category_id;
})
       
// Categories have many Products
Category.hasMany(Products,function(event){
  forighnKey = category_id;
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tags,function(event){
  forighnKey :product_id;
  through: ProductTag;
})
// Tags belongToMany Products (through ProductTag)
Tags.belongsTo(Category,function(event){
  forighnKey : tag_id;
  through: ProductTag;
})
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
