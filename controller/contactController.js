const contactDb=require("../models/contactSchema");

const createContact=async function(req,res){
const data=req.body;
if(data.data_store==="CRM"){
    res.end("CRM error");
}
else{
   const count = await contactDb.countDocuments({});
   console.log(count)
         if(count===0){
           await contactDb.create(
     {
        contact_id:1,
        first_name:data.first_name,
        last_name:data.last_name,
        email:data.email,
        mobile_number:data.mobile_number,
        data_store:data.data_store    
    }
         )}
         else{
           await contactDb.create(
     {  contact_id:count+1,
        first_name:data.first_name,
        last_name:data.last_name,
        email:data.email,
        mobile_number:data.mobile_number,
        data_store:data.data_store   
          }
            );
         }
    res.end("saved")
} 
}

 const getContact=async function(req,res){
 const data=req.body.contact_id; 
const userContact=await contactDb.findOne({contact_id:data});
res.send(userContact);
}

const updateContact=async function(req,res){
    const data=req.body;
   await contactDb.updateOne(
        { contact_id: data.contact_id },
        { $set: { phone_number: data.phone_number, email: data.email} }
      )
        .then(result => {
         res.send("document updated")
        })
        .catch(err => {
         res.send("faild to update document");
        });
}
const deleteContact=async function(req,res){
    const data=req.body.contact_id;
    contactDb.deleteOne({ contact_id: data })
    .then(result => {
      res.send("document deleted")
    })
    .catch(err => {
      res.send(err);
    });
}



module.exports={createContact,getContact,updateContact,deleteContact}