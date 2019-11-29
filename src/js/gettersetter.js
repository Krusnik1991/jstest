function Rabbit(name){
    var totalDist = 0;
    var timer;
    this.name = name;
    // var self = this;

    this.run = function(){
        timer = setInterval(function(){
            console.log(totalDist++);
        }, 1000)
    }

    this.stop = function(){
        clearTimeout(timer);
    }

    this.get = function(propertyName){
         if(propertyName == 'timer'){
             return undefined;
         }
         if(this[propertyName] !== undefined){
             return this[propertyName];
         }else{
             return this['get_'+propertyName]();
         }
    }

    this.get_totalDist = function(){
        return totalDist;
    }

    this.set_totalDist = function(value){
        value = +value
        if(!isNaN(value)){
            totalDist = value;
        }else{
            alert('error');
        }
    }
    
    this.getterSetterTotalDist = function(value){
        if(value === undefined){
            return totalDist;
        }else{
            value = +value
            if(!isNaN(value)){
                totalDist = value;
            }else{
                alert('error');
            }
        }
    }
}

var rab = new Rabbit('Rabitton');
// rabbiton.run();
console.log(rab.get('totalDist'));
console.log(rab.set_totalDist('25'));
console.log(rab.get_totalDist('totalDist'));
rab.getterSetterTotalDist(27);
console.log(rab.getterSetterTotalDist());



function MyHtml(id){
    var el = document.getElementById(id);

    this.width = function(value){
        if(value === undefined){
            return getComputedStyle(el).width;
        }else{
            value = parseFloat(value);
            if(!isNaN(value)){
                el.style.width = value + 'px';
            }
        }
    }
}

var a = new MyHtml('newone');
a.width();
console.log(a.width())

a.width('250px');
console.log(a.width())