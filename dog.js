fetch("https://test-backend-qicl.onrender.com/user")
.then((err, res)=>{
   if(err) throw err;
   console.log(res);
   return res;
}).then((err, data)=>{
   if(err) throw err;
   console.log(data);
}).catch(err)(
   console.log(err)
)