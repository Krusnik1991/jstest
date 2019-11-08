// var collection =  one.getElementsByTagName('a');
// .getElementsByTagName();
// .getElementsByClassName('');
// .querySelectorAll('#one class2 p');
// querySelector();

var one = document.getElementById('one');
/*
 @param HTMLnode el
 @param {string} color
*/
function changeColor(el, color){
    el.style.backgroundColor = color;
}

changeColor(one, '#ff0055');

console.log(one.style.backgroundColor);

function fun(collection){
  for(var i = 0; i < collection.length; i++){
    if((i+1)%3 == 0){
      collection[i].style.background = 'red';
    }
    if((i+1)%2 == 0){
      collection[i].style.color = "blue";
      collection[i].style.fontSize = '32px';
    }
  }
}

var list1 = document.getElementById('list1');
var li = list1.getElementsByTagName('li');
fun(li);
list1.innerHTML = list1.innerHTML + '<li>item11</li>';
list1.innerHTML += '<li>item12</li>';
fun(li);

var two = document.getElementById('two');
two.previousElementSibling.style.background = 'green';
two.nextElementSibling.nextElementSibling.nextElementSibling.style.background = 'yellow';
two.parentNode.style.border = '2px solid red';
console.log(list1.children);
list1.children[4].style.fontSize = '46px';
console.log(list1.firstElementChild.firstChild);

const button = document.querySelector('.btn');
button.addEventListener('click', clickFun);
function clickFun() {
  alert ('Hello');
}

// (function() {
//   const button = document.querySelector('.btn');
//   button.addEventListener('click', clickFun);
//   function clickFun() {
//     alert ('Hello');
//   }
// })()


// clickFun = function() {
//   (function () {
//     var v1 = 1;
//     v2 = 2;
//   })();

//   console.log('v2', v2);
//   console.log('v1', v1);
//   for ( var i = 0; ) {}
// }