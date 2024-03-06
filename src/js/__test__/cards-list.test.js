import CardsList from '../components/card-list/CardsList';

describe('CardsList', () => {
  let container;
  let cardsList;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    cardsList = new CardsList(container);
    cardsList.bindToDOM();
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  test('initializes and binds correctly to DOM', () => {
    const listElement = container.querySelector('.cards');
    expect(listElement).not.toBeNull();
    expect(container.querySelectorAll('img').length).toBe(cardsList.cards.length);
  });

  test('displays correct card data', () => {
    const listItems = container.querySelectorAll('.cards');
    listItems.forEach((item, index) => {
      const cardImg = item.querySelector('.card');
      expect(cardImg.classList.contains(cardsList.cards[index].class)).toBeTruthy();
      expect(cardImg.getAttribute('alt')).toBe(cardsList.cards[index].title);
    });
  });
});
