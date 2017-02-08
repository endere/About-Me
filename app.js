'use strict';

var confirmquiz = confirm('Hello, would you like to play a game?');
var correctcount = 0;

if(confirmquiz) {
  console.log('Awsome! Lets get started! Please answer all questions with a Y or N.');
  alert('Awesome! Lets get started! Please answer all questions with a Y or N.' );
} else {
  console.log('Too Bad, starting anyway. Please answer all questions with a Y or N.');
  alert('Too bad, starting anyway. Please answer all questions with a Y or N.' );
}

var quizResponseOne = prompt('Do I have any pets?');

if(quizResponseOne === 'yes' || quizResponseOne.toUpperCase() === 'Y') {
  console.log('You are correct! I have two kitties!');
  alert('You are correct! I have two kitties!');
  correctcount++;
} else {
  console.log('Wrong, I have two cats.');
  alert('Wrong, I have two cats.' );
}

var quizResponseTwo = prompt('Is blue my favorite color?');

if(quizResponseTwo === 'yes' || quizResponseTwo.toUpperCase() === 'Y') {
  console.log('You are correct!');
  alert('You are correct!' );
  correctcount++;
} else {
  console.log('Actually, it is my favorite color.');
  alert('Actually, it is my favorite color.' );
}

var quizResponseThree = prompt(' Am I from Seattle?');

if(quizResponseThree === 'yes' || quizResponseThree.toUpperCase() === 'Y') {
  console.log('You are correct! I am from Seattle!');
  alert('You are correct! I am from Seattle!' );
  correctcount++;
} else {
  console.log('Too Bad, you are wrong. I am from Seattle.');
  alert('Too bad, you are wrong. I am from Seattle.' );
}

var quizResponseFour = prompt('Am I under six feet tall?');

if(quizResponseFour === 'no' || quizResponseFour.toUpperCase() === 'N') {
  console.log('That\'s right! This was an easy one...');
  alert('That\'s right! This was an easy one...');
  correctcount++;
} else {
  console.log('I actually am about six and a half feet tall... And this was the easy one...');
  alert('I actually am about six and a half feet tall... And this was the easy one...');
}

var quizResponseFive = prompt('Is the rhombicuboctahedron my favorite Archimedean solid?');

if(quizResponseFive === 'No' || quizResponseFive.toUpperCase() === 'N') {
  console.log('You are correct! It\'s the rhombicosidodecahedron!');
  alert('You are correct! It\'s the rhombicosidodecahedron!');
  correctcount++;
} else {
  console.log('Actually, I prefer the rhombicosidodecahedron.');
  alert('Actually, I prefer the rhombicosidodecahedron.' );
}

alert('you have guessed ' + correctcount + ' out of 5 correctly! Thanks for playing!');
