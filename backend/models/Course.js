const mongoose = require("mongoose");
const { Schema } = mongoose;

const courseSchema = new Schema({
  
  course: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  involved: {
    type: String,
    required: true,
  },
  
  thumbnail: {
    type: String,
    required: true,
  },
},{timestamps:true});

exports.Course = mongoose.model("Course", courseSchema);
