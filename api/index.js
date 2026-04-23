const express = require("express");

const app = express();
const Port = 5001;

app.listen(Port,()=>{
    console.log(`Servidor Rodando na Porta:${Port}`)
})