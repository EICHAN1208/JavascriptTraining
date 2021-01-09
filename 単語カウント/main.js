// 入力: "no ruby no life"
// 出力: {"no" => 2, "ruby" => 1, "life" => 1}

let word = 'no javascript no life';
let array1 = word.split(' ');

function toCountDict(array) {
  let dict = {};
  for(let key of array) {  // arrayの要素を一つずつ評価
    dict[key] = array.filter(function(x) {  // dict[key]がdictオブジェクトの値となる, arrayの要素と等しいものをまたarrayからfilterしている
      return x === key;
    }).length;
  }
  return dict;
}

console.log(toCountDict(array1));


// array1の中身の要素を順番に実行する
// for(let value of array1) {
//   console.log(value);
// }

// let ary = [1,2,3];
// let dict = { "hello": null };
// dict[hello] = ary.filter( x => {
//   return x === 1;
// })
// console.log(dict);