const Role = require("../../models/role-model");
module.exports.roles = async (req, res) => {
    let find = {
        deleted: false,
    }
    const records = await Role.find(find)
    res.render("admin/pages/dashboard/role", {
        pageTitle: "Roles",
        records: records,
    });
}

module.exports.createRole = async (req, res) => {


    res.render("admin/pages/dashboard/createrole", {
        pageTitle: "Create Roles",

    });
}

module.exports.createRolePost = async (req, res) => {
    console.log(req)
    const { title, description } = req.body;
    const role = new Role({
        title: title,
        description: description,
    });
    await role.save();

    console.log(req.body);
    res.redirect("/admin/roles");
}

module.exports.editRole = async (req, res) => {
    try {
        const id = req.params.id;
        let find = {
            _id: id,
            deleted: false,
        }
        const record = await Role.findById(find);
        console.log(record);
        if (!record) {
            return res.status(404).send("Role not found");
        }
        res.render("admin/pages/dashboard/editrole", {
            pageTitle: "Edit Role",
            record: record,
        });
    }
    catch (error) {
        res.redirect("/admin/roles");
    }

}

module.exports.editRolePatch = async (req, res) => {
    const id = req.params.id;
    await Role.updateOne({ _id: id }, req.body);
    res.redirect("back");
}

module.exports.permissions = async (req, res) => {
    let find = {
        deleted: false,
    }
    const records = await Role.find(find);

    res.render("admin/pages/dashboard/permissions", {
        pageTitle: "Permissions",
        records: records,
    });
}
module.exports.permissionsPatch = async (req, res) => {
    const permissions = JSON.parse(req.body.permissions);
    console.log(permissions);
    for (const permission of permissions) {
        const { id, permissions: perms } = permission;
        await Role.updateOne({ _id: id }, { permissions: perms });
    }
    res.redirect("/admin/roles/permissions");
}