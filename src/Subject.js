class Subject {
  constructor() {
    this._observers = [];
  }

  addObserver(observer) {
    this._observers.push(observer);
  }

  notifyObservers() {
    this._observers.forEach(observer => observer.update());
  }
}

class Observer {
  update() {
    console.log('Observer notified');
  }
}

export { Subject, Observer };