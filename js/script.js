'use strict';

const app = {};
app.url = 'https://ghibliapi.herokuapp.com/films';
// const video = document.querySelector('#youTubeVideo');

app.getContents = function () {
  const apiUrl = new URL(app.url);
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (apiData) {
      console.log(apiData);
      // response.forEach(function (item) {
      //   console.log(item.title);
      // });
      app.displayContents(apiData);
    });
};

app.displayContents = function (data) {
  const apiFetch = document.querySelector('.api-fetch');
  const h4Element = document.createElement('h4');
  const h2Element = document.createElement('h2');
  const pElementOne = document.createElement('p');
  const pElementTwo = document.createElement('p');
  h4Element.textContent = `Directed by ${data[0].director}`;
  h2Element.textContent = `${data[0].title} ${data[0].original_title}`;
  pElementOne.textContent = data[0].description;
  pElementTwo.textContent = `Year of Production: ${data[0].release_date} Runtime: ${data[0].running_time} Rating: ${data[0].rt_score}`;
  apiFetch.appendChild(h4Element);
  apiFetch.appendChild(h2Element);
  apiFetch.appendChild(pElementOne);
  apiFetch.appendChild(pElementTwo);
};

app.displayTrailer = function () {
  const trailer = document.querySelector('#trailer');
  trailer.addEventListener('click', function () {
    document.querySelector('.trailer-box').classList.toggle('hidden');
  });
};

app.closeTrailer = function () {
  const closeBtn = document.querySelector('.close');
  closeBtn.addEventListener('click', function () {
    document.querySelector('.trailer-box').classList.add('hidden');
    // const video = document.querySelector('#youTubeVideo');
    // app.stopVideo();
    const video = document.querySelector('iframe');
    let source = video.src;
    video.src = '';
    video.src = source;
  });
};

app.init = function () {
  app.getContents();
  app.displayTrailer();
  app.closeTrailer();
};

app.init();
