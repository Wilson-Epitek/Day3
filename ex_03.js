function fillBus (peopleAtBusStops,busSeats)
let total = 0
let  tatal= 0
while (total<peopleAtBusStops.length) { 
tatal += peopleAtBusStops [total]
if (tatal>busSeats){ 
return total 
}
total++ 
}
return -1
}

console.log(fillBus([1, 3, 10, 1], 12))