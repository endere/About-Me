'use strict';

var confirmquiz = confirm('Hello, would you like to play a game?');
var correctcount = 0;

if(confirmquiz) {
  console.log('Awsome! Lets get started!');
  alert('Awesome! Lets get started!' );
} else {
  console.log('Too Bad, starting anyway.');
  alert('Too bad, starting anyway' );
}

var quizResponseOne = prompt('How many pets do I have');

if(quizResponseOne === '2' || quizResponseOne === 'two') {
  console.log('You are correct! Two kitties!');
  alert('You are correct! Two kitties!');
  correctcount++;
} else if(quizResponseOne === '3' || quizResponseOne === 'three') {
  console.log('Close, but wrong. I have two cats.');
  alert('Close, but wrong. I have two cats.' );
} else {
  console.log('Wrong, I have two cats.');
  alert('Wrong, I have two cats.' );
}

var quizResponseTwo = prompt('What is my favorite color?');

if(quizResponseTwo === 'blue') {
  console.log('You are correct!');
  alert('You are correct!' );
  correctcount++;
} else {
  console.log('Actually, my favorite color is blue.');
  alert('Actually, my favorite color is blue' );
}

var quizResponseThree = prompt('Please Answer with Y or N. Am I from Seattle?');

if(quizResponseThree.toUpperCase() === 'Y') {
  console.log('You are correct! I am from Seattle!');
  alert('You are correct! I am from Seattle!' );
  correctcount++;
} else {
  console.log('Too Bad, you are wrong. I am from Seattle.');
  alert('Too bad, you are wrong. I am from Seattle.' );
}

var quizResponseFour = prompt('How old am I?');

console.log('You might be right, I\'m not telling.');
alert('You might be right. I\'m not telling.' );
//not even in the code am I telling.

var quizResponseFive = prompt('What is my favorite Archimedean solid?');

if(quizResponseFive === 'rhombicosidodecahedron') {
  console.log('You are correct! How did you know!?');
  alert('You are correct! How did you know!?' );
  correctcount++;
} else {
  console.log('Good guess! It is actually the rhombicosidodecahedron.');
  alert('Good guess! It is actually the rhombicosidodecahedron.' );
}

alert('you have guessed ' + correctcount + ' out of 5 correctly! Thanks for playing!');
