var nowDate = new Date();
var today = nowDate.getDate();
var currentMonth = nowDate.getMonth();
var currentYear = nowDate.getFullYear();
var temp = new Date(currentYear, currentMonth+1, 0);
var lastDay = temp.getDate();

function createTable(){
  var d = new Date(currentYear, currentMonth, 1);
  // var currentDay = d.getDater();
//   while(d.getDate() != lastDay){
      var t = d.getDay()-1;
      if(t < 0){
          t = 6;
      }

      var tr = document.createElement('tr');
      var i = 0;
      while(i < 7){
        var td = document.createElement('td');
        if(i < t){
              i++;
              td.innerHTML = '';
          }else{
            td.innerHTML = d.getDate();
            d.setDate(d.getDate() + 1);
          }
          tr.appendChild(td);
          i++;
      }
      document.getElementById('t').appendChild(tr);     
  }


createTable();



// var arr = [];
// for(var i = 1; i < 30; i++){
//     nowDate.setDate(i);
//     var td = document.createElement('td');
//     td.innerHTML = nowDate.getDate();
//     arr.push(td);
// }
// for(var i = 0; i < arr.length; i++){
//     var tr = document.createElement('tr');
//     for(var j = 0; j < 7; j++){
//         tr.appendChild(arr[j]);
//     }
//     t.appendChild(tr);
// }