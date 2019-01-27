// Code that creates an initial set of buttons from an array and makes clicking on those buttons call the giphy API to get animated gifs that relate to the text on those buttons

// array of buttons
var buttonArr = ["dog", "cat", "mouse", "bird", "rabbit", "lizard"];

// We want the freshest results to begin
var offset = 0;

// What we last searched for
var last; 

// function that makes the search buttons
function makeButton(text) {
  var button = $("<button class='search' id=" + text + " >" + text + "</button>");
  $("#buttons").append(button);
};

// make buttons for everything in the starter array
for (var i = 0; i < buttonArr.length; i++) {
  makeButton(buttonArr[i]);  
};

// make a button for things the user wants a button for
$("#user-search").on("click", function (event) {
  // don't do what you think you gonna do, button!
  event.preventDefault();
  var text = $("#user-value").val()
  // don't want to make no empty buttons
  if (text != ""){makeButton(text);}
});

// what happens when you click the search buttons
$("#buttons").on("click", ".search", function () {
  console.log("click " + $(this).attr("id"));
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

// how to get more gifs with the same subject
$("#more").on("click", function () {
  gifPull(last);
  offset += 10;
});

// how to pull gifs off giphy with their api
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
          <img src=" + response.data[i].images.fixed_height_still.url +
          " data-still=" + response.data[i].images.fixed_height_still.url + 
          " data-animate=" +  response.data[i].images.fixed_height.url + 
          " data-state='still' class='gif' /> \
        </div>");
      $("#gifs").append(gif);
    };
  });
};

// if you click on a gif, it will animate or stop
$("#gifs").on("click", ".gif", function () {
  var state = $(this).attr("data-state");
  if (state === "still") {
    $(this).attr("data-state", "animate");
    $(this).attr("src", $(this).attr("data-animate"));
  }
  else {
    $(this).attr("data-state", "still");
    $(this).attr("src", $(this).attr("data-still"));
  }
});