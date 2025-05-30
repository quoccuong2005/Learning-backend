const express = require('express');
const router = express.Router();
const roleController = require('../../controllers/admin/role.controllers');

router.get('/', roleController.roles);
router.get("/create", roleController.createRole);
router.post("/create", roleController.createRolePost);
module.exports = router;