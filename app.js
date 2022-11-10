const http= require('http')
const express = require('express')
const app= express();
const serveR = http.createServer(app);
const fs=require('fs');

const dir = "./json"
serveR.listen(3000)

app.use("/data",(req,res,next) => {
    fs.readFile(dir +"/turkiye.json",(err,json) => {
        if(err){
            res.send("Okunmadı..")
        }else{
            res.send(JSON.parse(json))
        }
    })
    
})
