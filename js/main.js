/********************************************MENU***********************************************/
function enseñar(){/*Quitar o poner menur*/ 
   let cn = document.getElementById('menunav');
   cn.classList.toggle('cnopen');

   let menuopen = document.getElementById('menotoggle');
   menuopen.classList.toggle('cnopen');
}
/********************************************MENU***********************************************/
/*******************************************PRODUCTOS***********************************************/
var inicio = 0;
carrusel();

function carrusel(){
    var i;
    var x = document.getElementsByClassName("mis");
    for (i=0; i<x.length; i++){
        x[i].style.display = "none";
    }
    inicio++;

    if(inicio >x.length){
        inicio = 1;
    }
    x[inicio-1].style.display= "block";
    setTimeout(carrusel, 2000);
}
/*******************************************PRODUCTOS***********************************************/
function validar() {
    var mail, password, expresion;
    var valido = false;

    mail = document.getElementById("mail").value;
    password = document.getElementById("password").value;

    expresion = /\w+@\w+\.+[a-z]/;

    if (mail === "" || password === "") {
        alert("Error: todos los campus deben estar rellenos");
    } else if (mail.length > 20) {
        alert("Error: el numero de caracteres introducido supera el límite permitido: 40.");
    } else if (!expresion.test(mail)) {
        alert("Error: correo no valido. Por favor introduzca un valor correcto.");
    } else if (password.length > 8) {
        alert("Error: el núnero de caracteres introducido supera el límite permitido: 8");
        valido = true;
    }
    return valido
}

function registro() {
    var usuario, mail, password, rpassword, expresion;
    var registrado = false;

    usuario = document.getElementById("usuario").value;
    mail = document.getElementById("mail").value;
    password = document.getElementById("password").value;
    rpassword = document.getElementById("rpassword").value;

    expresion = /\w+@\w+\.+[a-z]/;

    if (usuario === "" || mail === "" || password === "" || rpassword === "") {
        alert("Error: todos los campus deben estar rellenos");
    } else if (usuario.length > 20) {
        alert("Error: el numero de caracteres introducido para el nombre de usuario supera el límite permitido: 20.");
    } else if (mail.length > 20) {
        alert("Error: el numero de caracteres introducido para el correo electrónico supera el límite permitido: 40.");
    } else if (!expresion.test(mail)) {
        alert("Error: correo no valido. Por favor introduzca uno correcto.");
    } else if (password.length > 8) {
        alert("Error: el núnero de caracteres introducido supera el límite permitido: 8");
    } else if (rpassword.length > 8) {
        alert("Error: el núnero de caracteres introducido supera el límite permitido: 8");
    } else if (password != rpassword) {
        alert("Error: la contraseñas introducidas no son iguales. Por favor verifique su contraseña.");
    } else {
        alert(usuario + ", muchas gracias por registrarse con su correo " + mail + " en nuestra página web. En breve le llegará un email de confirmación.");
        valido = true;
    }
    return registrado;
}

/**************LOGIN Y REGISTRO****************/