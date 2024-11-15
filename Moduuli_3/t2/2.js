const thing = document.querySelector('#target');

const list_item1 = document.createElement('li');
const list_item2 = document.createElement('li');
const list_item3 = document.createElement('li');

list_item1.textContent = 'First item'
list_item2.textContent = 'Second item'
list_item3.textContent = 'Third item'


thing.appendChild(list_item1);
thing.appendChild(list_item2);
thing.appendChild(list_item3);


document.querySelectorAll("li")[1].className = 'my-item';


