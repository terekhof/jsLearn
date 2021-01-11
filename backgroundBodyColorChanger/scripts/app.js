const button = document.querySelector('#button');

let colors = ['#FFC0CB','#0000FF', '#FFFF00', '#008000', '#800080', '#FF0000'];

function randomColorPicker(colors){
  return colors[Math.floor(Math.random()*colors.length)];
}

button.onclick = function() {
  let result = randomColorPicker(colors);
  document.body.style.backgroundColor = result;
}