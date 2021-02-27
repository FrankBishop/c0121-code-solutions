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

var player1Hand = _.dropRight(shuffle, 50)
var player2PreHand = _.drop(shuffle, 2)
var player2Hand = _.dropRight(player2PreHand, 48)
var player3PreHand = _.drop(shuffle, 4)
var player3Hand = _.dropRight(player3PreHand, 46)
var player4PreHand = _.drop(shuffle, 6)
var player4Hand = _.dropRight(player4PreHand, 44)

players[0].hand = player1Hand;
players[1].hand = player2Hand;
players[2].hand = player3Hand;
players[3].hand = player4Hand;


function findScore(hand) {
  var playerScore = 0;
  for (var i = 0; i < hand.length; i++) {
    if (hand[i].rank <= 10) {
      playerScore += hand[i].rank;
    } else if (hand[i].rank === 'jack' || hand[i].rank === 'queen' || hand[i].rank === 'king') {
      playerScore += 10;
    } else {
      playerScore += 11;
    }
  }
  return playerScore
}

var player1Score = findScore (players[0].hand)
var player2Score = findScore (players[1].hand)
var player3Score = findScore(players[2].hand)
var player4Score = findScore(players[3].hand)

var scores = [player1Score, player2Score, player3Score, player4Score];
var winningScore = _.max(scores);

var winnerIndex = scores.indexOf(winningScore);

var winner = players[winnerIndex].name
console.log('and the winner is', winner)
