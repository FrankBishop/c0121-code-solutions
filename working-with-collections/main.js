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

var deck = [];
var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];

function createDeck() {
  for (var j = 0; j < suits.length; j++) {
    for (var i = 0; i < ranks.length; i++) {
      var card = {};
      card.suit = suits[j]
      card.rank = ranks[i]
      deck.unshift(card)
    }
  }
  return deck
}

createDeck();

var shuffle = _.shuffle(deck);

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

var player1Score = findScore(players[0].hand)
var player2Score = findScore(players[1].hand)
var player3Score = findScore(players[2].hand)
var player4Score = findScore(players[3].hand)

var scores = [player1Score, player2Score, player3Score, player4Score];
var winningScore = _.max(scores);

var winnerIndex = scores.indexOf(winningScore);

var winner = players[winnerIndex].name
console.log('and the winner is', winner)
