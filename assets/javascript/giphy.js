var API = api_key=LtNoa2bzwYtqkpZxaDXpeu2arbF0VDx3;
var url = json.data[0].images.downsized.url;
// Initial array of beaches
var beaches = ["Mexico", "Jamaica", "Hawaii", "Aruba", "Belize", "Brazil", "Cape Town", "Bora Bora",
"Key Largo"];
$(document).ready(function() {
$("button").click(function() {
ajaxCall();
});
});



// Event listener for our beach-button
$("#beach-button").on("click", function() {
// Storing our giphy API URL for a random beach image
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + beaches +
"&api_key=LtNoa2bzwYtqkpZxaDXpeu2arbF0VDx3&&limit=10&offset=0&rating=G&lang=en&fmt=json";
// Perfoming an AJAX GET request to our queryURL
$.ajax({
url: queryURL,
method: "GET"
})
// After the data from the AJAX request comes back
.done(function(response) {
// Saving the image_original_url property
var imageUrl = response.data.image_original_url;
// Creating and storing an image tag
var beachImage = $("<div>");
// Setting the beachImage src attribute to imageUrl
beachImage.attr("src", imageUrl);
beachImage.attr("alt", "beach image");
// Prepending the beachImage to the images div
$("#image").prepend(beachImage);
});
});


//Storing data
var results = response.data;
//Creating a loop for data, b/c data is an array to display 
for (var i = 0; i < results.length; i++) {
//Creating a div with a class of 'item' and store into variable
var gifDiv = $("<div class='item'>");
//Storing the rating from results, accessing index of results array, access specific property and storing
var rating = results[i].rating;
//Creating paragraph tag for later use in variable "<p>", selecting is just "p"
var p = $("<p>").text("Rating: " + rating);
var beachImage = $("<img>");
//Fixed height is part of the property to access
beachImage.attr("src", results[i].images.fixed_height.url);
gifDiv.prepend(beachImage);
//Access existing gifs from DOM to prepend and make it show onto the page
$("#gifs-appear-here").prepend(gifDiv);
}


// This function handles events when button is clicked
$("#add-beaches").on("click", function(event) {
event.preventDefault();
});
$("#addSearchBtn").on("click", function() {
// Function to add new button to list of buttons
var newBtn = $(" <button> ");
var searchText = $("#searchText").val();
newBtn.text(searchText);
// Prepend gif image to body
$(".gifDiv").prepend(newBtn);
});



var state = $(this).attr("data-state");
console.log(this);

if(state === "still"){
$(this).attr("src", $(this).attr("data-animate"));
$(this).attr("data-state", "animate");
} else{
$(this).attr("src", $(this).attr("data-still"));  
$(this).attr("data-state", "still");
}





// clear the images since I have new images
$("#image").empty();




