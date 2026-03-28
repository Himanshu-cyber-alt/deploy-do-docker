import express from "express"
const app = express();
const PORT = 8000;






app.get("/",(req,res)=>{
return res.send({message : "Hello from the Docker v3"});
});

app.get("/home",(req,res)=>{
    return res.send(`Hello From Docker`);
})

app.get("/docker",(req,res)=>{
    return res.send("lets check again for render are you deploy properly this is form Docker")
})





app.listen(PORT,()=>{
console.log(`server is running on ${PORT}`);
});
