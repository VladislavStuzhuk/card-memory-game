export default class Card{
  constructor(value, id, clickHandler){
    this._id = id;
    this._value = value;
    this._handler = clickHandler;
    
  }
  _getTemplate(){
    const cardElement = document.querySelector('#card-template')
      .content
      .querySelector('.card')
      .cloneNode(true)
    return cardElement;
  }
  _setEventListeners(){
    this._element.addEventListener('click', () => {
      this._handler(this._element.id);  
    })
  }
  showValue(){
    this._cardValue.style.display = 'block';
  }
  generateCard(){
    this._element = this._getTemplate();
    this._cardValue = this._element.querySelector('.card__value') 
    this._cardValue.textContent = this._value;
    this._element.id = 'card'+ this._id;
    this._setEventListeners();
    return this._element;
  }
}