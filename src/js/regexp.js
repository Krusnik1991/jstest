var RegExp = /^\w{1,}@\w{2,}\.\w{2,}$/

function checkEmail(){
    var str = document.getElementById('inp').value;
    if(RegExp.test(str)){
        alert('ok')
    }else{
        alert('error')
    }
}

document.getElementById('cl').addEventListener('click', checkEmail);