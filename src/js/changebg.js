function changeBG(){ 
    var first = this;
    if(first.nextElementSibling && first.nextElementSibling.classList.contains('box-inline')){
        var second = first.nextElementSibling;
    }else{
       var second = collection[0];
    }
    var curColor = getComputedStyle(first).backgroundColor;
    var nextColor = getComputedStyle(second).backgroundColor;

    first.style.backgroundColor = nextColor;
    second.style.backgroundColor = curColor;
}

var collection = document.getElementsByClassName('box-inline');
for(var i = 0; i < collection.length; i++){
    collection[i].addEventListener('click', changeBG, false);
}