const emailField = document.querySelector("#emailLogin");
const emailError = document.querySelector("#emailError");

emailField.addEventListener("blur", function () {
    if (emailField.value == "") {
        emailError.innerHTML = "Complete con su mail";
    }
    else if (!/\S+@\S+\.\S+/.test(emailField.value)) {
        emailError.innerHTML = "Ingrese un correo electrónico válido";

    }
    else {
        emailError.innerHTML = "";
    }
});

const passwordField = document.querySelector("#passwordLogin");
const passwordError = document.querySelector("#passwordError");

passwordField.addEventListener("blur", function () {
    if (passwordField.value == "") {
        passwordError.innerHTML = "Complete con su contraseña";
    } else {
        passwordError.innerHTML = "";
    }
});