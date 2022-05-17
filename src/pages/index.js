import Card from '../components/Card.js';
const cardContainer = document.querySelector('.game__container');
let arr = ["images/kit1.jpg", "images/kit1.jpg", "images/kit2.jpg", "images/kit2.jpg", "images/kit3.jpg", "images/kit3.jpg", "images/kit4.jpg", "images/kit4.jpg", "images/kit5.jpg", "images/kit5.jpg", "images/kit6.jpg", "images/kit6.jpg", "images/kit7.jpg", "images/kit7.jpg", "images/kit8.jpg", "images/kit8.jpg", "images/kit9.jpg", "images/kit9.jpg", "images/kit10.jpg", "images/kit10.jpg"];
const startGameButton = document.querySelector('.game__start-button');
const gameNav = document.querySelector('.game__nav');

function startGame(){
let handlArr = [];
arr.sort(() => Math.random() - 0.5);;
for (let i = 0; i < 20; i++){
  const card = new Card(arr[i],i+1, (data) =>{
    const tempCard = document.querySelector("#"+data);
    if (handlArr.length < 3){
      card.showValue();
      console.log(tempCard)
      if (!handlArr.includes(tempCard)) handlArr.push(tempCard)
      resHandler(handlArr);
      checkGameEnd();
    }
  });
  cardContainer.prepend(card.generateCard());
}
}
function resHandler(arr){
  if (arr.length === 2){
    if (arr[0].getAttribute('src') === arr[1].getAttribute('src')){
      arr.forEach(elt => elt.classList.add('card_solved') )
      arr.splice(0,2);
    } else setTimeout(restoreRes,1000,arr);    
  }
}

function restoreRes(arr){
      arr.forEach(elt => elt.querySelector('.card__value').style.display = 'none')
      arr.splice(0,2)
}
function removeAllCards(){
  const tempCards = Array.from(cardContainer.querySelectorAll('.card'));
  tempCards.forEach(elt => elt.remove());
}

function checkGameEnd(){
  const tempCards = Array.from(cardContainer.querySelectorAll('.card'));
  if (tempCards.every(elt => elt.classList.contains('card_solved'))) {
    gameNav.style.display = "block";
    removeAllCards();
  };
}
startGameButton.addEventListener('click', ()=> {
  gameNav.style.display = "none";
  startGame();
})

