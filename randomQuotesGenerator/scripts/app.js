const button = document.querySelector('#button');
const author = document.querySelector('#author');
const quote = document.querySelector('#quote');

let quotes = [
  {
    quote: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur sint iste optio placeat dolor labore, reprehenderit ipsum aspernatur blanditiis maiores.',
    author: 'Author'
  },
  {
    quote: 'A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.',
    author: 'Tyne Daly'
  },
  {
    quote: 'God save me from my friends. I can protect myself from my enemies.',
    author: 'Claude Louis Hector De Villars'
  },
  {
    quote: 'The price of anything is the amount of life you exchange for it.',
    author: 'David Thoreau'
  },
];

function randomQuote(quotes){
  return quotes[Math.floor(Math.random()*quotes.length)];
}

button.onclick = function() {
  let result = randomQuote(quotes);
  quote.innerHTML = result.quote;
  author.innerHTML = result.author;
}