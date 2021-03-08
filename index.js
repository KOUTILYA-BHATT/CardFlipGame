window.onload = () =>{
  cards.forEach(card => {
    var index = Math.floor(Math.random() * 16)
    card.style.order = index;
  });
};

var isFlipped = false;
var firstCard;
var secondCard;

const cards = document.querySelectorAll(".card");
cards.forEach(card => card.addEventListener("click", flip));

function flip(){
  this.classList.add("flip");
  if(!isFlipped){
    isFlipped= true;
    firstCard= this;
  }else{
    secondCard = this;
    checkIt();
  }
}

var checkIt = () => {
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }
}

var success = () => {
  firstCard.removeEventListener('click', flip);
  secondCard.removeEventListener('click', flip);
  reset();
}

var fail = () => {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 500);
}

var reset =() => {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}