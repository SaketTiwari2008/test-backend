const express = require("express");
const app = express();

const port = process.env.PORT;

app.get("/", (req, res)=>{
   res.send("<h1>Home</h1>")
})
app.get("/user", (req, res)=>{
   res.send("<h1>User</h1>")
})

app.listen(port, ()=>{
   console.log(`app listening on port ${port}`);
})