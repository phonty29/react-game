const LAYOUT = document.getElementById('box');
const GAME_OVER = document.getElementById('gameover-text');
const SUBMIT = document.getElementById('submit');
const RESTART = document.getElementById('restart');
RESTART.addEventListener('click', () => {
  location.reload();
});

const render = (array) => {
  SUBMIT.classList.add('display-none'); 
  LAYOUT.innerHTML = array.map((player, index) => template(player.name)).join('');
};

const reRenderWithAnimation = (array) => {
  return new Promise( (resolve, reject) => {
    document.querySelectorAll('.col').forEach((element, index) => {
      element.querySelector('.name').textContent = array[index].name;
      element.querySelector('.image').setAttribute('src', `images/${array[index].name}.jpg`);
      element.classList.add('animated');
      element.style.animationDelay = `${index*1.5}s`;
      if (index == array.length-1) 
        resolve("Rerendered with animation");
    });  
  });
};

const lastRender = (array) => { 
  return new Promise( (resolve, reject) => {
    console.log("Players", array);
    document.querySelectorAll('.col').forEach((element, index) => {
      element.classList.remove('animated');
      let card = element.querySelector('.card');
      card.classList.add('selectable');
  	  card.addEventListener('click', () => {
  	  	card.classList.toggle('selected');
  	  });
      element.querySelector('.name').textContent = array[index].name;
      element.querySelector('.image').setAttribute('src', `images/${array[index].name}.jpg`);
      switch(array[index].reply) {
        case '1': element.querySelector('.testimony').textContent = REPLIES[0]; break;
        case '0': element.querySelector('.testimony').textContent = REPLIES[1]; break;
        default: element.querySelector('.testimony').textContent = REPLIES[2];
      }
      if (index == array.length-1) {
 		    SUBMIT.classList.remove('display-none');	
        resolve("Last render\nTime to select");
    	}
    });  
  });
};












