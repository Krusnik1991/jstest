import { get } from "http";

var nowDate = new Date(); // Определяем текущую дату полностью
var today = nowDate.getDate(); // Определяем текущий день
var currentMonth = nowDate.getMonth(); // Определяем текущий месяц
var currentYear = nowDate.getFullYear(); // Определяем текущий год
var temp = new Date(currentYear, currentMonth + 1, 0); // последний день месяца как 0й день следующего месяца?
var lastDay = temp.getDate(); // получить день след месяца минус 1 ?
var lastindex = lastDay;
console.log(lastDay);

console.log(lastindex);

function createTable(){
  var d = new Date(currentYear, currentMonth, 1);
  var t = d.getDay() - 1;
  if(t < 0){
      t = 6;
  }
  var a = 0;
  while(d.getMonth() == currentMonth){ 
    console.log('d.getMonth', d.getMonth());
    console.log('d.getDate', d.getDate());
    console.log('lastDay', lastDay);
    var tr = document.createElement('tr');
    var i = 0;
    while(i < 7){
      var td = document.createElement('td');
      console.log('a', a);
      if(a == 0){
        if(i < t){
          td.innerHTML = "";
          td.style.background = 'yellow';
        }else{
          if(d.getMonth() == currentMonth){
            td.innerHTML = d.getDate();
            d.setDate(d.getDate() + 1);
          }
        }
      }else{
        console.log('d.getDate внутри', d.getDate());
        if(d.getMonth() == currentMonth){
          td.innerHTML = d.getDate();
          d.setDate(d.getDate() + 1);
        }else{
          td.innerHTML = "";
          td.style.background = 'yellow';          
        }
      }      
        tr.appendChild(td);
        i++;      
    }
      document.getElementById('tbl').appendChild(tr);
      a++;
  }
  // var aaa = document.querySelectorAll('td');
  //   for(var i =0; i < aaa.length; i++){
  //     if(aaa[i].style.background == 'yellow'){
  //       aaa[i].remove();
  //     }
  //   }
}


createTable();