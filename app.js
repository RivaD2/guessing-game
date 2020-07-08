'use strict';

/*Prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity */

//Ask the user their name through a prompt()
//Display that name back to the user through a custom greeting welcoming them to my site
//Display the user’s name back to them in your final message to the use

//Add console.log() messages within my site to notify the user if they are correct
//use .toUpperCase() or .toLowerCase() functions
//Before submitting, comment out (don’t delete) your console.log()

var welcomeName = prompt('what is your name?');
alert('Welcome ' + welcomeName + ' to my site!');
//console.log('welcomeName' + welcomeName);

var twinAnswer = prompt('Is Riva a twin? Answer yes or no');
if (twinAnswer === 'yes') {
  alert('Wow, you might be seeing double!');
} else if (twinAnswer === 'no'){
  alert('You barely know her, so I wouldn\'t expect you to remember') ; 
} else if(twinAnswer === 'I don\'t know') {
  alert('That\'s ok, read the webpage to find out');
} else {
  alert('Move on to the next question');
}
// console.log(twinAnswer);

var hasCatAnswer = prompt('Does Riva have a black cat?');
if(hasCatAnswer === 'yes') {
  alert('Nice job! His name is Ragnar and he is the best cat in the land');
} else if (hasCatAnswer === 'no') {
  alert('Good try, but wrong answer');
} else {
  alert('Here\'s a hint: \'Meow\'');
}
//console.log(hasCatAnswer);



var yearsInSeattleAnswer;
yearsInSeattleAnswer = prompt('How long has Riva been in Seattle? Choose numbers 1,2,3,4, or 5');
switch(yearsInSeattleAnswer) {
case '0':
case '1':
  alert('Nope, guess again');
  break;
case '2':
case '3':
  alert('Getting warmer, guess again');
  break;
case '4':
  alert('Ouch hot tamale so close but sadly still wrong');
  break;
case '5':
  alert('Yay, you guessed correctly!');
  break;
default:
  alert(' Why are you not guessing any numbers?');
}
console.log('3');

var speakRussianAnswer = prompt('Does Riva speak Russian?');
if(speakRussianAnswer === 'yes') {
  alert('da, da, da, you are correctomundo');
} else if(speakRussianAnswer === 'no') {
  alert('net, net, net! Wrong answer my friend');
}



