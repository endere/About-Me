'use strict';

var correctcount = 0;
var number = Math.floor((Math.random() * 10) + 1);
console.log('The correct number for question 6 is ' + number);
var numbertries = 4;
var animaltries = 6;
var animals = ['fox','whale','sheep','dove','otter'];

var questions = ['Do I have any pets?', 'Is blue my favorite color?', 'Am I from Seattle?',  'Am I under six feet tall?', 'Is the rhombicosidodecahedron my favorite Archimedean solid?','I am thinking of a number between 1 and 10... You get 4 tries...', 'What is one of my favorite animals? You have 6 tries!' ];
var correctAnswers = ['Y', 'Y', 'Y', 'N', 'N', number];
var corrects = [ 'You are correct! I have two kitties!', 'You are correct! It is my favorite color!', 'You are correct! I am from Seattle!', 'That\'s right! This was an easy one...', 'You are correct! I like the rhombicuboctahedron a lot more!', 'Good job! you got it right!','You got one of them! My favorite animals are: \n fox \n whale \n sheep \n dove \n otter'];

var wrongAnswers = ['N','N','N','Y','Y',];
var wrongs = [ 'Wrong, I have two cats.', 'Actually, it is my favorite color.', 'Too Bad, you are wrong. I am from Seattle.', 'I actually am about six and a half feet tall... And this was the easy one...', 'Actually, I prefer the rhombicuboctahedron.', 'That is zero... it is not between 1 and 10'];

var confirmquiz = confirm('Hello, would you like to play a game?');

if(confirmquiz) {
  console.log('Awsome! Lets get started! Please answer all yes or no questions with a Y or N.');
  var name = prompt('Awesome! Lets get started! What is your name?' );
  alert('Hello, ' + name + ', Please answer all yes or no questions with a Y or N.');

  for (var i = 0; i < questions.length; i++) {
    var response = prompt(questions[i]);
    if (i < 5){
      if (response.toUpperCase() === correctAnswers[i]){
        console.log(corrects[i]);
        alert(corrects[i]);
        correctcount++;
      }
      else if (response.toUpperCase() === wrongAnswers[i]){
        console.log(wrongs[i]);
        alert(wrongs[i]);
      } else {
        console.log('invalid input');
        alert('Please input either a Y or an N.');
        i--;
      }
    }
    if(i === 5){
      if(+response === correctAnswers[i]){
        console.log(response);
        console.log(corrects[i]);
        alert(corrects[i]);
        correctcount++;
      } else if (numbertries > 1) {
        numbertries--;
        console.log(numbertries + " tries remaining.");
        alert("You have " + numbertries + ' tries remaining.');
        i--;
      }
    }
    else if (i === 6){
      if (animals.includes(response.toLowerCase())){
        alert(corrects[i]);
        correctcount++;
      }else if (animaltries > 1) {
        animaltries--;
        alert('You have ' + animaltries + ' tries remaining.');
        i--;
      }else{
        alert('My favorite animals are: \n fox \n whale \n sheep \n dove \n otter');
      }

    }
  }

  alert(name + ', you have guessed ' + correctcount + ' out of 7 correctly! Thanks for playing!');
}else{
  alert('Okay! Here is my site!');
}
