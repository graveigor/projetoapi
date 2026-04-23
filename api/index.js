const express = require("express");

const app = express();
const Port = 5001;

app.get("/teste",(req,res)=>{
    res.send("Seja bem vindo ao sistema!")
})

app.listen(Port,()=>{
    console.log(`Servidor Rodando na Porta: ${Port}`)
})