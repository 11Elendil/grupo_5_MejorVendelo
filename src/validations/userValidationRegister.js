window.addEventListener('load', function() {

   
 


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
    
    // Apellido
    const lastNameField = document.querySelector("#lastName");
    const lastNameError = document.querySelector("#lastName-error");
    
    lastNameField.addEventListener("blur", function() {
    if (lastNameField.value.length < 2) {
    lastNameError.innerHTML = "El apellido debe tener 2 caracteres minimo";
    } else {
    lastNameError.innerHTML = "";
    }
    });
    
    // Email
    
      // Validación de email
      const emailField = document.querySelector("#email");
      const emailError = document.querySelector("#email-error");
    
      emailField.addEventListener("blur", function() {
        // Verifica si el correo electrónico es válido
        if (!/\S+@\S+\.\S+/.test(emailField.value)) {
          emailError.innerHTML = "Ingrese un correo electrónico válido";
        } else {
          // Verifica si el correo electrónico existe en la base de datos
          // Se puede hacer una consulta ajax o usar algún otro método para verificar si existe en la base de datos
          emailError.innerHTML = "";
        }
      });
    
    
    
    // Contraseña
    const passwordInput = document.querySelector("#password");
    const passwordError = document.querySelector("#password-error");
    
    passwordInput.addEventListener("blur", function() {
        if (passwordInput.value.length < 8) {
            passwordError.innerHTML = "La contraseña debe tener al menos 8 caracteres";
        } else {
            passwordError.innerHTML = "";
        }
    });
    
    
    // Imagen
    // Validación de formato de imagen en el lado del cliente
    function validateImage(input) {
      const image = input.files[0];
      const allowedTypes = ['jpg', 'jpeg', 'png', 'gif'];
      const imageType = image.name.split('.').pop().toLowerCase();
    
      if (!allowedTypes.includes(imageType)) {
        alert('Deberá ser un archivo válido (JPG, JPEG, PNG, GIF)');
        return false;
      }
    
      return true;
    }
    
    // Asociar la validación de la imagen con el evento onsubmit del formulario
    const form = document.getElementById('myForm');
    form.onsubmit = function(event) {
      const input = document.getElementById('image');
      if (!validateImage(input)) {
        event.preventDefault();
      }
    };
    });