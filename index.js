import FormaterFactory from './src/FormaterFactory.js';
import FormaterDecorator from './src/FormaterDecorator.js';
import CitiesReporter from './src/CitiesReporter.js';
import { Subject, Observer } from './src/Subject.js';

const [cmd, script, param1] = process.argv,
      filename = './data/cidades-2.json';

const formater = FormaterFactory.createFormater(param1);
const decoratedFormater = new FormaterDecorator(formater);

let reporter = new CitiesReporter({
      formaterStrategy: decoratedFormater
    }),
    output = reporter.report(filename);

console.log(output);

const subject = new Subject();
const observer = new Observer();
subject.addObserver(observer);
subject.notifyObservers();