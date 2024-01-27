const express=require("express"); 
const dbConnection = require("./dbConnection");
const app=express(); 
const contactRoute=require("./routes/contactRoute")
const port=process.env.PORT ||4000;
dbConnection();

//middlewares 
app.use(express.json());

//routes
app.use('',contactRoute);

//port connection 
app.listen(port,(err)=>{
    if(!err) console.log(`Server is running in ${port}`); 
    else console.log(err); 
})