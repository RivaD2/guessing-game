'use strict';
//LAB 02:
/*Prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity */

//Ask the user their name through a prompt()
//Display that name back to the user through a custom greeting welcoming them to my site
//Display the user’s name back to them in your final message to the use

//Add console.log() messages within my site to notify the user if they are correct
//use .toUpperCase() or .toLowerCase() functions
//Before submitting, comment out (don’t delete) your console.log()

// var welcomeName = prompt('What is your name?').toLowerCase();
// alert('Welcome to my site ' + welcomeName);
// console.log('welcomeName' + welcomeName);

// var twinAnswer = prompt('Is Riva a twin? Answer yes or no please.').toLowerCase();
// if (twinAnswer === 'yes' || twinAnswer === 'y' || twinAnswer === 'YES' || twinAnswer === 'Y') {
//   // console.log('correct');
//   alert('Wow, you might be seeing double!');
// } else if (twinAnswer === 'no' || twinAnswer === 'n' || twinAnswer === 'NO' || twinAnswer === 'N'){
//   // console.log('incorrect');
//   alert('You barely know her, so I wouldn\'t expect you to remember.');
// } else if(twinAnswer === 'I don\'t know') {
//   // console.log('don't know);
//   alert('That\'s ok, read the webpage to find out.');
// } else {
//   // console.log('no answer');
//   alert('Move on to the next question.');
// }


// var hasCatAnswer = prompt('Does Riva have a black cat?').toLowerCase();
// if(hasCatAnswer === 'yes' || hasCatAnswer === 'y'|| hasCatAnswer === 'YES' || hasCatAnswer === 'Y') {
//   // console.log('you are right');
//   alert('Nice job! His name is Ragnar and he is the best cat in the land.');
// } else if (hasCatAnswer === 'no' || hasCatAnswer === 'n' || hasCatAnswer === 'NO' || hasCatAnswer === 'N') {
//   // console.log('you are wrong');
//   alert('Good try, but wrong answer.');
// } else {
//   // console.log('not a valid input');
//   alert('Here\'s a hint: \'Meow\'');
// }
// console.log(hasCatAnswer);


// var logResult = 'You are wrong';
// var yearsInSeattleAnswer;
// yearsInSeattleAnswer = prompt('How long has Riva been in Seattle? Choose numbers 1,2,3,4, or 5.');
// switch(yearsInSeattleAnswer) {
// case '0':
// case '1':
//   alert('Nope, guess again.');
//   break;
// case '2':
// case '3':
//   alert('Getting warmer, guess again.');
//   break;
// case '4':
//   alert('Ouch hot tamale! So close but sadly still wrong.');
//   break;
// case '5':
//   logResult = 'You are right';
//   alert('Yay, you guessed correctly!');
//   break;
// default:
//   alert('Why are you not guessing any numbers?');
// }
// // console.log(logResult);

// var speakRussianAnswer = prompt('Does Riva speak Russian?').toLowerCase();
// if(speakRussianAnswer  === 'yes' || speakRussianAnswer === 'y'|| speakRussianAnswer === 'YES' || speakRussianAnswer === 'Y') {
//   // console.log(user is correct);
//   alert('da, da, da, you are correct!');
// } else if(speakRussianAnswer  === 'yes' || speakRussianAnswer === 'y'|| speakRussianAnswer === 'YES' || speakRussianAnswer === 'Y') {
//   // console.log(The user has guessed wrong);
//   alert('net, net, net! Wrong answer my friend.');
// }

// const favoriteMovieAnswer = prompt('Is Riva\'s favorite movie Fifth Element?').toLowerCase();
//adding the strictly equals to each possible answer ensures that the various inputs of user will be valid
// if(favoriteMovieAnswer  === 'yes' || favoriteMovieAnswer === 'y'|| favoriteMovieAnswer === 'YES' || favoriteMovieAnswer === 'Y') {
//   // console.log(answer valid);
//   alert(' "Leeloo Dallas Multipass"');
// } else if(favoriteMovieAnswer === 'no' || favoriteMovieAnswer === 'n' || favoriteMovieAnswer === 'NO' || favoriteMovieAnswer === 'N') {
//   // console.log(answer invalid);
//   alert('Wrong Answer ' + welcomeName + ', now the Earth is doomed! (Also, watch the movie!)');
// }


// LAB 03 portion of work// QUESTION 6
// Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// Indicate through an alert if the guess is “too high” or “too low”.
// It should give the user exactly four opportunities to get the correct answer.
// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

// var count = 0;
// while(count < 4) {
//   var rivaAge = prompt('How old is Riva? You can guess four times using numbers 30-40');
//   //console.log(rivaAge);
//   // I used parseInt  to convert the string into and integer so that it could be compared to 33
//   rivaAge = parseInt(rivaAge);
//   if (rivaAge === 33) {
//     alert ('WOW, you did it, you got it right!');
//     break;
//   }
//   else if (rivaAge > 33) {
//     count++;
//     alert(' Too High!');
//   }
//   else if( rivaAge < 33) {
//     count++;
//     alert( 'Too Low, guess again my friend!');
//   }
// //created a second if statement inside while loop and set count to === 4
// // This will stop the user from having any other attempts to guess again as they have reached limit of 4
//   if(count === 4) {
//     alert('You tried you best, the correct answer is 33!');
//   }
// }

//QUESTION 7:
// Add a 7th question that has multiple possible correct answers that are stored in an array.
// Give the user 6 attempts to guess the correct answer.
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question.

var foodsAnswer = ['green onion pancakes', 'piroshky', ]



