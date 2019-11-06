setTimeout(function(){
  var secret = 512;
var user = prompt('enter number');

while(user != secret){  
  if(user>491 && user<533) {
    alert('hot');
  }else if(user<491 && user> 481 || user>533 && user<543) {
    alert('cold');
  }else{
    alert('very bard');
  }
  user = prompt('enter number');
}
alert('yep')
}, 3000)
