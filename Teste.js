import FormaterFactory from './src/FormaterFactory.js';
import FormaterDecorator from './src/FormaterDecorator.js';
import FormaterHTML from './src/FormaterHTML.js';
import FormaterTXT from './src/FormaterTXT.js';
import { Subject, Observer } from './src/Subject.js';
import assert from 'assert';

function testStrategyFactory() {
  const formaterHTML = FormaterFactory.createFormater('html');
  assert(formaterHTML instanceof FormaterHTML, 'Formater HTML creation failed');

  const formaterTXT = FormaterFactory.createFormater('txt');
  assert(formaterTXT instanceof FormaterTXT, 'Formater TXT creation failed');
}

function testStrategyDecorator() {
  const formater = new FormaterHTML();
  const decoratedFormater = new FormaterDecorator(formater);
  
  console.log('Decorated Formater HTML:');
  decoratedFormater.output([{ Nome: 'Cidade1' }]);
}

function testObserver() {
  const subject = new Subject();
  const observer = new Observer();

  subject.addObserver(observer);
  console.log('Notifying observers:');
  subject.notifyObservers();
}

testStrategyFactory();
testStrategyDecorator();
testObserver();

console.log('All tests passed');