const mongoose=require("mongoose");

const{Schema}=mongoose;

const FAQSchema=new Schema({
  question: {
    type: String,
   
  },
    answer:{
        type:String,
    },    
   
},

)


const FAQ = mongoose.model('FAQ', FAQSchema);
module.exports=FAQ;

