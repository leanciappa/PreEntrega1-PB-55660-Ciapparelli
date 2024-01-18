const productManager = require ("./desafio3")

const express = require ("express");
const app = express ();

app.get ("/ping", (req, res)=>{
    res.send("pong")
})

app.listen (3000, ()=> {
    console.log ("Aplicación funcionando en el puerto 3000")

})