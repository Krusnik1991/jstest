var activeEl;
function changeTdBg(e){  
    if(e.target.tagName == 'TD'){
        if(activeEl !== undefined){
          activeEl.style.background = '';
          console.log(activeEl.style.background);
        }
        activeEl = e.target;
        activeEl.style.background = 'yellow';
    }
}
document.querySelector('table').addEventListener('click', changeTdBg);