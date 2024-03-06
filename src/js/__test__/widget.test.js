import Widget from '../components/widget/Widget';

describe('Widget', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  test('throws an error when not provided an HTMLElement', () => {
    expect(() => new Widget('string')).toThrow('container is not HTMLElement');
  });

  test('binds correctly to DOM', () => {
    const widget = new Widget(container);
    widget.bindToDOM();

    const widgetElement = container.querySelector(Widget.selector);
    expect(widgetElement).not.toBeNull();

    expect(widgetElement.querySelector(Widget.formSelector)).not.toBeNull();
    expect(widgetElement.querySelector(Widget.cardsSelector)).not.toBeNull();
  });

  describe('bindToDOM', () => {
    test.each([
      [Widget.cardsSelector, 'cards'],
      [Widget.formSelector, 'form'],
    ])('creates and binds %s to DOM', (selector, className) => {
      const widget = new Widget(container);
      widget.bindToDOM();

      const componentContainer = container.querySelector(selector);
      expect(componentContainer).not.toBeNull();
      expect(componentContainer.querySelector(`.${className}`)).not.toBeNull();
    });
  });
});
