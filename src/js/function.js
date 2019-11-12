var collection = document.getElementsByTagName('button');
for(var i = 0; i < collection.length; i++){
        collection[i].addEventListener('click', fun);
    }

function fun(){
    alert(this.id);
}