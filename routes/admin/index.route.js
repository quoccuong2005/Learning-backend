const dashboard = require("./dashboard.router");
const products = require("./products.router");
const systemconfig = require("../../config/system");
module.exports = app => {
    PATH_ADMIN = systemconfig.prefixAdmin;
    app.use(PATH_ADMIN + '/dashboard', dashboard);
    app.use(PATH_ADMIN + '/products', products);
}