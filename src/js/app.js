import Validator from './components/validator/Validator';

const container = document.querySelector("#container");
const validator = new Validator(container);
validator.bindToDOM();
