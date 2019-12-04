var forms = document.getElementsByTagName('form');
for(var i = 0; i < forms.length; i++){
    forms[i].addEventListener('submit', validator);
}

var rules = {
    email: /^\w{1,}@\w{1,}\w{2,}$/,
}

function validator(){
    var inputs = this.getElementsByTagName('input');
    var inputs = this.querySelectorAll('input, textarea, select');

}

