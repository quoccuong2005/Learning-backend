const express = require('express');
const router = express.Router();

const ProductsControllers = require('../../controllers/admin/products.controllers.js');

router.get('/', ProductsControllers.products);

module.exports = router;