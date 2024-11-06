const vuosi = prompt('What year you would like to check: ');

mika_on = 'Ei mikää';

if ((vuosi%4===0 && vuosi%100!==0) || (vuosi % 400 === 0))
  mika_on = 'leap year'
else
  mika_on = 'not leap year'

document.querySelector("#vuodentieto").innerHTML = `Year ${vuosi} is ${mika_on}. `