console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    name: 'Frank',
    hand: null
  },
  {
    name: 'John',
    hand: null
  },
  {
    name: 'Ted',
    hand: null
  },
  {
    name: 'Jim',
    hand: null
  }
]

var cards = [
  {
    rank: 'ace',
    suit: 'clubs'
  },
  {
    rank: 2,
    suit: 'clubs'
  },
  {
    rank: 3,
    suit: 'clubs'
  },
  {
    rank: 4,
    suit: 'clubs'
  },
  {
    rank: 5,
    suit: 'clubs'
  },
  {
    rank: 6,
    suit: 'clubs'
  },
  {
    rank: 7,
    suit: 'clubs'
  },
  {
    rank: 8,
    suit: 'clubs'
  },
  {
    rank: 9,
    suit: 'clubs'
  },
  {
    rank: 10,
    suit: 'clubs'
  },
  {
    rank: 'jack',
    suit: 'clubs'
  },
  {
    rank: 'queen',
    suit: 'clubs'
  },
  {
    rank: 'king',
    suit: 'clubs'
  },
  {
    rank: 'ace',
    suit: 'diamonds'
  },
  {
    rank: 2,
    suit: 'diamonds'
  },
  {
    rank: 3,
    suit: 'diamonds'
  },
  {
    rank: 4,
    suit: 'diamonds'
  },
  {
    rank: 5,
    suit: 'diamonds'
  },
  {
    rank: 6,
    suit: 'diamonds'
  },
  {
    rank: 7,
    suit: 'diamonds'
  },
  {
    rank: 8,
    suit: 'diamonds'
  },
  {
    rank: 9,
    suit: 'diamonds'
  },
  {
    rank: 10,
    suit: 'diamonds'
  },
  {
    rank: 'jack',
    suit: 'diamonds'
  },
  {
    rank: 'queen',
    suit: 'diamonds'
  },
  {
    rank: 'king',
    suit: 'diamonds'
  },
  {
    rank: 'ace',
    suit: 'hearts'
  },
  {
    rank: 2,
    suit: 'hearts'
  },
  {
    rank: 3,
    suit: 'hearts'
  },
  {
    rank: 4,
    suit: 'hearts'
  },
  {
    rank: 5,
    suit: 'hearts'
  },
  {
    rank: 6,
    suit: 'hearts'
  },
  {
    rank: 7,
    suit: 'hearts'
  },
  {
    rank: 8,
    suit: 'hearts'
  },
  {
    rank: 9,
    suit: 'hearts'
  },
  {
    rank: 10,
    suit: 'hearts'
  },
  {
    rank: 'jack',
    suit: 'hearts'
  },
  {
    rank: 'queen',
    suit: 'hearts'
  },
  {
    rank: 'king',
    suit: 'hearts'
  },
  {
    rank: 'ace',
    suit: 'spades'
  },
  {
    rank: 2,
    suit: 'spades'
  },
  {
    rank: 3,
    suit: 'spades'
  },
  {
    rank: 4,
    suit: 'spades'
  },
  {
    rank: 5,
    suit: 'spades'
  },
  {
    rank: 6,
    suit: 'spades'
  },
  {
    rank: 7,
    suit: 'spades'
  },
  {
    rank: 8,
    suit: 'spades'
  },
  {
    rank: 9,
    suit: 'spades'
  },
  {
    rank: 10,
    suit: 'spades'
  },
  {
    rank: 'jack',
    suit: 'spades'
  },
  {
    rank: 'queen',
    suit: 'spades'
  },
  {
    rank: 'king',
    suit: 'spades'
  }
]


var shuffle = _.shuffle(cards);

console.log(shuffle)

// _.fromPairs(pairs)
//_.intersection([arrays])
//take two from front of array and give to each player with splice

var player1Hand = _.dropRight(shuffle, 50)
var player2PreHand = _.drop(shuffle, 2)
var player2Hand = _.dropRight(player2PreHand, 48)
var player3PreHand = _.drop(shuffle, 4)
var player3Hand = _.dropRight(player3PreHand, 46)
var player4PreHand = _.drop(shuffle, 6)
var player4Hand = _.dropRight(player4PreHand, 44)



// console.log(player1Hand)
// console.log(player2PreHand)
// console.log(player2Hand)
// console.log(player3PreHand)
// console.log(player3Hand)
// console.log(player4PreHand)
// console.log(player4Hand)

players[0].hand = player1Hand;
players[1].hand = player2Hand;
players[2].hand = player3Hand;
players[3].hand = player4Hand;
// console.log(players);

var score = 0;

function findScore() {

  for (var i = 0; i < players.length; i++) {
    // console.log(players[i].hand[0].rank);
    // console.log(players[i].hand[1].rank)
    for (var j = 0; j < players[i].hand.length; j++) {
      var playerScore = 0
      if (players[i].hand[j].rank <= 10) {

        // console.log(players[i].hand[j].rank)
        playerScore += players[i].hand[j].rank
        console.log(playerScore)
      } else {
        console.log('face')
      }

    }
  }
}
