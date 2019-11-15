function changeBgMouse(e){
    this.style.backgroundColor = config[e.type];    
}

var el = document.querySelector('.boxblack');

el.addEventListener('click', changeBgMouse);
el.addEventListener('mouseover', changeBgMouse);
el.addEventListener('mouseout', changeBgMouse);

var config = {
    'click': '#ee2a3c',
    'mouseout': 'pink',
    'mouseover':'lime'
}

el.addEventListener('click', changeBgMouse);
el.addEventListener('mouseover', changeBgMouse);
el.addEventListener('mouseout', changeBgMouse);
