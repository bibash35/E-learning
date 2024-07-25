const mongoose = require("mongoose");

const AdminLoginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const Admin = mongoose.model("Admin", AdminLoginSchema);
module.exports = Admin;
