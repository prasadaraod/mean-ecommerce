const express = require('express');
const ProductController = require('../controllers/productController');

const router = express.Router();
const productController = new ProductController();

// Define routes for product management
router.post('/', productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;