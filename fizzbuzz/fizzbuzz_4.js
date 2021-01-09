function toArrayNumbers(from, to) {
  this.from = from;
  this.to = to;

  const range = [...Array(to - from + 1).keys()].map((_, i) => i + from);
  range.map((num) => {
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
}

toArrayNumbers(30, 100);
