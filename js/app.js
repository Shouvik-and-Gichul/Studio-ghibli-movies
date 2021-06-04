'use strict';

const url = new URL('https://ghibliapi.herokuapp.com/films');
// console.log(url);
const userInput = document.querySelector('#user-input');

fetch(url)
  .then(function (data) {
    return data.json();
  })
  .then(function (response) {
    // console.log(response);
    response.forEach(function (item) {
      console.log(item.title);
    });
  });
