import visaElectron from '../../../img/visa.png';
import MasterCard from '../../../img/mastercard.png';
import AmexCard from '../../../img/amex.png';
import DiscoverCard from '../../../img/discover.png';
import MirCard from '../../../img/mir.png';
import DinersClubCard from '../../../img/diners.png';

import './card-list.css';

export default class CardsList {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }

    this.container = container;
    this.cards = [
      {class: 'mir', title: 'Mir', url: MirCard},
      {class: 'amex', title: 'American Express', url: AmexCard},
      {class: 'diners', title: 'Diners Club', url: DinersClubCard},
      {class: 'discover', title: 'Discover', url: DiscoverCard},
      {class: 'master', title: 'Mastercard', url: MasterCard},
      {class: 'visa', title: 'Visa', url: visaElectron},
    ];
  }

  bindToDOM() {
    this.container.innerHTML = this.markup;
  }

  get markup() {
    return `
      <div class="cards">
        ${this.cards
    .map(
      (card) => `
        <div>
          <img class="card ${card.class}" src=${card.url} alt="${card.title}">
        </div>  
        `,
    )
    .join('')}
      </div>
    `;
  }
}
