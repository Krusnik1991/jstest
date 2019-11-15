function handler(e){
    if(e.target.tagName == 'BUTTON'){
        switch(e.target.getAttribute('data-action')){
            case'delNext':
                delNext(e.target.parentNode);
                break;
            case'delPrev':
                delPrev(e.target.parentNode);
                break;
        }
    }
}

function delNext(el){
    var target = el.nextElementSibling;
    var parent = el.parentNode;
    if(target){
        parent.removeChild(target);
    }
}

function delPrev(el){
    var target = el.previousElementSibling;
    var parent = el.parentNode;
    if(target){
        parent.removeChild(target);
    }
}

var collection = document.querySelectorAll('button');
    for(var i = 0; i < collection.length; i++){
        collection[i].addEventListener('click', handler);
    }

