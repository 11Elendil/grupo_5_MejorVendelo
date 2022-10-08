const express = require('express');
const app = express();

const path = require('path');
const publicFolderPath = path.resolve('public')
app.use(express.static(publicFolderPath));

app.listen(3033, () => console.log("Servidor corriendo"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve("views/register.html"));
})