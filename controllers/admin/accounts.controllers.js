const Account = require('../../models/accounts.model');
module.exports.index = async (req, res) => {
    let find = {
        deleted: false
    }
    const record = await Account.find(find)

    res.render("admin/pages/dashboard/accounts", {
        pageTitle: "Accounts",
        records: record,

    })
}

module.exports.createAccount = (req, res) => {
    res.render("admin/pages/dashboard/createaccount", {
        pageTitle: "Create Account",
    })
}