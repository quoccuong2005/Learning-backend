const mongoose = require("mongoose");
const generateRandomString = require("../helper/generate")
const accountsSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    token: {
        type: String,
        default: generateRandomString(20)
    },
    phone: String,
    avatar: String,
    role_id: String,
    status: String,
    deleted: {
        type: Boolean,
        default: false,
    },
    deletedAt: Date,

}, {
    timestamps: true
}
);
const Accounts = mongoose.model('Accounts', accountsSchema, 'accounts');
module.exports = Accounts;