setTimeout(function(){

// var student = {
//   name: 'Vasya',
//   age: '25',
//   adress: {
//     city: 'Kiev',
//     street: 'kreshatik',
//   }
// };

// for(property in student){
//   console.log(property);
// }

// var arr = ['qwerty', 25, null, false, '2354'];

// var arr2 = {
//   0: 'qwerty',
//   1: 25,
//   2: null,
//   3: false,
//   4: '2354'
// }

// console.log(arr[2]);
// console.log(arr[arr.length-1]);
// console.log(student['name']);

// for(property in student){
//   console.log('key: ' + property + ' | value=' +student[property]);
// }

var academy = {
  groups: [

    {
      number: 12,
      teacher: 'Alex'
    },      
    {
      number: 22,
      teacher: 'Denis'
    }
  ],

  students: [
    {
      name: 'Misha',
      email: 'email@msdm.ru',
      group: 12
    }
  ],

  showGroup: function(){
    for(var i = 0; i < academy.groups.length; i++){
      console.log('Группа №:' +academy.groups[i].number + ' Преподаватель --> ' + academy.groups[i].teacher);
    }
  },

  showStudent: function(){
    for(var i = 0; i < academy.students.length; i++){
      console.log('Студент ' +academy.students[i].name + ' Группа:' + academy.students[i].group + ' (почта: ' + academy.students[i].email + ' )');
    }
  }
}

// console.log(academy.showGroup());
// console.log(academy.showStudent());

var obj = {
  colors: {
    red: '#ff0000',
    green: '#00FF00'
  },
  askUser: function(){
    var color = prompt('enter color');
    if(color in obj.colors){
      obj.showMessage(obj.colors[color]);
      }else{
        obj.showMessage('color not found');
      }
    },
  showMessage: function(message){
    alert(message);
  }
}

obj.askUser();

}, 1000)
