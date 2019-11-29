function Animal(name){
    var totalDist = 0;
    var timer;
    this.name = name;
    var self = this;

    this.run = function(){
        this.timer = setInterval(function(){
            console.log(totalDist++);
        }, 1000)
    }

    this.stop = function(){
        clearTimeout(timer);
    }
    
    this.getterSetterTotalDist = function(value){
        if(value === undefined){
            return totalDist;
        }else{
            value = +value;
            if(!isNaN(value)){
                totalDist = value;
            }else{
                alert('error');
            }
        }
    }
}

function Rabbit(name){
    Animal.apply(this, [name]);
    var qw = 'asdasd';
    var z = 'asdasd';
}

function Cat(name){
    Animal.apply(this, [name]);
    var asdasd = 'asdasd';
    var r = 'asdasd';

    this.fun = function(){
        return totalDist;
    }
}

var cat = new Cat('Ryzhik');
console.log(cat);

var rabbit = new Rabbit('Greyich');
console.log(rabbit);
console.dir(cat)