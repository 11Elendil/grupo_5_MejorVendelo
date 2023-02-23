const express = require('express');
const app = express();

const methodOverride = require("method-override")
const mainRoutes = require("./src/routes/mainRoutes");
const productRoute = require('./src/routes/productRoute');
const userRoutes = require('./src/routes/users');
const apiRoutes = require('./src/routes/apiRoutes');

const session = require("express-session")


const path = require('path');
const publicFolderPath = path.resolve('public');

app.use(session({secret: "buuu"}))
app.use(methodOverride("_method"))

app.use(express.static(publicFolderPath));

app.use(express.urlencoded({extended: false}));
app.use(express.json())

app.set("view engine", "ejs");

app.use("/", mainRoutes);
app.use('/products', productRoute);
app.use('/users',userRoutes);

app.use('/api', apiRoutes);


  
const puerto = 3033 ;
app.listen(puerto, () => console.log("Servidor corriendo en el puerto " + puerto));


