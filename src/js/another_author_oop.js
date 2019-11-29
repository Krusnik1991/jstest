const person1 = {
  name: 'Алексей',
  family: 'Данчин',
  sayHello(){
    console.log(`Привет! Я ${this.name} ${this.family}`)
  }
}

const person2 = {
  name: 'Юрий',
  family: 'Ключевский'
}


// sayHello.bind(person1)();
// sayHello.bind(person2)();

const func = sayHello.bind(person1);
func();

function sayHello(){
  console.log(`Всем привет! Меня зовут ${this.name} ${this.family}.`);
}