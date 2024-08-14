const mongoose=require("mongoose");

const{Schema}=mongoose;

const UserSchema=new Schema({
Username: String,

  email: {
    type: String,
  },
  
    message:{
        type:String,
    },
    
   
},

)


const User = mongoose.model('User', UserSchema);
module.exports=User;

