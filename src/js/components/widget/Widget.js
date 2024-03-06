import CardsList from '../card-list/CardsList';
import CheckForm from '../check-form/CheckForm';
import './widget.css';

export default class Widget {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }

    this.container = container;
  }

  bindToDOM() {
    this.container.innerHTML = Widget.markup;

    this.element = this.container.querySelector(Widget.selector);
    this.formContainer = this.element.querySelector(Widget.formSelector);
    this.cardsContainer = this.element.querySelector(Widget.cardsSelector);

    const form = new CheckForm(this.formContainer);
    form.bindToDOM();

    const cards = new CardsList(this.cardsContainer);
    cards.bindToDOM();
  }

  static get markup() {
    return `
    <div class='widget'>
    <h3>Проверьте номер своей кредитной карты</h3>
    <div class='cards-container'></div>
    <div class='form-container'></div>
    </div>
    `;
  }

  static get formSelector() {
    return '.form-container';
  }

  static get cardsSelector() {
    return '.cards-container';
  }

  static get selector() {
    return '.widget';
  }
}
