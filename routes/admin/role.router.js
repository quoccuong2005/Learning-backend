const express = require('express');
const router = express.Router();
const roleController = require('../../controllers/admin/role.controllers');

router.get('/', roleController.roles);
router.get("/create", roleController.createRole);
router.post("/create", roleController.createRolePost);
router.get("/edit/:id", roleController.editRole);
router.patch("/edit/:id", roleController.editRolePatch);
router.get("/permissions", roleController.permissions);
router.patch("/permissions", roleController.permissionsPatch);
module.exports = router;