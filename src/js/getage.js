setTimeout(function(){

function getAge(){
  return prompt('enter your age!');
}

function showMessages(message){
  alert(message);
}

function checkAge(age) {
  if(isNumber(age)){
    // age = toNum(age); //Лишний перевод
     if(age > 17){
      showMessages('У вас есть доступ!');
     }else{
       showMessages('Вам мало лет!');
     }
  }else{
      showMessages('Вы ввели не число!');
  }
}

function isNumber(num){
  num = toNum(num);
  if(isNaN(num)){
    return false;
  }else{
    return true;
  }
}

function toNum(num){
  return +num;
}

checkAge(getAge());

}, 1000);