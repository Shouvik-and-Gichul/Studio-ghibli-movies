'use strict';

const app = {};
app.url = 'https://ghibliapi.herokuapp.com/films';

app.getContents = function () {
  fetch(app.url)
    .then(function (response) {
      return response.json();
    })
    .then(function (apiData) {
      app.displayContents(apiData);
    });
};

app.displayContents = function (data) {
  const body = document.querySelector('body');
  const apiFetch = document.querySelector('.api-fetch');
  data.forEach(function (apiData, index) {
    const h3Element = document.createElement('h3');
    const h2Element = document.createElement('h2');
    const pElementOne = document.createElement('p');
    const pElementTwo = document.createElement('p');
    const {
      director,
      title,
      original_title,
      description,
      release_date,
      running_time,
      rt_score,
    } = apiData;
    if (body.className === 'castle-in-the-sky' && index === 0) {
      app.makeAndAppendElement(
        h3Element,
        h2Element,
        pElementOne,
        pElementTwo,
        apiFetch,
        apiData
      );
    } else if (body.className === 'grave-of-the-fireflies' && index === 1) {
      app.makeAndAppendElement(
        h3Element,
        h2Element,
        pElementOne,
        pElementTwo,
        apiFetch,
        apiData
      );
    } else if (body.className === 'my-neighbor-totoro' && index === 2) {
      app.makeAndAppendElement(
        h3Element,
        h2Element,
        pElementOne,
        pElementTwo,
        apiFetch,
        apiData
      );
    } else if (body.className === 'spirited-away' && index === 10) {
      app.makeAndAppendElement(
        h3Element,
        h2Element,
        pElementOne,
        pElementTwo,
        apiFetch,
        apiData
      );
    } else if (body.className === 'the-cat-returns' && index === 11) {
      app.makeAndAppendElement(
        h3Element,
        h2Element,
        pElementOne,
        pElementTwo,
        apiFetch,
        apiData
      );
    } else if (body.className === 'howls-moving-castle' && index === 12) {
      app.makeAndAppendElement(
        h3Element,
        h2Element,
        pElementOne,
        pElementTwo,
        apiFetch,
        apiData
      );
    } else if (body.className === 'tales-from-earthsea' && index === 13) {
      app.makeAndAppendElement(
        h3Element,
        h2Element,
        pElementOne,
        pElementTwo,
        apiFetch,
        apiData
      );
    } else if (body.className === 'ponyo' && index === 14) {
      app.makeAndAppendElement(
        h3Element,
        h2Element,
        pElementOne,
        pElementTwo,
        apiFetch,
        apiData
      );
    } else if (
      body.className === 'the-secret-world-of-arrietty' &&
      index === 15
    ) {
      app.makeAndAppendElement(
        h3Element,
        h2Element,
        pElementOne,
        pElementTwo,
        apiFetch,
        apiData
      );
    } else if (body.className === 'from-up-on-poppy-hill' && index === 16) {
      app.makeAndAppendElement(
        h3Element,
        h2Element,
        pElementOne,
        pElementTwo,
        apiFetch,
        apiData
      );
    } else if (body.className === 'the-wind-rises' && index === 17) {
      app.makeAndAppendElement(
        h3Element,
        h2Element,
        pElementOne,
        pElementTwo,
        apiFetch,
        apiData
      );
    }
  });
};

app.getApiData = function (data) {
  for (let i = 0; i < data.length; i++) {
    const {
      director,
      title,
      original_title,
      description,
      release_date,
      running_time,
      rt_score,
    } = data;
  }
  return data;
};

app.makeAndAppendElement = function (h3, h2, p1, p2, apiFetch, getApiData) {
  h3.textContent = `Directed by ${getApiData.director}`;
  h2.textContent = `${getApiData.title} ${getApiData.original_title}`;
  p1.textContent = `${getApiData.description}`;
  p2.textContent = `Year of Production: ${getApiData.release_date}, Runtime: ${getApiData.running_time} (minutes), Rating: ${getApiData.rt_score}`;
  apiFetch.appendChild(h3);
  apiFetch.appendChild(h2);
  apiFetch.appendChild(p1);
  apiFetch.appendChild(p2);
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
    document.querySelector('.trailer-box').classList.toggle('hidden');
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
