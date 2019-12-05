var forms = document.getElementsByTagName('form');
for(var i = 0; i < forms.length; i++){
    forms[i].addEventListener('submit', validator);
}

var rules = {
    required: function(el){
        if(el.value != ''){
            return true;
        }else{
            return false;
        }
    },
    email: function(el){
        var reg = /^\w{1,}@\w{1,}\.\w{1,}$/;
        return reg.test(el.value);
    }
}

    
function showErrors(arr){
    console.log(arr);
}

function validator(e){
    e.preventDefault();
    var errors = [];
    var inputs = this.elements;
    for(var i = 0; i < inputs.length; i++){
        if(inputs[i].tagName != 'BUTTON'){
            var rulesList = inputs[i].dataset.rule;
            rulesList = rulesList.split(' ');
            for(var j = 0; j < rulesList.length; j++){
                if(rulesList[j] in rules){
                    if(!rules[rulesList[j]](inputs[i])){
                        errors.push({
                            name: inputs[i].name,
                            error: rulesList[j]
                        });
                    }
                }
            }
        }
    }
    if(errors.length > 0){
        e.preventDefault();
        showErrors(errors);
    }
}