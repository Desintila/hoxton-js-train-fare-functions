function getUserAge(){
return Number(prompt("What's your age"))
}
function getDistanceInKm(){
return Number(prompt("Write the distance you are travelling"))
}
let userAge=getUserAge()
let distanceInKm=getDistanceInKm()

function calculateTicketPrice(){
const pricePerKm=0.21
return  distanceInKm * pricePerKm
}

function alertTicketPrice(){
if (userAge>0 && userAge<18){
    alert(`You get 20% off the price.\n Your ticket price: ${calculateTicketPrice() *0.8} £`)
}
else if(userAge>65){
    alert(`You get 40% off the price.\n Your ticket price: ${calculateTicketPrice() *0.6} £`)
}
else{
    alert(`Your ticket price: ${calculateTicketPrice()} £`)
}
}
alertTicketPrice()