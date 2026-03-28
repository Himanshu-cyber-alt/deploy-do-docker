import express from "express"
const app = express();
const PORT = 8000;






app.get("/",(req,res)=>{
return res.send({message : "Hello from the Docker v1"});
});








app.listen(PORT,()=>{
console.log(`server is running on ${PORT}`);
});
