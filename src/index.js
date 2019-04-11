// change require to es6 import style
import $ from 'jquery';
import './style.scss';

console.log('starting up!');

let seconds = 0;

setInterval(() => {
  $('#main').html(`You've been on this page for ${seconds} seconds`);
  seconds += 1;
}, 1000);
