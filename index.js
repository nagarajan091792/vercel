const express=require("express");
const app=express();
app.listen(process.env.PORT||3000,function(){
    console.log("server running port 3000")
})