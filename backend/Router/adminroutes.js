const express = require("express");
const { login, getAllAdmins } = require("../Controllers/AdminController");
const checkValidationSchema = require("../Middleware/checkValidationSchema");
const Joi = require("joi");

const router = express.Router();

const loginValidationSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(8).required(),
});

router.post("/adminlogin", checkValidationSchema(loginValidationSchema), login);
router.get("/getAllAdmins", getAllAdmins);

module.exports = { router };
