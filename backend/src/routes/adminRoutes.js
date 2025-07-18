const express = require('express');
const AdminController = require('../controllers/adminController');

const router = express.Router();
const adminController = new AdminController();

// Admin routes
router.post('/add-product', adminController.addProduct);
router.put('/update-product/:id', adminController.updateProduct);
router.delete('/delete-product/:id', adminController.deleteProduct);
router.get('/products', adminController.getAllProducts);
router.get('/product/:id', adminController.getProductById);
router.get('/orders', adminController.getAllOrders);
router.get('/order/:id', adminController.getOrderById);
router.delete('/order/:id', adminController.deleteOrder);

module.exports = router;