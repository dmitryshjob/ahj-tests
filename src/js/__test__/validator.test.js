import Validator from '../components/validator/Validator';

describe('Validator', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  test('throws an error when not provided an HTMLElement', () => {
    expect(() => new Validator('string')).toThrow(
      'container is not HTMLElement',
    );
  });

  describe('bindToDOM', () => {
    test.each([
      ['.widget-container', 'widget'],
      ['.table-container', 'table-examples'],
    ])('creates and binds %s to DOM', (selector, className) => {
      const validator = new Validator(container);
      validator.bindToDOM();

      const componentContainer = container.querySelector(selector);
      expect(componentContainer).not.toBeNull();
      expect(componentContainer.querySelector(`.${className}`)).not.toBeNull();
    });
  });
});
