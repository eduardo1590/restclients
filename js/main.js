const URL = "https://dog.ceo/api/breeds/image/random";

const IMG = document.getElementById('img');

fetch(URL).then((response) => response.json())
    .then((data) => IMG.src = data.message);