function Popup(options){
  var tip = document.createElement('div');

  this.init = function(){
    tip.classList.add('popup');
    tip.innerHTML = options.content;
    options.node.appendChild(tip);
    options.node.style.position = 'relative';  
    addPosition(options.position);
    options.node.addEventListener('click', this.toggle);
  }

  this.toggle = function(){
    tip.classList.toggle('active');
  }


  function addPosition(position){
    switch(position){
      case 'bottom':
        tip.style.top = '100%';
        tip.style.left = 0;
        break;    
      case 'top':
        tip.style.bottom = '100%';
        tip.style.left = 0;
        break;
      case 'right':
        tip.style.bottom = 0;
        tip.style.left = '100%';
        break;
      case 'left':
        tip.style.bottom = 0;
        tip.style.right = '100%';
        break;
    }
  }
  this.init();
}

// document.getElementsByClassName('.btn-container').addEventListener(click, new Popup);

new Popup({
  node: document.getElementsByTagName('div')[1],
  content: 'This is a tip',
  position: 'bottom'
})

new Popup({
  node: document.getElementsByTagName('h2')[0],
  content: 'This is a tip',
  position: 'left'
})

new Popup({
  node: document.getElementsByTagName('button')[0],
  content: 'This is a tip',
  position: 'right'
})