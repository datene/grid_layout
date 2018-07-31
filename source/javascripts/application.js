//= require jquery
//= require bootstrap
//= require_tree .

function getRandomColor() {
 var letters = 'ABCDE'.split('');
 var color = '#';
 for (var i=0; i<3; i++ ) {
  color += letters[Math.floor(Math.random() * letters.length)];
}
return color;
}

function insertGiphy(columns, rows) {
  var gridBox = document.getElementById('this-box');
  fetch("https://api.giphy.com/v1/gifs/random?api_key=mdOEurpRKHYZZilfsXO7DV1vbdDsZSdU&tag=cute+cats")
  .then(function(response) { return response.json() })
  .then(function(data) {
    gridBox.insertAdjacentHTML('beforeend', "<div class='gridbox-item' style='grid-column: span " + columns + ";grid-row: span " + rows + ";background-image:url(" + data.data.image_url + ");'></div>");
  });
}


document.addEventListener("DOMContentLoaded", function() {
  var amountOfIterations = Math.floor(Math.random() * (100 - 1) + 1);
  console.log(amountOfIterations);
  for ( var i = 0; i < amountOfIterations; i++ ) {
    if (Math.floor(Math.random() * 100) > 20) {
      var columns = Math.floor(Math.random() * (3 - 1) + 1);
      var rows = Math.floor(Math.random() * (3 - 1) + 1);

      insertGiphy(columns, rows);
    } else {
      insertGiphy(1, 1);
    }
  }
});