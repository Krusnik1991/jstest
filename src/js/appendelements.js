const p = document.createElement('p');
const text = document.createTextNode('My first text Node');
p.classList.add('red');
p.appendChild(text);
const el = p.appendChild(text);
console.log(p);


document.querySelector('.boxline-container').appendChild(p);
document.querySelector('.boxline-container').appendChild(el);
