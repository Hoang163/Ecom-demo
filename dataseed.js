const db = require('./models');

async function seedData() {
  await db.sequelize.sync({ force: true }); // Xóa và tạo lại bảng

  // Tạo Categories
  const category = await db.Category.create({ name: 'Electronics', description: 'Electronic gadgets' });

  // Tạo Materials
  const material = await db.Material.create({ name: 'Plastic', description: 'Plastic material' });

  // Tạo Users
  const user = await db.User.create({
    fullname: 'Nguyen Van A',
    email: 'a@example.com',
    phone_num: '0123456789',
    dob: new Date(1990, 1, 1),
    avatar: 'avatar1.png',
    role: 'customer'
  });

  // Tạo Products
  const product1 = await db.Product.create({
    name: 'Smartphone X',
    price: 499.99,
    description: 'High-end smartphone',
    total: 100,
    image: 'smartphone.png',
    CategoryId: category.id,
    MaterialId: material.id
  });

  const product2 = await db.Product.create({
    name: 'Headphones Y',
    price: 99.99,
    description: 'Noise-canceling headphones',
    total: 50,
    image: 'headphones.png',
    CategoryId: category.id,
    MaterialId: material.id
  });

  // Tạo Cart
  const cart = await db.Cart.create({ UserId: user.id, total_quantity: 3 });
  await cart.addProduct(product1);
  await cart.addProduct(product2);

  // Tạo Order
  const order = await db.Order.create({
    UserId: user.id,
    total_price: 599.98,
    date: new Date(),
    status: 'pending'
  });
  await order.addProduct(product1, { through: { quantity: 1, price: 499.99 } });
  await order.addProduct(product2, { through: { quantity: 1, price: 99.99 } });

  // Tạo Payment
  await db.Payment.create({
    UserId: user.id,
    method: 'credit_card',
    amount: 599.98,
    date: new Date()
  });

  // Tạo Voucher
  const voucher = await db.Voucher.create({
    code: 'DISCOUNT10',
    discount: 10,
    status: 'active',
    UserId: user.id
  });
  await order.addVoucher(voucher);

  // Tạo Feedback
  await db.Feedback.create({
    comment: 'Very good product!',
    rate_star: 5,
    UserId: user.id,
    ProductId: product1.id
  });

  console.log('✅ Seed data inserted successfully');
}

seedData().catch(console.error);
