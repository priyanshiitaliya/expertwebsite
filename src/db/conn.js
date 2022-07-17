const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/expert").
then(()=>{
    console.log("connection successful");
}).
catch((err)=>{
    console.log(err);
})

