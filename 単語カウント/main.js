// 入力: "no ruby no life"
// 出力: {"no" => 2, "ruby" => 1, "life" => 1}

// 配列にする
// それぞれの要素の数を数える
// 結果をハッシュに入れる

// どのような出力をするか
// let word = 'no javascript no life';
// word_count(word);
// => {"no" => 2, "ruby" => 1, "life" => 1}

let word = 'no javascript no life';
let array1 = word.split(' ');

function toCountDict(array) {
  let dict = {};
  for(let value of array) {
    dict[value] = array.filter(function(x) {   // xには順番にarrayの要素が渡される
      return x === value;
    }).length;   // arrayの要素を一つずつ評価して、その要素とkeyが等しいならば、trueなのでその要素自体を返す
  }
  return dict;
}

console.log(toCountDict(array1));


// array1の中身の要素を順番に実行する
for(let value of array1) {
  console.log(value);
}