const registerBtn = document.querySelector(".register-btn");

const imputUser = {
    email: "",
    password: "",
    legalAge: false,
    tycAccepted: false,
};

registerBtn.addEventListener("click", () => {
    // Escribe tu código aquí, siguiendo los siguientes lineamientos paso a paso:
    // 1. Obtenemos el valor ingresado en el input de email
    imputUser.email = document.querySelector("#email-input").value;
    // 2. Obtenemos los datos ingresados en el input de password
    imputUser.password = document.querySelector("#password-input").value;
    // 3. Obtenemos el valor del input radio
    imputUser.legalAge = document.querySelector(".age-input").checked;
    // 4. Obtenemos el valor del input checkbox
    imputUser.tycAccepted = document.querySelector("#tyc-input").checked;
    // 5 Validamos si el usuario es mayor de edad. Si no, mostramos un mensaje de error: "Debes ser mayor de edad para registrarte en el sitio"
    validator(
        imputUser.legalAge,
        false,
        "Debes ser mayor de edad para registrarte en el sitio"
    );
    // 6 Validamos si el usuario aceptó los términos y condiciones. Si no, mostramos un mensaje de error: "Debes aceptar los TyCs para registrarte en el sitio"
    validator(
        imputUser.tycAccepted,
        false,
        "Debes aceptar los TyCs para registrarte en el sitio"
    );
    // 7 Si todo esta correcto, mostramos por consola un objeto con la información ingresada por el usuario.
    console.table(imputUser);
});

const validator = (ValueSelector, condicion, mensaje) => {
    if (ValueSelector === condicion) {
        alert(mensaje);
    }
};
