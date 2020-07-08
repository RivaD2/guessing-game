'use strict';

/*Prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity */

//Ask the user their name through a prompt()
//Display that name back to the user through a custom greeting welcoming them to my site
//Display the user’s name back to them in your final message to the use

//Add console.log() messages within my site to notify the user if they are correct
//use .toUpperCase() or .toLowerCase() functions
//Before submitting, comment out (don’t delete) your console.log()

var welcomeName = prompt('What is your name?').toLowerCase();
alert('Welcome to my site ' + welcomeName);
//console.log('welcomeName' + welcomeName);

var twinAnswer = prompt('Is Riva a twin? Answer yes or no.').toLowerCase();
if (twinAnswer === 'yes') {
  // console.log('correct');
  alert('Wow, you might be seeing double!');
} else if (twinAnswer === 'no'){
  // console.log('incorrect');
  alert('You barely know her, so I wouldn\'t expect you to remember.').toLowerCase() ; 
} else if(twinAnswer === 'I don\'t know') {
  // console.log('don't know);
  alert('That\'s ok, read the webpage to find out.');
} else {
  // console.log('no answer');
  alert('Move on to the next question.');
}


var hasCatAnswer = prompt('Does Riva have a black cat?').toLowerCase();
if(hasCatAnswer === 'yes') {
  // console.log('you are right');
  alert('Nice job! His name is Ragnar and he is the best cat in the land.');
} else if (hasCatAnswer === 'no') {
  // console.log('you are wrong');
  alert('Good try, but wrong answer.');
} else {
  // console.log('not a valid input');
  alert('Here\'s a hint: \'Meow\'');
}
//console.log(hasCatAnswer);


var logResult = 'You are wrong';
var yearsInSeattleAnswer;
yearsInSeattleAnswer = prompt('How long has Riva been in Seattle? Choose numbers 1,2,3,4, or 5.');
switch(yearsInSeattleAnswer) {
case '0':
case '1':
  alert('Nope, guess again.');
  break;
case '2':
case '3':
  alert('Getting warmer, guess again.');
  break;
case '4':
  alert('Ouch hot tamale! So close but sadly still wrong.');
  break;
case '5':
  logResult = 'You are right';
  alert('Yay, you guessed correctly!');
  break;
default:
  alert('Why are you not guessing any numbers?');
}
// console.log(logResult);

var speakRussianAnswer = prompt('Does Riva speak Russian?').toLowerCase();
if(speakRussianAnswer === 'yes') {
  // console.log(user is correct);
  alert('da, da, da, you are correct!');
} else if(speakRussianAnswer === 'no') {
  // console.log(The user has guessed wrong);
  alert('net, net, net! Wrong answer my friend.');
}

const favoriteMovieAnswer = prompt('Is Riva\'s favorite movie Fifth Element?').toLowerCase();
if(favoriteMovieAnswer === 'yes') {
  // console.log(answer valid);
  alert(' "Leeloo Dallas Multipass"');
} else if(favoriteMovieAnswer === 'no') {
  // console.log(answer invalid);
  alert('Wrong Answer, now the Earth is doomed! (Also, watch the movie!)');
}


