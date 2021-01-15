const message = document.querySelector('#message');
const button = document.querySelector('#button');
const result = document.querySelector('#result');

const submitMessage = function(){
  if (!message.value){
    alert('Please enter the message')
  } else {
    result.innerHTML = message.value;
    message.value = '';
  }
}

button.addEventListener('click', function(){
  submitMessage();
});

message.addEventListener('keyup', function(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    submitMessage();
  }
});