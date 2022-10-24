const express = require('express');
const app = express();

const path = require('path');
const publicFolderPath = path.resolve('public')
app.use(express.static(publicFolderPath));

app.listen(3033, () => console.log("Servidor corriendo"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("views/index.html"));
})
app.get("/login", (req, res) => {
    res.sendFile(path.resolve("views/login.html"));
})
app.get("/register", (req, res) => {
    res.sendFile(path.resolve("views/register.html"));
})
app.get("/productCart", (req, res) => {
    res.sendFile(path.resolve("views/productCart.html"));
})
app.get("/productDetail", (req, res) => {
    res.sendFile(path.resolve("views/productDetail.html"));
})
