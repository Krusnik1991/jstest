function handler(e){
    switch(e.type){
        case'click':
            move(e.clientY, e.clientX);
            break;
        case'keydown':
            if(e.keyCode > 36 && e.keyCode < 41){
                var style = getComputedStyle(el);
                switch(e.keyCode){
                    case 37:
                        // left
                        move(parseInt(style.top), parseInt(style.left)-30);
                        break;
                    case 38:
                        // top
                        move(parseInt(style.top)-30, parseInt(style.left));
                        break;
                    case 39:
                        // right
                        move(parseInt(style.top), parseInt(style.left)+30);
                        break;
                    case 40:
                        // bottom
                        move(parseInt(style.top)+30, parseInt(style.left));
                    break;
                }
            }
            break;
    }
}

function move(t,l){
    el.style.top = t + 'px';
    el.style.left = l + 'px';
}

var el = document.querySelector('.boxmover');

document.addEventListener('keydown', handler);
document.addEventListener('click', handler);
