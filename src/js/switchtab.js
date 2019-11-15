const tab = document.querySelectorAll('.tab-wrap li a');
    for(var j = 0; j <= tab.length; j++){
        if(tab[j]){
          tab[j].addEventListener('click', tabs);
      }
  }

function tabs(){
    var e = e || event;
    e.preventDefault();
    var tabCollection = document.getElementsByClassName('tab');
    for(var i = 0; i < tabCollection.length; i++){
        tabCollection[i].classList.remove('active');
    }
    for(var k = 0; k < tab.length; k++){
        tab[k].classList.remove('active');
    }
    this.classList.add('active');  
    document.getElementById(this.getAttribute('href').replace(/^#/, '')).classList.add("active");
}


