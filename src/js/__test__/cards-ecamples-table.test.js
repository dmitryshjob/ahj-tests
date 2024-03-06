import CardExamplesTable from '../components/cards-examples-table/CardsExamplesTable';

describe('CardExamplesTable', () => {
  let container;
  let table;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    table = new CardExamplesTable(container);
    table.bindToDOM();
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  test('initializes and binds correctly to DOM', () => {
    const tableElement = container.querySelector('.table-examples');
    expect(tableElement).not.toBeNull();
    expect(container.querySelector('.table')).not.toBeNull();
    expect(container.querySelectorAll('tbody tr').length).toBe(table.cards.length);
  });

  test('displays correct card data', () => {
    const rows = container.querySelectorAll('tbody tr');
    rows.forEach((row, index) => {
      const cells = row.querySelectorAll('td');
      expect(cells[0].textContent).toBe(table.cards[index].type);
      expect(cells[1].textContent).toBe(table.cards[index].number);
    });
  });
});
