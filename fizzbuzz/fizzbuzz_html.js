// fizzbuzzはまったく状態を持たないので、現状ではprototypeやclassを使用するメリットは少ないかも
// list.join出なくても、文字列の結合でもいける「lists += `<li>${element}</li>\n        `;」など

function FizzBuzz() {
}

FizzBuzz.prototype.toArrayNumbers = function(from, to) {
  const array = [];
  [...Array(to - from + 1).keys()].map( i => {
    const num = i + from;
    if (num % 15 === 0) {
      array.push('fizzbuzz');
    } else if (num % 5 === 0) {
      array.push('buzz');
    } else if (num % 3 === 0) {
      array.push('fizz');
    } else {
      array.push(num);
    }
  })
  return array;
}

FizzBuzz.prototype.toHtml = function(a, b) {
  const numbers = this.toArrayNumbers(a, b);
  const lists = [];
  numbers.forEach(element => {
    lists.push(`<li>${element}</li>`);
  });

  const html = `
  <html>
    <body>
      <ul>
        ${lists.join(`\n        `)}
      </ul>
    </body>
  </html>`;
  console.log(html);
};



const fb = new FizzBuzz();
fb.toHtml(1, 100);
