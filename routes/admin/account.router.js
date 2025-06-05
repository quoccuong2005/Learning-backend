const express = require('express');
const router = express.Router();
const accountsController = require('../../controllers/admin/accounts.controllers');

router.get('/', accountsController.index);
router.get("/create", accountsController.createAccount);

module.exports = router;