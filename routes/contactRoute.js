const express=require("express"); 
const route=express.Router(); 
const {createContact,getContact,updateContact,deleteContact}=require("../controller/contactController")
route.post('/createContact',createContact); 
route.get('/getContact',getContact); 
route.post('/updateContact',updateContact);
route.post('/deleteContact',deleteContact);

module.exports=route;