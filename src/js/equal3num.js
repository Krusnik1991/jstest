setTimeout(function(){
    var a = prompt("a");
    var b = prompt("b");
    var c = prompt("c");
    
    a = +a;
    b = +b;
    c = +c;
    
    if(a==b && a==c){
        alert('all nums are same = '+ a + " " + "=" + b + " " + "=" + " " + c);
    }else{
        if(a > b){
        if(a == c){
            alert('max nums are "a" and "c" both = '+ a + " " + "и" + " " + c);
        }else{
            if(a > c){
            alert('max num is "a" = '+ a);
            }else{
            alert('max num is "c" = '+ c);
            }
        }    
        }else if(b == c){
            alert('max nums are "b" and "c" both = '+ b + " " + "и" + " " + c);
        }else{
            if(b > c){
            if(a==b){
        alert('max nums are "a" and "b" both = '+ a + " " + "и" + " " + b);
        }else{
            alert('max num is "b" = '+ b);
        }
            }else{
            alert('max num is "c" = '+ c);
            }
        }
        }
}, 1000)
