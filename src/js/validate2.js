var validatorMethods = {
    //isFilled ?
    isNotEmpty: function(el){
        if(el.value == ''){
            return false;
        }else{
            return true;
        }
    },
    isPattern: function(el, pattrn){
        return (pattrn.test(el.value));
    },
    isContains:function(el, el2){
        if(el.value == el2.value){
            return true;
        }else{
            return false;
        }
    },
}


function Validator(setting){
    var formEl = document.getElementById(setting.id);
    var formFields = formEl.elements;
    var errors = [];
    var rulesPattern = {
        email: /^\w{1,}@\w{1,}\.\w{1,}$/,
        tel: /^\+7\(\d{3}\)\d{7}$/,
    }

    var showError = function(el){
        if(classList.contains('success')){
            el.parentNode.classList.remove('success');
        }
        el.parentNode.classList.add('error');
        if(el.nextElementSibling){
            el.nextElementSibling.innerHTML = el.dataset.error;
        }
    }
    var showSuccess = function(el){
        if(classList.contains('error')){
            el.parentNode.classList.remove('error');
        }
        el.parentNode.classList.add('success');
        if(el.nextElementSibling){
            el.nextElementSibling.innerHTML = '';
        }
    }

    var isValid = function(el){
        var methods = setting[el.getAttribute('id')];
        if(methods !== undefined){
            for(var i = 0; i < methods.length; i++){
                if(!validatorMethods[methods[i][0]](el, methods[i][1])){
                    errors.push({el:el});
                }
            }
            for(var i = 0; i < errors.length; i++){
                if(errors[i].el == el){
                    return false;
                }
            }
        }
        return true;
    }

    var checkIt = function(){
        //определить правила проверки
        if(isValid(this)){
            showSuccess(this);
            for(var i = 0; i < errors.length; i++){
                if(error[i].el == this){
                    delete (error[i]); // ??????????
                }
            }
        }else{
            showError(this);
            errors.push({
                el: this,                
            })
        }
    }

    //init here
    for(var i = 0; i < formFields.length; i++){
        if(formFields[i].tagName == "BUTTON"){
            continue;
        }
        formFields[i].addEventListener('change', checkIt);
    }
    for(var prop in setting.pattern){
        rulesPattern[prop] = setting.pattern[prop];
    }
}


var v = new Validator({
    id: 'myform',
    pattern: {
        tel: /^\+d{1,3}\(\d{3}\)\d{7}$/,
        adress: /^$/
    },
    methods: {
        'inp': {
           rules: [
                ['notEmpty'],
                ['contains', 'inp2'],
                ['pattern', ['email']]
            ],
        }
    }
});