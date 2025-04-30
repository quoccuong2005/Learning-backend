const products = require("./product.route.js");
const home = require("./home.route.js");
module.exports = app => {
    app.use('/', home);
    app.use('/product', products);

}