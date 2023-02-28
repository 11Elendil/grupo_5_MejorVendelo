const bcrypt = require('bcryptjs');
let db = require("../../db/models")


module.exports = async function validacionesLogin(req, res, next) {

  const usersFromDB = await db.User.findAll();

  // Verifica si req.body existe y si tiene una propiedad email y password
  if (!req.body || !req.body.email || !req.body.password) {
    return res.status(400).json({ message: "Faltan campos en la solicitud" });
  }

  // Obtiene el correo electrónico y la contraseña del cuerpo de la solicitud

  var email = req.body.email;
  var password = req.body.password;

  // Busca el usuario en el archivo JSON
  var user = usersFromDB.find(u => u.email == email);

  // Si el usuario no existe, envía un mensaje de error
  if (!user) {
    return res.render('users/login', { error: "No existe el usuario"})
  }

  // Compara la contraseña enviada por el usuario con la contraseña hasheada del archivo JSON
  
  bcrypt.compare(password, user.password, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error al validar la contraseña"});
    }

    if (result) {
        //res.redirect('/');
      // Si son ig9uales, llama a la función next() para continuar con el proceso
        next();
    } else {
      // Si no son iguales, envía un mensaje de error
      res.render('users/login', { error: "Contraseña incorrecta"})
      
      
    }
  });
};
