const button = document.querySelector('#button');
const hex = document.querySelector('#hex');

let colors = ['#B55238','#FDE58C', '#4A4E2B', '#AC35CA', '#E946D3', '#0BB78D', '#D6071D', '#FEB1AE'];

function randomColorPicker(colors){
  return colors[Math.floor(Math.random()*colors.length)];
}

button.onclick = function() {
  let result = randomColorPicker(colors);
  document.body.style.backgroundColor = result;
  hex.innerHTML = result;
}