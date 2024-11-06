const luku1Str = prompt('Give first number: ')
const luku2Str = prompt('Give second number: ')
const luku3Str  = prompt('Give third number: ')

const luku1 = +luku1Str
const luku2 = +luku2Str
const luku3 = +luku3Str



summa = luku1 + luku2 + luku3
tulo = luku1 * luku2 * luku3
keski = summa / 3

document.querySelector("#lasku").innerHTML= `The sum of the numbers is: ${summa} Product is: ${tulo} and Average is: ${keski}`


