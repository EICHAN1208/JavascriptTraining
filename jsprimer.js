class NumberWrapper {
  constructor(value) {
    this._value = value;
  }

  get value() {
    console.log('getter');
    return this._value;
  }
}