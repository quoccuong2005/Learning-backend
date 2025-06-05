const dashboard = require("./dashboard.router");
const products = require("./products.router");
const role = require("./role.router");
const accounts = require("./account.router");
const systemconfig = require("../../config/system");
module.exports = app => {
    PATH_ADMIN = systemconfig.prefixAdmin;
    app.use(PATH_ADMIN + '/dashboard', dashboard);
    app.use(PATH_ADMIN + '/products', products);
    app.use(PATH_ADMIN + '/roles', role);
    app.use(PATH_ADMIN + "/accounts", accounts)
}