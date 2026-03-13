function login(){

let user = document.getElementById("user").value

localStorage.setItem("user", user)

alert("Login exitoso")

window.location = "index.html"
}


function addToCart(name, price){

let cart = JSON.parse(localStorage.getItem("cart")) || []

cart.push({name,price})

localStorage.setItem("cart", JSON.stringify(cart))

alert("Producto agregado")
}


function showCart(){

let cart = JSON.parse(localStorage.getItem("cart")) || []

let list = document.getElementById("cart")

cart.forEach(product => {

let li = document.createElement("li")

li.textContent = product.name + " - $" + product.price

list.appendChild(li)

})

}

if(document.getElementById("cart")){
showCart()
}