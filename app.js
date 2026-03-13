let user = localStorage.getItem("loggedUser")

if(user){

let welcome = document.getElementById("welcome")

if(welcome){
welcome.textContent = "Hola, " + user
}

}