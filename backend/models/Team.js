const mongoose = require("mongoose");
const { Schema } = mongoose;

const teamSchema = new Schema({
  
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  
  thumbnail: {
    type: String,
    required: true,
  },
},{timestamps:true});
exports.Team = mongoose.model("Team", teamSchema);
