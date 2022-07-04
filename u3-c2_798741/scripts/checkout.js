function showdetails(){
    document.querySelector("#doc").innerHTML = "please wait..."
    
    setTimeout(function(){
        alert("Your order is confirmed ")
    },000)
     function checkit(){
         document.querySelector("#doc").innerHTML = ""

     }
     setTimeout(checkit,1000)
     function check(){
         document.querySelector("#doc").innerHTML=""
     }
     setTimeout(checkit,3000)
    setTimeout(function(){
        alert("Your order is being Packed")
    },3800)
    setTimeout(function(){
        alert("Your order is in transit  ")
    },8000)
    setTimeout(function(){
        alert("Your order is out for delivery ")
    },10000)
    setTimeout(function(){
        alert(" order delivered ")
        document.querySelector("#doc").innerHTML=""
    },12000)

}