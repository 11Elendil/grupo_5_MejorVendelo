window.addEventListener('load', function() {

   
 
// Nombre

    // Nombre
    const nameField = document.querySelector("#firstName");
    const nameError = document.querySelector("#name-error");

    nameField.addEventListener("blur", function() {
        if (nameField.value.length < 2) {
            nameError.innerHTML = "El nombre debe tener 2 caracteres minimo";
        } else {
            nameError.innerHTML = "";
        }
    });



// Email
var emailField = document.getElementById("email");
emailField.addEventListener("blur", function() {
  if (!/^\S+@\S+\.\S+$/.test(emailField.value)) {
    alert("Ingresa un correo valido");
    document.getElementById("submit-button").disabled = true;
  } else {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        if (this.responseText == "invalid") {
          alert("El correo ya esta en uso");
          document.getElementById("submit-button").disabled = true;
        } else {
          document.getElementById("submit-button").disabled = false;
        }
      }
    };
    xhttp.open("GET", "verify_email.php?email=" + emailField.value, true);
    xhttp.send();
  }
});

// Contraseña
var passwordField = document.getElementById("password");
passwordField.addEventListener("blur", function() {
  if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/.test(passwordField.value)) {
    alert("La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas y un caracter especial");
    document.getElementById("submit-button").disabled = true;
  } else {
    document.getElementById("submit-button").disabled = false;
  }
});

// Imagen
var imageField = document.getElementById("image");
imageField.addEventListener("change", function() {
  var extension = imageField.value.split(".").pop();
  if (!/^(jpg|png|gif|jpeg)$/.test(extension)) {
    alert("Solo se permiten imágenes en formato JPG, PNG, GIF o JPEG");
    document.getElementById("submit-button").disabled = true;
  } else {
    document.getElementById("submit-button").disabled = false;
  }
});
});