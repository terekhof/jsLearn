const slides = document.getElementsByClassName("item");
const previous = document.querySelector("#prev");
const next = document.querySelector("#next");

let slideIndex = 1;

showSlides(slideIndex);

previous.addEventListener("click", function(){
  showSlides(slideIndex += 1);
})

next.addEventListener("click", function(){
  showSlides(slideIndex -= 1);
})

function currentSlide(n){
  showSlides(slideIndex = n);
}

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1
  } 
  if (n < 1) {
    slideIndex = slides.length
  }
  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";    
}