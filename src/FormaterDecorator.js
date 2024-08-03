import AbstractFormater from './AbstractFormater.js';

export default class FormaterDecorator extends AbstractFormater {
  constructor(formater) {
    super();
    this._formater = formater;
  }

  output(cities) {
    console.log('Executing additional behavior');
    return this._formater.output(cities);
  }
}