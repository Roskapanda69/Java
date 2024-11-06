const name = prompt("What is your name?")

const house_name = Math.floor(Math.random()*4)+1
let house = "talo"

if (house_name <= 1)
    house = "Gryffindor"
else if (house_name <= 2)
    house = "Slytherin"
else if (house_name <= 3)
    house = "Hufflepuff"
else if (house_name >= 4)
    house = "Ravenclaw"
else
   console.log("Jotain vikaa")

document.querySelector("#laitteluu").innerHTML =`Welcome to Hogwards ${name}! You have been shorted to house ${house}. `

