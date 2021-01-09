//fizzbuzz(number)で実行する

// function fizzbuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 15 == 0) {
//       console.log('fizzbuzz');
//     } else if(i % 3 == 0){
//       console.log('fizz');
//     } else if(i % 5 == 0) {
//       console.log('buzz');
//     } else {
//       console.log(i);
//     }
//   }
// }

// // // 1.fizzbuzz - 1
// function fizzbuzz(number) {
//   if (number % 15 === 0) {
//     return 'fizzbuzz';
//   } else if (number % 5 === 0) {
//     return 'buzz';
//   } else if (number % 3 === 0) {
//     return 'fizz';
//   } else {
//     return number;
//   }
// }

// // 2.fizzbuzz - 2
// function fizzbuzz(i, j) {
//   const array = [];
//   for (let i = 1; i <= j; i++) {
//     if (i % 15 ===0) {
//       array.push('fizzbuzz');
//     } else if (i % 5 === 0) {
//       array.push('buzz');
//     } else if (i % 3 === 0) {
//       array.push('fizz');
//     } else {
//       array.push(i);
//     }
//   }
//   return array;
// }
// console.log(fizzbuzz(1, 30));


// const fb = {
//   to_fizzbuzz: function(num) {
//     if (num % 15 === 0) {
//       return 'fizzbuzz';
//     } else if (num % 5 === 0) {
//       return 'buzz';
//     } else if (num % 3 === 0) {
//       return 'fizz';
//     } else {
//       return num;
//     }
//   }
// }


function FizzBuzz(number) {
  this.number = number;
}

FizzBuzz.prototype.toFizzBuzz = function() {
  if (this.number % 15 === 0) {
    return 'fizzbuzz';
  } else if (this.number % 5 === 0) {
    return 'buzz';
  } else if (this.number % 3 === 0) {
    return 'fizz';
  } else {
    return this.number;
  }
};

const fb = new FizzBuzz(5);
console.log(fb.toFizzBuzz());