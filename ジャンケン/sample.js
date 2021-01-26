const winningSet = [
  ['グー', 'チョキ'],
  ['チョキ', 'パー'],
  ['パー', 'グー']
];

const result = ['グー', 'チョキ'];

const conditions = (element) => element[0] === result[0] && element[1] === result[1];
console.log(winningSet.some(conditions));
// => true

// winningSetの要素一つ一つに対して、テスト関数を実行して、trueとなった時点の要素を返す