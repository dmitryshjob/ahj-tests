import CheckForm from '../components/check-form/CheckForm';

describe('CheckForm', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  test('throws an error when not provided an HTMLElement', () => {
    expect(() => new CheckForm('string')).toThrow(
      'container is not HTMLElement',
    );
  });

  describe('With bound form', () => {
    let form; let input; let submit; let
      message;

    beforeEach(() => {
      form = new CheckForm(container);
      form.bindToDOM();
      input = container.querySelector(CheckForm.inputSelector);
      submit = container.querySelector(CheckForm.submitSelector);
      message = container.querySelector(CheckForm.messageSelector);
    });

    test('binds correctly to DOM', () => {
      const formElement = container.querySelector(CheckForm.selector);
      expect(formElement).not.toBeNull();
      expect(formElement.querySelector(CheckForm.inputSelector)).not.toBeNull();
      expect(formElement.querySelector(CheckForm.submitSelector)).not.toBeNull();
      expect(formElement.querySelector(CheckForm.messageSelector)).not.toBeNull();
    });

    test('shows message for invalid card input', () => {
      input.value = '1234567890';
      submit.click();

      expect(input.classList.contains('valid')).toBeFalsy();
      expect(message.classList.contains('hidden')).toBeTruthy();
    });

    test('shows message for valid card input', () => {
      input.value = '30569309025904';
      submit.click();

      expect(input.classList.contains('invalid')).toBeFalsy();
      expect(message.classList.contains('hidden')).toBeFalsy();
    });
  });
});
