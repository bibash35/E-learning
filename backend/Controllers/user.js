const User = require("../models/User");

const signup = async (req, res, next) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(409).json({ error: 'Email already in use' });
    }

    
    let user = await User.create({
      Username: req.body.Username,
      email: req.body.email,
      message: req.body.message,  
    });

    res.send(user);
  } catch (err) {
    next(err);
  }
};


 
  module.exports = {
    signup,
  };