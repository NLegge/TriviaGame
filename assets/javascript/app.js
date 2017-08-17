$(document).ready(function() {
  var timer = 30;
  var intervalId;
  var index = 0;
  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;
  var userSelection;
  var questions = [
    {
  	  q: 'Many thematic, architectural, and plot elements were strongly inspired by what famous author?',
  	  a: ['F. Scott Fitzgerald', 'Ayn Rand', 'Ernest Hemingway', 'Edith Wharton'],
  	  correctA: 'Ayn Rand',
  	  image: 'assets/images/aynRand.jpg'
    },
    {  
  	  q: 'Director Ken Lavine insisted on voicing which in game vending machine?',
  	  a: ['Gene Bank', 'El Ammo Bandito', 'Gatherers Garden', 'Circus of Values'],
  	  correctA: 'Circus of Values',
  	  image: 'assets/images/circusOfValues.jpg'
    },
    {
  	  q: 'What famous phrase allowed Frank Fontain to control Jack?',
  	  a: ['Abracadabra', 'If It Pleases', 'Would You Kindly', 'What Is Your Pleasure'],
  	  correctA: 'Would You Kindly',
  	  image: 'assets/images/wouldYouKindly.png'
    }
  ]
  //start game
  $('#start').on('click', function () {
  	$('.initiate').addClass('hidden');
  	$('.timeRemaining').removeClass('hidden');
  	$('.question').removeClass('hidden');
  	generateQuiz();
  	startTimer();
  	//$('#start').prop("disabled", true);
  });
  //start timer
  function startTimer () {
  	intervalId = setInterval(countDown, 1000);
  }
  //timer count down
  function countDown () {
    timer--;
    $('#counter').html(timer);
    if (timer === 0) {
    	clearInterval(intervalId);
    	$('#message').html('Time is up!');
      $('#correction').html('The answer is ' + questions[index].correctA);
  	  $('#image').attr('src', questions[index].image);
  	  $('.question').addClass('hidden');
      $('.answer').removeClass('hidden');
  	  unanswered++;
  	  index++;
  	  if (index < questions.length) {
        setTimeout(next, 3000);
      }
      else {
        setTimeout(winLose, 3000);
      }
    }
  }
  //write question to quiz
  function generateQuiz () {
  	$('#ask').html(questions[index].q);
  	$('#q1').html(questions[index].a[0]);
  	$('#q2').html(questions[index].a[1]);
  	$('#q3').html(questions[index].a[2]);
  	$('#q4').html(questions[index].a[3]);
  }
  //user answer selection
  $('.choice').on('click', function (event) {
    event.preventDefault();
    userSelection = $(this).text();
    clearInterval(intervalId);
    $('.question').addClass('hidden');
    $('.answer').removeClass('hidden');
    if (userSelection === questions[index].correctA) {
      $('#message').html('Correct!');
  	$('#correction').html('The answer is ' + questions[index].correctA);
  	$('#image').attr('src', questions[index].image);
  	correct++;
    }
    else {
  	$('#message').html('Wrong!');
  	$('#correction').html('The answer is ' + questions[index].correctA);
  	$('#image').attr('src', questions[index].image);
  	incorrect++;
    }
    index++;
    if (index < questions.length) {
      setTimeout(next, 3000);
    }
    else {
      setTimeout(winLose, 3000);
    }
  });
  //next question
  function next () {
  	timer = 30;
  	$('#counter').html('30');
  	generateQuiz();
  	$('.answer').addClass('hidden');
  	$('.question').removeClass('hidden');
  	startTimer();
  }
  //win/lose function
  function winLose () {
    $('#correct').html(correct);
    $('#incorrect').html(incorrect);
    $('#unanswered').html(unanswered);
    $('.answer').addClass('hidden');
    $('.timeRemaining').addClass('hidden');
    $('.summary').removeClass('hidden');
  }
  //restart game
  $('#restart').on('click', function () {
    index = 0
    timer = 30
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    $('.summary').addClass('hidden');
    $('.timeRemaining').removeClass('hidden');
    $('.question').removeClass('hidden');
    generateQuiz();
    startTimer();
  });
});  