const express = require('express');
const router = express.Router();

const homeController = require('../../controllers/clients/home.controllers.js');

router.get('/', homeController.index);

module.exports = router;