function Student(n, a){
  this.name = n;
  this.age = a;
  var CONST = 80;

  this.sayHello = function(){
    alert('Hello from '+this.name)
  }

  this.getAge = function(){
    console.log(calc());
  }

  var self = this;
  var calc = function(){
    return CONST - self.age;
  }
}

var s = new Student('Alex', 25);
var s1 = new Student('Nigger', 36);

s.getAge()