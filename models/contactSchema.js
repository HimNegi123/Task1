const mongoose=require("mongoose"); 
const contactSchema=new mongoose.Schema({
     contact_id:{
          type:Number,
          require:true
     },
    first_name: {
         type: String, 
         required: true
         },
    last_name: {
         type: String, 
         required: true },
    email: { 
        type: String,
         required: true },
    mobile_number: {
         type: String, 
         required: true },
    data_store:
     { type: String,
         enum: ['CRM', 'DATABASE'],
          required: true }
  });
  const contactModel=new mongoose.model('contact',contactSchema); 
  module.exports=contactModel;