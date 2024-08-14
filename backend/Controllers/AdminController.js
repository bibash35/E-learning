const Admin = require("../models/AdminLogin");
const bcrypt = require("bcrypt");


// const login = async (req, res) => {
//     try {
//         const { username, password } = req.body;

//         // Check if the username and password are "admin"
//         if (username === "admin" && password === "admin") {
//             const existingAdmin = await Admin.findOne({ username });

//             if (!existingAdmin) {
//                 const hashedPassword = await bcrypt.hash(password, 10);
//                 const admin = await Admin.create({ username, password: hashedPassword });
//                 res.status(201).json(admin);
//             } else {
//                 res.status(200).json(existingAdmin);
//             }
//         } else {
//             res.status(400).json({ error: 'Invalid username or password' });
//         }
//     } catch (err) {
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (username === "admin" && password === "admin") {
            const hashedPassword = await bcrypt.hash(password, 10);
            res.status(200).json({ username, password: hashedPassword });
        } else {
            res.status(400).json({ error: 'Invalid username or password' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
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
const deleteAllAdmins = async (req, res) => {
    try {
        await Admin.deleteMany({});
        res.status(200).json({ message: 'All admins deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    login,
    getAllAdmins,
    deleteAllAdmins,

};
