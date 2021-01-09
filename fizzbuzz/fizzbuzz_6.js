const fb = {
  from: 1,
  to: 100,
  range() {
    const range = [...Array(this.to - this.from + 1).keys()].map((_, i) => i + this.from);
    console.log(range);
  },
  toFizzBuzz() {
    this.range;
    // const range = this.range();
    // this.range().map(function(num) {
    //   if (num % 15 === 0) {
    //     console.log('fizzbuzz');
    //   } else if (num % 5 === 0) {
    //     console.log('buzz');
    //   } else if (num % 3 === 0) {
    //     console.log('fizz');
    //   } else {
    //     console.log(num);
    //   }
    // })
  }
}
