const HANDS = [
  'グー',
  'チョキ',
  'パー'
]

const winningHandSet = [
  HANDS.slice(0, 2),
  HANDS.slice(1, 3),
  [HANDS[2], HANDS[0]]
]


function Janken(playerNum) {
  this.players = [...Array(playerNum)].map((_, i) => new Player(`cpu${i}`, Hand.random().type));
  this.you = new Player('you', null)
}

Janken.prototype.hoi = function(yourHand) {
  const allHands = this.collectAllHands(yourHand);
  if(this.uniq(allHands).length !== 2) {
    return [{ winner: null }];
  } else {
    const winHand = this.decideWinningHand(yourHand);
    return this.allPlayerAndHand(yourHand).filter(player => {
      if(player.hand === winHand) {
        return player.name;
      }
    }
    )
  }
}

Janken.prototype.decideWinningHand = function(yourHand) {
  const allHands = this.collectAllHands(yourHand);
  const conditions = (element) => element[0] === this.uniq(allHands)[0] && element[1] === this.uniq(allHands)[1] // テスト関数
  if(winningHandSet.some(conditions) === true) {
    return this.uniq(allHands)[0];
  } else {
    return this.uniq(allHands)[1];
  }
}

Janken.prototype.allPlayerAndHand = function(yourHand) {
  this.you.hand = yourHand
  this.players.push(this.you)
  return this.players;
}

Janken.prototype.collectAllHands = function(yourHand) {
  const players_hand = this.players.map( player => { return player.hand } );
  players_hand.push(yourHand);
  return players_hand;
}

// Janken.prototype.uniq = function(array) {
//   return array.filter(function(elem, index, self) {
//     return self.indexOf(elem) === index;
//   });
// }

Janken.prototype.uniq = function(array) {
  return Array.from(new Set(array))
}
// スプレッド構文でも書ける
// [...new Set(array)];

function Player(name, hand) {
  this.name = name;
  this.hand = hand;
}

Player.prototype.hand_type = function() {
  return this.choiceHand().type;
}

Player.prototype.choiceHand = function() {
  return Hand.random();
}

function Hand(type) {
  this.type = type;
}

Hand.random = function() {
  return new Hand(HANDS[Math.floor(Math.random() * HANDS.length)]);
}

const janken = new Janken(3);
console.log(janken.hoi('グー'));

// console.log(janken.uniq([1,2,3,3,3,3,3,5,6,6,6,7,7,7,8,8,9,10]));


// console.log(janken.players);
// console.log(janken.you);


// const janken = new Janken(3);   引数にプレイヤーの人数
// console.log(janken.hoi('グー'));
// => [winner: 'you', loser: ['cpu1', 'cpu2', 'cpu3']]
// => 

// console.log(janken.allPlayerAndHand('パー'));