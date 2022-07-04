var count = 0
var total=0
var data =JSON.parse(localStorage.getItem("cart_items"))|| []
const url = `https://grocery-masai.herokuapp.com/items`

const items = document.getElementById("items")
items.innerHTML = null

fetch(url).then(function(res){
    return res.json()
})
.then (function(res){
    data = res.data
    appendData(data)
})
.catch(function(err){
    console.log("err:",err)
})
// var count = 0;
// var total = 0
// var arr = JSON.parse(localStorage.getItem("cart_items"))||[]
// async function getData(){
//     var api = `https://grocery-masai.herokuapp.com/items`
//     var data = await fetch(api)
//     var res = await data.json()
//     mapData(res.data)
//     console.log("inside the function")
// }
// getData()
// var items = document.getElementById("items")
// items.innerHTML = null
function appendData(data){
console.log(data)

data.forEach(function(el){
    // let row = document.createElement("div")
    // row.setAttribute("class","row")
    let  groceries = document.createElement("groceries")

    let name = document.createElement("p")
    name.innerText = el.name

    let price = document.createElement("p")
    price.innerText = el.price

    let image = document.createElement("img")
    image.src = el.image

    let button = document.createElement("button")
    button.innerText = "add_to_cart"
    button.addEventListener("click",function(){
        addToCart(el)
        

    })

    groceries.append(image,name,price,button)

     document.querySelector("#items").append(groceries)
     //items.append(row)
})
function addToCart(el){
    // console.log(el)
    total += el.price
    data.push(el)
    localStorage.setItem("cart_items",JSON.stringify(data))
    localStorage.setItem("total",(total))
}
}

// function addToCart(el){
//     total += el.price

//     arr.push(el)

//     localStorage.setItem("cart_items",JSON.stringify(arr))
//     localStorage.setItem("total",(total))
// }