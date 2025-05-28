const Product = require("../../models/product.model");
module.exports.products = async (req, res) => {
    let find = {
        deleted: "false"
    }

    if (req.query.status) {
        find.status = req.query.status
    }
    // pagination
    let objectPagination = {
        currentPage: 1,
        limitItems: 4
    }
    if (req.query.page) {
        objectPagination.currentPage = parseInt(req.query.page)
    }
    objectPagination.skip = (objectPagination.currentPage - 1) * objectPagination.limitItems;
    const countProduct = await Product.count(find);
    const totalPage = Math.ceil(countProduct / objectPagination.limitItems);
    objectPagination.totalPage = totalPage;

    // end pagination
    const product = await Product.find(find).limit(objectPagination.limitItems).skip(objectPagination.skip);

    res.render("admin/pages/dashboard/products", {
        pageTitle: "Products",
        products: product,
        pagination: objectPagination,
    });
}


