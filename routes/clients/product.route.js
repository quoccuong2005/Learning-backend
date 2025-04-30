const express = require('express');
const router = express.Router();

const productController = require('../../controllers/clients/product.controller');

router.get('/', productController.product);

module.exports = router;