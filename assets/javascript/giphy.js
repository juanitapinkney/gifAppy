// Initial array of beaches
var beach = ["Mexico", "Jamaica", "Carribean", "Hawaii"];


// DisplayBeachImage function re-renders the HTML to display the appropriate content
	function displayBeachImage() {


// Storing a random  API key.
var beaches = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=LtNoa2bzwYtqkpZxaDXpeu2arbF0VDx3&q=q&limit=10&offset=0&rating=G&lang=en";



// Creating an AJAX call for the specific beach button being clicked
$.ajax({
url: queryURL ,
method: "GET"
}).done(function(response)) {
}

// Creating a div to hold the beach
var beachDiv = $("<div class='beach'>");

// Creating an element to have the rating displayed
var beach = $("<im>").text("Rating: " + rating);

// Storing the rating data
var rating = response.Rated;

// Displaying the rating
	beachDiv.append(beach);

// Storing the beach
var beach = response.Beach;

// Creating an element to hold the beach
var pThree = $("<p>").text("beach: " + beach);

// Appending the beach
	beachDiv.append(pThree);

// Retrieving the URL for the image
var imgURL = response.BeachImage;

// Creating an element to hold the image
var image = $("<img>").attr("src", imgURL);

// Appending the image
  beachDiv.append(image);

// Putting the entire beach above the previous beach
$("#beach-view").prepend(beachDiv);
});

// Function for displaying beach data
  function renderButtons() {

  }

// Deleting the beach prior to adding new beach (this is necessary otherwise you will have repeat buttons)
$("#buttons-view").empty();


// Store original image URL in variable
var imageUrl = response.data."https://api.giphy.com/v1/gifs/search?q=api_key=RrOdcCds1SXzLGzzVKauPSyeG1jwlTtI&q=beaches&limit=5&offset=0&rating=G&lang=en";


// Gives the path of image src, alt gives description of image
buttons.attr("src", imageUrl);
buttons.attr("alt", "buttons image");


// Function for displaying beach data
function renderButtons() {

// Deleting the beach buttons prior to adding new beach buttons
// (this is necessary otherwise we will have repeat buttons)
$("#beach-view").empty();

// This function handles events where one button is clicked
$("#add-beach").on("click", function(event) {

// event.preventDefault() prevents the form from trying to submit itself; using a form so that the user can hit enter instead of clicking the button if they want
event.preventDefault();

// Looping through the array of beach
    for (var i = 0; i < beach.length; i++) {

// This function handles events where a beach button is clicked
$("#add-beach").on("click", function(event) {
event.preventDefault();


// Adding a click event listener to all elements with a class of "beach"
$(document).on("click", ".beach", displayBeachImage);

// Calling the renderButtons function to display the intial buttons
	renderButtons();
});

// This line grabs the input from the textbox
var beach = $("#beach-input").val().trim();

// Adding beach from the textbox to our array
	beach.push(beach);

// Calling renderButtons which handles the processing of our beach array
renderButtons();
});

// Calling the renderButtons function at least once to display the initial list of beachs
renderButtons();

// Then dynamicaly generating buttons for each beach in the array. This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
var a = $("<button>");

// Adding a class of beach to our button
	a.addClass("beach");

// Adding a data-attribute
	a.attr("data-name", beach[i]);

// Providing the initial button text
	a.text(beach[i]);

// Adding the button to the buttons-view div
$("#buttons-view").append(a);{

}


.done(function(response) {

console.log(response);
}); 