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
    origPass = origPass + str.charAt(str.length-1);
    str = str.slice(0, -1);
    var n = getRandomNum(0, passwordParts.length-1);
    this.value = str + passwordParts[n];
    console.log(origPass);
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