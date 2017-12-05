// Initial array of beaches
var beaches = ["Mexico", "Jamaica", "Carribean", "Hawaii", "Aruba", "Bora Bora", "Belize", "Key Largo"];


// This function handles events where one button is clicked
$("#add-beaches").on("click", function(event) {
event.preventDefault();


// Adding a click event listener to all elements with a class of "beach"
$(document).on("click", ".beach", displayGifs);


$("buttton").click([beaches.length; i++]);

// Calling the renderButtons function to display the initial buttons
renderButtons();


// Adding the beaches from the textbox to our array
beaches.push(gifs);


// Deleting the buttons prior to adding new beaches
// (this is necessary otherwise you will have repeat buttons)
$("#buttons-view").empty();

});


//  Attempt to console the entire array, no success.
console.log (beaches[beaches.length]);


// Function for displaying the beaches info
$(document).on("click", ".beaches", displayGifsInfo);


// Defining my API key.
var beaches = $(this).attr("beaches-name");{
var queryURL = "https://api.giphy.com/v1/gifs/search?q=beautiful+calm+beaches&api_key=LtNoa2bzwYtqkpZxaDXpeu2arbF0VDx3&&limit=10&offset=0&rating=G&lang=en&fmt=json";
}


// Creating an AJAX call for the specific beach button being clicked and followed up by "the promise".
$.ajax({
url:queryURL,
method: "GET",
}).done(function(response) {
html = json.data[0].images

//Attempting to call the json data to be displayed
$("#beaches-view").text(json.gif(response));
renderButtons();
});

//This did not console the data as requested
console.log (data);


// Looping through the array of beaches
for (var i = 0; i < beaches.length; i++) {


// Generating buttons for each beach in the array
// This code creates jQuery beginning and end tag.
var a = $("<button>");


// Adding a class of beaches to the button
a.addClass("beaches");


// Adding a data-attribute
a.attr("data-name", beaches[i]);


// Providing the initial button text
a.text(gifs[i]);


// Adding the button to the buttons-view div
$("#buttons-view").append(a);
};
