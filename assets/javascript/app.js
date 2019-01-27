// Code that creates an initial set of buttons from an array and makes clicking on those buttons call the giphy API to get animated gifs that relate to the text on those buttons

// array of buttons
var buttonArr = ["dog", "cat", "mouse", "bird", "rabbit", "lizard"];

// We want the freshest results to begin
var offset = 0;

// What we last searched for
var last; 

// make buttons for everything in the starter array
for (var i = 0; i < buttonArr.length; i++) {
  makeButton(buttonArr[i]);  
}

// function that makes the search buttons
function makeButton(text) {
  var button = $("<button class='search' id=" + text + " >" + text + "</button>");
  $("#buttons").append(button);
}

// what happens when you click the search buttons
$(".search").on("click", function () {
  offset = 0;
  last = $(this).attr("id");
  // clear everything out
  $("#gifs").html("");
  $("#more").html("");
  // holla at giphy
  gifPull($(this).attr("id"));
  // add a more button to get more
  $("#more").append("<button id='more'>More</button>");
  // if we need more, offset it by 10 so we don't get duplicates
  offset = 10;
});

$("#more").on("click", function () {
  gifPull(last);
  offset += 10;
})


function gifPull(search){
  var api_key = "xrHqiENtLdnqqycULZMd6COgbQESDkWV";
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&offset=" + offset + "&api_key=" + api_key + "&limit=10";
  // Creates AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);  // Checking
    // for each of the responses
    for (var i = 0; i < response.data.length; i++) {
      // create var that represents the box that contains the rating and image
      var gif = $(" \
        <div class=col-md-4> \
          <p>Rating: " + response.data[i].rating.toUpperCase() + "</p>\
          <img src=" + response.data[i].images.fixed_height.url + " /> \
        </div>");
      $("#gifs").append(gif);
    };
  });
}