let cart = JSON.parse(localStorage.getItem("cart")) || []

function toggleCart(){

document.getElementById("cartPanel").classList.toggle("active")

showCart()

}

function addToCart(name,price){

cart.push({name,price})

localStorage.setItem("cart",JSON.stringify(cart))

updateCount()

}

function showCart(){

let list=document.getElementById("cartItems")

let total=0

list.innerHTML=""

cart.forEach((item,index)=>{

let li=document.createElement("li")

li.innerHTML=item.name+" - $"+item.price+
" <button onclick='removeItem("+index+")'>❌</button>"

list.appendChild(li)

total+=item.price

})

document.getElementById("total").textContent=total

}

function removeItem(index){

cart.splice(index,1)

localStorage.setItem("cart",JSON.stringify(cart))

showCart()

updateCount()

}

function clearCart(){

cart=[]

localStorage.setItem("cart",JSON.stringify(cart))

showCart()

updateCount()

}

function updateCount(){

document.getElementById("count").textContent=cart.length

}

updateCount()