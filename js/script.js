'use strict';

const app = {};
app.url = 'https://ghibliapi.herokuapp.com/films';

app.getContents = function () {
  fetch(app.url)
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
  const body = document.querySelector("body");
  const apiFetch = document.querySelector('.api-fetch');
  const h3Element = document.createElement('h3');
  const h2Element = document.createElement('h2');
  const pElementOne = document.createElement('p');
  const pElementTwo = document.createElement('p');


  for (let i = 0; i < data.length; i++) {
    // console.log(data[i].title);
    if (body.className === "castle-in-the-sky") {
      h3Element.textContent = `Directed by ${data[0].director}`;
      h2Element.textContent = `${data[0].title} ${data[0].original_title}`;
      pElementOne.textContent = data[0].description;
      pElementTwo.textContent = `Year of Production: ${data[0].release_date}, Runtime: ${data[0].running_time}, Rating: ${data[0].rt_score}`;
      apiFetch.appendChild(h3Element);
      apiFetch.appendChild(h2Element);
      apiFetch.appendChild(pElementOne);
      apiFetch.appendChild(pElementTwo);
    } else if (body.className === "grave-of-the-fireflies") {
      h3Element.textContent = `Directed by ${data[1].director}`;
      h2Element.textContent = `${data[1].title} ${data[1].original_title}`;
      pElementOne.textContent = data[1].description;
      pElementTwo.textContent = `Year of Production: ${data[1].release_date}, Runtime: ${data[1].running_time} Rating: ${data[1].rt_score}`;
      apiFetch.appendChild(h3Element);
      apiFetch.appendChild(h2Element);
      apiFetch.appendChild(pElementOne);
      apiFetch.appendChild(pElementTwo);
    }
  }
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
