import express from "express"
const app = express();
const PORT = 8000;






app.get("/",(req,res)=>{
return res.send({message : "Hello from the Docker v2"});
});

app.get("/home",(req,res)=>{
    return res.render(`<h1>Hello From Docker</h1>`);
})







app.listen(PORT,()=>{
console.log(`server is running on ${PORT}`);
});
