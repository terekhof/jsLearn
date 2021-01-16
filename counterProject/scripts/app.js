const total = document.querySelector("#total");
const increment = document.querySelector("#addCount");
const decrement = document.querySelector("#subtractCount");

let count = 0;
total.value = count;

increment.addEventListener("click", function() {
  total.value = ++count;
  colorChanger();
})

decrement.addEventListener("click", function() {
  total.value = --count;
  colorChanger();
})

const colorChanger = function(){
  if (total.value < 0) {
    total.style.color = 'red';
  } else if (total.value > 0) {
    total.style.color = 'green';
  } else {
    total.style.color = "white";
  }
}