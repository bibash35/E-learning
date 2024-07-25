const { signup } = require("../Controllers/user");
const express = require("express");
const checkValidationSchmea = require("../Middleware/checkValidationSchema");
const Joi = require("joi");

const router = express.Router();

const signupValidationSchema = Joi.object({
    Username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
     
  });

  
router.post("/signup",checkValidationSchmea(signupValidationSchema),signup);

module.exports = { router };
