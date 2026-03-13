function register(){

let user = document.getElementById("user").value
let password = document.getElementById("password").value

localStorage.setItem("user", user)
localStorage.setItem("password", password)

document.getElementById("message").textContent="Usuario registrado"

}

function login(){

let user = document.getElementById("user").value
let password = document.getElementById("password").value

let savedUser = localStorage.getItem("user")
let savedPass = localStorage.getItem("password")

if(user === savedUser && password === savedPass){

localStorage.setItem("loggedUser",user)

window.location="index.html"

}else{

document.getElementById("message").textContent="Datos incorrectos"

}

}
let loggedUser = localStorage.getItem("loggedUser")

if(loggedUser){

let welcome = document.getElementById("welcome")

if(welcome){
welcome.textContent = "Hola, " + loggedUser
}

}