// models/associations.js
module.exports = (db) => {
    const {
      User, Product, Category, Material,
      Cart, Order, Payment, Voucher, Feedback
    } = db;
  
    // User relations
    User.hasMany(Cart);
    Cart.belongsTo(User);
  
    User.hasMany(Order);
    Order.belongsTo(User);
  
    User.hasMany(Payment);
    Payment.belongsTo(User);
  
    User.hasMany(Voucher);
    Voucher.belongsTo(User);
  
    User.hasMany(Feedback);
    Feedback.belongsTo(User);
  
    // Product relations
    Product.belongsTo(Category);
    Category.hasMany(Product);
  
    Product.belongsTo(Material);
    Material.hasMany(Product);
  
    Product.hasMany(Feedback);
    Feedback.belongsTo(Product);
  
    // Cart - Product M:N
    Cart.belongsToMany(Product, { through: 'CartProduct' });
    Product.belongsToMany(Cart, { through: 'CartProduct' });
  
    // Order - Product M:N
    Order.belongsToMany(Product, { through: 'OrderProduct' });
    Product.belongsToMany(Order, { through: 'OrderProduct' });
  
    // Voucher - Order M:N
    Voucher.belongsToMany(Order, { through: 'OrderVoucher' });
    Order.belongsToMany(Voucher, { through: 'OrderVoucher' });
  };
  