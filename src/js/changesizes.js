var elem = document.getElementById('one');

const buttonW = document.querySelector('.btn_width');
buttonW.addEventListener('click', addW);
function addW() {
    showBlock(changeCoord('width'), 'width');
}

const buttonH = document.querySelector('.btn_height');
buttonH.addEventListener('click', addH);
function addH() {
  showBlock(changeCoord('height'), 'height');
}


function changeCoord(prop){
    var temp = elem.style[prop];
    if(temp === ''){
        return '70';        
   }else{
       return parseInt(temp) + 20;
   }
}

function showBlock(value, prop){
    elem.style[prop] = value + 'px';
}