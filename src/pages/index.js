import Card from '../components/Card.js';
const cardContainer = document.querySelector('.game__container');
let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
const startGameButton = document.querySelector('.game__start-button');
const gameNav = document.querySelector('.game__nav');

function startGame(){
let handlArr = [];
arr.sort(() => Math.random() - 0.5);;
for (let i = 0; i < 18; i++){
  const card = new Card(arr[i],i+1, (data) =>{
    const tempCard = document.querySelector("#"+data);
    if (handlArr.length < 3){
      card.showValue();
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
    if (arr[0].textContent === arr[1].textContent){
      arr.forEach(elt => elt.classList.add('card_solved') )
      arr.splice(0,2);
    } else setTimeout(restoreRes,500,arr);    
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

