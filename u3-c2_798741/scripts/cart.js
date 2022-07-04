var data =JSON.parse(localStorage.getItem("cart_items")) ||[]
console.log(data)
var total = localStorage.getItem("total")


// function appendData(data){
//     console.log(data)
    
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
        button.innerText = "remove"
        button.addEventListener("click",function(){
            Remove(el)
            
    
        })
    
        groceries.append(image,name,price,button)
    
        document.querySelector("#items").append(groceries)
    
        //document.querySelector("#items").append(groceries)
        // items.append(row)
    })
    function Remove(el){
        data.splice(el,1)
        localStorage.setItem("cart_items",JSON.stringify(data))
        window.location.reload()
    }
//}