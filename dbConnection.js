const mongoose=require("mongoose");
async function dbConnection(){
await mongoose.connect("mongodb+srv://hnegi8984:himayu098+@cluster0.stu8mht.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("database is connected");
}
).catch(()=>{
    console.log("connection probelm");
}  );
}
module.exports=dbConnection;