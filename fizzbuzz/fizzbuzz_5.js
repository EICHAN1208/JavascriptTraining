function FizzBuzz(from, to) {
  this.from = from;
  this.to = to;
}

FizzBuzz.prototype.toFizzBuzz = function () {
  [...Array(this.to - this.from + 1).keys()].map( i => {
    const num = i + this.from;
    if (num % 15 === 0) {
      console.log('fizzbuzz');
    } else if (num % 5 === 0) {
      console.log('buzz');
    } else if (num % 3 === 0) {
      console.log('fizz');
    } else {
      console.log(num);
    }
  })
};

const fb = new FizzBuzz(1, 100);
fb.toFizzBuzz();
