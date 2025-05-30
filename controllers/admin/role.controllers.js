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