const express = require("express")
const Contenedor = require("./clase4.js")
const fs = require("fs")

const prueba = Contenedor
console.log(prueba)

// const app = express()
// const PORT = 8080

// app.get('/', (request, response) => {
//     response.send(`<h1 style="color: blue; font-family: Roboto">Bienvenidos al servidor express</h1>`)
// })

// app.get('/productos', (request, response) => {
//     const productos = fs.readFileSync("./productos.txt")
//     response.send(productos.toString())
// })

// app.get('/productoRandom', (request, response) => {
//     response.send(`Producto random`)
// })

// const server = app.listen(PORT, ()=>{
//     console.log(`Servidor HTTP escuchando en el puerto ${PORT}`)
// })

// server.on("error", error => console.log(`Error en el servidor: ${error}`))