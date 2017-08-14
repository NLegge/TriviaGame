//
var timer = 30;
var intervalId;
var index = 0;
var question = {
  q1: 'Many thematic, architectural, and plot elements were strongly inspired by what famous author?',
  q2: 'Director Ken Lavine insisted on voicing which in game vending machine?',
  q3: 'What famous phrase allowed Frank Fontain to control Jack?'
}

var answers = {
  q1: 'Ayn Rand',
  q2: 'Circus of Values', 
  q3: 'Would You Kindly'
}

var potentialAnswers = {
	q1: ['F. Scott Fitzgerald', 'Ayn Rand', 'Ernest Hemingway', 'Edith Wharton'],
	q2: ['Gene Bank', 'El Ammo Bandito', 'Gatherers Garden', 'Circus of Values'],
	q3: ['Abracadabra', 'If It Pleases', 'Would You Kindly', 'What Is Your Pleasure']
}

//start game
$('#start').on('click', function () {
  $('.initiate').addClass('hidden');
  $('.timeRemaining').removeClass('hidden');
  $('.question').removeClass('hidden');
  startTimer ();
});

//start timer
function startTimer () {
  intervalId = setInterval(countDown, 1000);
}

function countDown () {
  timer--;
  $('#counter').html(timer);
}