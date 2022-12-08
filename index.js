const express=require("express");
const app=express();
as.get("/", (req, res) =>
  res.send(`Server Active`)
);
app.listen(process.env.PORT||3000
)