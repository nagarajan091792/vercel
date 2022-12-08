const express=require("express");
const app=express();
app.get("/", (req, res) =>
  res.send(`Server Active`)
);

app.listen(process.env.PORT || 3000)