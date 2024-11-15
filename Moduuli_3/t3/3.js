'use strict';
const names = ['John', 'Paul', 'Jones'];

const kohde = document.querySelector('#target');

for (let i = 0; i < names.length; i++) {
    kohde.innerHTML += `<li>${names[i]}</li>`

}
