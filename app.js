'use strict';

var correctcount = 0;
var number = Math.floor((Math.random() * 50) + 1);
console.log('The correct number for question 6 is ' + number);
var numberTries = 4;
var animalTries = 6;
var animals = ['fox','whale','sheep','dove','otter'];

var questions = ['Do I have any pets?', 'Is blue my favorite color?', 'Am I from Seattle?', 'Am I under six feet tall?', 'Is the rhombicosidodecahedron my favorite Archimedean solid?','I am thinking of a number between 1 and 50... You get 4 tries...', 'What is one of my favorite animals? You have 6 tries!' ];
var correctAnswers = ['Y', 'Y', 'Y', 'N', 'N', number];
var correctWords = ['yes', 'yes,', 'yes', 'no', 'no'];
var corrects = [ 'You are correct! I have two kitties!', 'You are correct! It is my favorite color!', 'You are correct! I am from Seattle!', 'That\'s right! This was an easy one...', 'You are correct! I like the rhombicuboctahedron a lot more!', 'Good job! you got it right!','You got one of them! My favorite animals are: \n fox \n whale \n sheep \n dove \n otter'];

var wrongAnswers = ['N','N','N','Y','Y',];
var wrongWords = ['no','no','no','yes','yes'];
var wrongs = [ 'Wrong, I have two cats.', 'Actually, it is my favorite color.', 'Too Bad, you are wrong. I am from Seattle.', 'I actually am about six and a half feet tall... And this was the easy one...', 'Actually, I prefer the rhombicuboctahedron.', 'That is zero... it is not between 1 and 10'];

var confirmquiz = confirm('Hello, would you like to play a game?');
var i = 0;

function askYN(i){
  for (var i = 0; i < 5; i++) {
    var response = prompt(questions[i]);
    if (response.toUpperCase() === correctAnswers[i] || response.toLowerCase() === correctWords[i]){
      console.log(corrects[i]);
      alert(corrects[i]);
      correctcount++;
    } else if (response.toUpperCase() === wrongAnswers[i] || response.toLowerCase() === wrongWords[i]){
      console.log(wrongs[i]);
      alert(wrongs[i]);
    } else {
      console.log('invalid input');
      alert('Please input either a Y or an N.');
      i--;
    }
  }
}

function askRandom(){
  do{
    var response = prompt(questions[5]);
    if(+response === correctAnswers[5]){
      alert(corrects[5]);
      correctcount++;
      break;
    } else if (+response > correctAnswers[5]){
      alert('Too high! ' + numberTries + ' tries remaining.');
      numberTries--;
    } else if (+response < correctAnswers[5]){
      alert('Too low! ' + numberTries + ' tries remaining.');
      numberTries--;
    }
  } while (numberTries >= 0);
  alert('The number was ' + correctAnswers[5] + '!');
}
function askAnimal(){
  do {
    var response = prompt(questions[6]);
    if (animals.includes(response.toLowerCase())){
      alert(corrects[6]);
      correctcount++;
      break;
    } else {
      animalTries--;
      alert('You have ' + animalTries + ' tries remaining.');
      if (animalTries === 0){
        alert('My favorite animals are: \n fox \n whale \n sheep \n dove \n otter');
      }
    }
  } while (animalTries > 0);
}

if(confirmquiz) {
  console.log('Awsome! Lets get started! Please answer all yes or no questions with a Y or N.');
  var name = prompt('Awesome! Lets get started! What is your name?' );
  alert('Hello, ' + name + ', Please answer all yes or no questions with a Y or N.');
  askYN(i);
  askRandom();
  askAnimal();
  alert(name + ', you have guessed ' + correctcount + ' out of 7 correctly! Thanks for playing!');

} else {
  alert('Okay! Here is my site!');
}
