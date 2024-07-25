const Admin = require("../models/AdminLogin");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
    try {
        const existingAdmin = await Admin.findOne({ username: req.body.username });
        if (existingAdmin) {
            return res.status(400).json({ error: 'Username already in use' });
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const admin = await Admin.create({ ...req.body, password: hashedPassword });
        res.status(201).json(admin);

        // const hashedPassword = await bcrypt.hash(req.body.password, 10);
        // const admin = await Admin.create({ ...req.body, password: hashedPassword });
        // res.status(201).json(admin);
    } catch (err) {
    }
};

const getAllAdmins = async (req, res) => {
    try {
        const admins = await Admin.find().select("-password");
        res.send(admins);
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    login,
    getAllAdmins,
};
