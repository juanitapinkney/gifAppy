var GiphyAPI = LtNoa2bzwYtqkpZxaDXpeu2arbF0VDx3;
var url = json.data[0].images.downsized.url;
// Initial array of beaches
var beaches = ["Mexico", "Jamaica", "Hawaii", "Aruba", "Belize", "Brazil", "Cape Town", "Bora Bora",
  "Key Largo"];
$(document).ready(function() {
    $("button").click(function() {
        ajaxCall();
    });
});
$(document).on("click", "img", function() {
    var img = $(this);
    var src = img.attr("src");
    // make if then statement to have function image
    // if this original url i.e. animated gif, swap for still image
    if (src === img.attr("data-original-url")) {
        img.attr("src", img.attr("data-still-url"));
    } else {
        // else statement: make it animate since it stopped
        img.attr("src", img.attr("data-original-url"));
    }
});
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + beaches +
    "&api_key=LtNoa2bzwYtqkpZxaDXpeu2arbF0VDx3&&limit=10&offset=0&rating=G&lang=en&fmt=json";
$.ajax({
    url: queryURL,
    method: 'GET'
    // call back function
}).done(function(response) {
    console.log(response);
    // clear the images since I have new images
    $("#images").empty();
    // to use the data from giphy, I need to write code in the done callback
    for (var i = 0; i < response.data.length; i++) {
        console.log(response.data[i].rating);
        // console log to find info on still and animated
        console.log(response.data[i].images.original_still.url);
        console.log(response.data[i].images.original.url);
        // create new image tag for the images to be called to the page
        var imageAndRating = $("<div>"); // create div
        var rating = $("<p>"); // create paragraph inside div to contain both rating and image
        rating.html("Rating: " + response.data[i].rating); // HTML rating
        imageAndRating.append(rating); // append the rating and imageandrating div together
        var newImage = $("<img>"); // create image tag for images to prepared to display
        newImage.attr("src", response.data[i].images.original_still.url);
        newImage.attr("data-original-url", response.data[i].images.original.url);
        newImage.attr("data-still-url", response.data[i].images.original_still.url);
        imageAndRating.append(newImage);
        // add image to page
        $("#images").append(imageAndRating);
    }
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
            var beachImage = $("<img>");
            // Setting the beachImage src attribute to imageUrl
            beachImage.attr("src", imageUrl);
            beachImage.attr("alt", "beach image");
            // Prepending the beachImage to the images div
            $("#images").prepend(beachImage);
        });
});
// This function handles events where one button is clicked
$("#add-beaches").on("click", function(event) {
    event.preventDefault();
});
$("#addSearchBtn").on("click", function() {
    // user function to add button to list of buttons
    // create new button
    var newBtn = $(" < button > ");
    var searchText = $("#searchText").val();
    newBtn.text(searchText);
    // prepend to body
    $(".container").prepend(newBtn);
});


$("#searchResults").append(' Rating: '+rating+'');












