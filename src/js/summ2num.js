setTimeout(function(){
  //Описание функции сложения 2х чисел
  function summ(a, b){
    //проверка обоих значение на не NaN
    if(isNumber(a) && isNumber(b)){
      a = toNum(a);
      b = toNum(b);
      return a+b;
    }
    return "Введено не число";
  }

  //описание проверка на NaN
  function isNumber(num){
    return(!isNaN(num));
  }

  //Попытка преобразовать введенное значение в число
  function toNum(num){
    return +num;
  }
  
  var a0 = prompt("Введите a0");
  var a1 = prompt("Введите a1");
  //Вызов функции сложения 2х чисел
  var s = summ(a0, a1);
  alert(s);
  }, 1000);

  // setTimeout(function(){
  //   //Описание функции сложения 2х чисел
  //   function summ(argA, argB){
  //     a = +argA;
  //     b = +argB;
  //     //проверка обоих значение на не NaN
  //     if(!isNaN(a) && !isNaN(b)){     
  //       return a+b;
  //     }
  //     return "Введено не число";
  //   }
    
  //   var a0 = prompt("Введите a0");
  //   var a1 = prompt("Введите a1");
  //   //Вызов функции сложения 2х чисел
  //   var s = summ(a0, a1);
  //   alert(s);
  //   }, 1000);