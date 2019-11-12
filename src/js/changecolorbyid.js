// function getUserParams(){
//     var par1 = prompt('Введите id блока') ;
//     var par2 = prompt('Введите цвет');    
// }

const buttonPrompt = document.querySelector('.btn_prompt');
buttonPrompt.addEventListener('click', changeColor);
function changeColor(){
    var userId = prompt('Введите id блока');
    var color = prompt('Введите цвет');

    var el = document.getElementById(userId);
    if(el === null){
        alert('error');
        return;
    }else{
        el.style.backgroundColor = color;
    }
}