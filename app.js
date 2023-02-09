const express = require('express');
const app = express();

const methodOverride = require("method-override")
const mainRoutes = require("./src/routes/mainRoutes");
const productRoute = require('./src/routes/productRoute');
const userRoutes = require('./src/routes/users');

<<<<<<< HEAD
const mainRoutes = require("./routes/mainRoutes")
const productRoute = require('./routes/productRoute')
const methodOverride =  require('method-override');
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
=======
const session = require("express-session")

>>>>>>> fc3b3eec7cc0491ae6f44fda5758127c99f6138f

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




  
const puerto = 3033 ;
app.listen(puerto, () => console.log("Servidor corriendo en el puerto " + puerto));


