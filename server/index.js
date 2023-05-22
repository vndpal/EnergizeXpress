const express = require("express");

const port = 3200;

const app = express();


app.get('/test',(req,res)=>{
    res.send({data:'message from server'});
})

app.listen(port,()=>
{
    console.log(`app is running on ${port}`);
})