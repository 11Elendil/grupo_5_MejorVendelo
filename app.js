const express = require('express');
const app = express();


const mainRoutes = require("./src/routes/mainRoutes");
const productRoute = require('./src/routes/productRoute');
const userRoutes = require('./src/routes/users');


const path = require('path');
const publicFolderPath = path.resolve('public');

app.use(express.static(publicFolderPath));

app.set("view engine", "ejs");

app.use("/", mainRoutes);
app.use('/products', productRoute);
app.use('/users',userRoutes);

const puerto = 3033 ;
app.listen(puerto, () => console.log("Servidor corriendo en el puerto " + puerto));


