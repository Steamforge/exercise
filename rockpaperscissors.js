/*
rock, paper, scissors
*/

var roshambo = function(player) {
  var throws = [{
    name: 'rock',
    beats: 'scissors',
    loses: 'paper'
  }, {
    name: 'paper',
    beats: 'rock',
    loses: 'scissors'
  }, {
    name: 'scissors',
    beats: 'paper',
    loses: 'rock'
  }];
  var rand = Math.floor((Math.random() * 3));
  var win = '';

  if (player === throws[rand].beats) {
    win = 'I win';
  } else if (player === throws[rand].loses) {
    win = 'Player wins';
  } else {
    win = 'Tie game';
  }

  return 'Player throws ' + player + ' and I throw ' + throws[rand].name + '</br>' + win;
};
