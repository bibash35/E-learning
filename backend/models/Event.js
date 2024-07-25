const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema({
  
  course: {
    type: String,
    required: true,
  },
  task: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  
 
  thumbnail: {
    type: String,
    required: true,
  },
},{timestamps:true});

exports.Event = mongoose.model("Event", eventSchema);
