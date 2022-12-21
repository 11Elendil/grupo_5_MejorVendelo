const users = require('../data/users.json');
const bcrypt = require('bcrypt');

module.exports = function validacionesLogin(req, res, next) {
  // Verifica si req.body existe y si tiene una propiedad email y password
  if (!req.body || !req.body.email || !req.body.password) {
    return res.status(400).json({ message: "Faltan campos en la solicitud" });
  }

  // Obtiene el correo electrónico y la contraseña del cuerpo de la solicitud

  var email = req.body.email;
  var password = req.body.password;

  // Busca el usuario en el archivo JSON
  var user = users.find(u => u.email == email);

  // Si el usuario no existe, envía un mensaje de error
  if (!user) {
    return res.status(401).json({ message: "Email o contraseña incorrectos" });
  }

  // Compara la contraseña enviada por el usuario con la contraseña hasheada del archivo JSON
  
  bcrypt.compare(password, user.password, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Error al validar la contraseña"});
    }

    if (result) {
        res.redirect('/');
      // Si son iguales, llama a la función next() para continuar con el proceso
      //next();
    } else {
      // Si no son iguales, envía un mensaje de error
      res.status(401).json({ message: "Email o contraseña incorrectos ACAAA" });
    }
  });
};
