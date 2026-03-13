// REGISTRAR USUARIO
function register(){

let user = document.getElementById("user").value
let password = document.getElementById("password").value

localStorage.setItem("user", user)
localStorage.setItem("password", password)

document.getElementById("message").textContent = "Usuario registrado"

}


// INICIAR SESION
function login(){

let user = document.getElementById("user").value
let password = document.getElementById("password").value

let savedUser = localStorage.getItem("user")
let savedPass = localStorage.getItem("password")

if(user === savedUser && password === savedPass){

localStorage.setItem("loggedUser", user)

window.location = "tienda.html"

}else{

document.getElementById("message").textContent = "Datos incorrectos"

}

}


// MOSTRAR NOMBRE DEL USUARIO
let logged = localStorage.getItem("loggedUser")

if(logged){

let welcome = document.getElementById("welcome")

if(welcome){
welcome.textContent = "Hola, " + logged
}

}


// CERRAR SESION
function logout(){

localStorage.removeItem("loggedUser")

window.location.href = "index.html"

}


// BORRAR USUARIO
function resetUser(){

localStorage.removeItem("user")
localStorage.removeItem("password")
localStorage.removeItem("loggedUser")

document.getElementById("message").textContent = "Usuario eliminado"

}