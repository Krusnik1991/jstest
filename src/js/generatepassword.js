var passwordParts = ['a', 'b', 'c', '_', '&'];
var lengthPass = 8;
function generatePassword(){
    var str = '';
    for(var i = 0; i < lengthPass; i++){
        var n = getRandomNum(0, passwordParts.length-1);
        str = str + passwordParts[n];
    }
    showPassword(str);
}

function replaceSymbol(){
    var str = this.value;
    console.log('str before',str);
    origPass = origPass + str.slice(-1);
    console.log('str slice - 1', str.slice(-1));
    console.log('origPass',origPass);
    str = str.slice(0, -1);
    console.log('str after',str);
    var n = getRandomNum(0, passwordParts.length-1);
    this.value = str + passwordParts[n];
}

var origPass = '';
function showPassword(string){
    document.querySelector('output').innerHTML = string;
}

function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)) + min;
}

document.querySelector('button').addEventListener('click', generatePassword);
document.getElementById('pass').addEventListener('keyup', replaceSymbol);