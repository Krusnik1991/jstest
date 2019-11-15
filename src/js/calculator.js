function getDataFromInput(id){
    if(isEmpty(id)){
        showError('Empty Set');
        return;
    }
    var v = +document.getElementById(id).value;
    return v;
}

function isEmpty(id){
    if(document.getElementById(id).value == ''){
        true;
    }
    return false;
}

function checkNum(num){
    if(isNaN(num)){
        return false;
    }
    return true;
}

function showError(error){
    alert(error);
}

function showResult(result){
    document.getElementById('result').innerHTML = result;
}

function handler(e){
    if(e.target.tagName == "BUTTON"){
        var a = getDataFromInput('a');
        var b = getDataFromInput('b');
        if(checkNum(a) && checkNum(b)){
            switch(e.target.innerHTML){
                case'+':
                    showResult(a+b);
                    break;
                case'-':
                    showResult(a-b);
                    break;
                case'*':
                    showResult(a*b);
                    break;
                case'/':
                    if(b == 0){
                        showError('Нельзя делить на 0')
                    }else{
                        showResult(a/b);
                    }
                    break;
            }
        }else{
            showError('Wrong Format!!!');
        }
    }
}

document.querySelector('.actions').addEventListener('click', handler);