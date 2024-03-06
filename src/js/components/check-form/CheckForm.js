import findPaymentSystem from '../../validation/findPaymentSystem';
import isValid from '../../validation/isValid';
import './check-form.css';

export default class CheckForm {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }

    this.container = container;
    this.cards = [
      {class: 'mir', title: 'Mir'},
      {class: 'amex', title: 'American Express'},
      {class: 'diners', title: 'Diners Club'},
      {class: 'discover', title: 'Discover'},
      {class: 'master', title: 'Mastercard'},
      {class: 'visa', title: 'Visa'},
    ];

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  bindToDOM() {
    this.container.innerHTML = CheckForm.markup;

    const {
      selector, messageSelector, submitSelector, inputSelector,
    } = CheckForm;

    this.element = this.container.querySelector(selector);
    this.message = this.element.querySelector(messageSelector);
    this.submit = this.element.querySelector(submitSelector);
    this.input = this.element.querySelector(inputSelector);

    this.element.addEventListener('submit', this.onSubmit);
    this.input.addEventListener('input', this.onInputChange);
  }

  onSubmit(e) {
    e.preventDefault();

    const isValidCard = isValid(this.input.value);
    this.input.classList.toggle('valid', isValidCard);
    this.input.classList.toggle('invalid', !isValidCard);

    if (isValidCard) {
      const paymentSystem = findPaymentSystem(this.input.value);
      const card = document.querySelector(`.${paymentSystem}`);

      if (card) {
        card.classList.add('card-active');
      } else {
        this.showMessage();
      }
    }
  }

  onInputChange() {
    this.input.classList.remove('invalid', 'valid');
    const activeCard = document.querySelector('.card-active');
    if (activeCard) {
      activeCard.classList.remove('card-active');
    }
    this.hideMessage();
  }

  showMessage() {
    this.message.classList.remove('hidden');
  }

  hideMessage() {
    this.message.classList.add('hidden');
  }

  static get markup() {
    return `
      <form id="form" class="form">
          <div class="form-group">
              <input class="form-control" id="card_number" name="card_number" type="text" placeholder="введите номер карты" data-original-title="" title="">
          </div>
          <div class='button-wrapper'>
          <button class="submit">проверить</button>
          </div> 
          <span class="message"> Нет данных </span>
      </form>
    `;
  }

  static get selector() {
    return '.form';
  }

  static get messageSelector() {
    console.log("d");
    return '.message';
  }

  static get submitSelector() {
    return '.submit';
  }

  static get inputSelector() {
    return '.form-control';
  }
}
