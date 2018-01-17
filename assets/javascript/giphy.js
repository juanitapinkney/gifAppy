var API = api_key = LtNoa2bzwYtqkpZxaDXpeu2arbF0VDx3;
var url = json.data[0].images.downsized.url;
// Initial array of beaches
var beaches = ["Mexico", "Jamaica", "Hawaii", "Aruba", "Belize", "Brazil", "Cape Town", "Bora Bora", "Key Largo"];
//Listening for click event on button
$("button").on("click", function() {
    // Storing the value of "data-beach" from the button which was clicked
    var beach = $(this).attr("data-beach");
    console.log(this);
    //Running query URL
    var queryURL = "http://api.giphy.com/v1/gifs/search?q="
    "&api_key=LtNoa2bzwYtqkpZxaDXpeu2arbF0VDx3&&limit=10&offset=0&rating=G&lang=en&fmt=json";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
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
            //Creating image called personImage, add attribute here to add the source to the image tag
            var beachImage = $("<img>");
            //Fixed height is part of the property to access
            beachImage.attr("src", results[i].images.fixed_height.url);
            //Adding "p" tag created above
            gifDiv.prepend(p);
            gifDiv.prepend(beachImage);
            //Access existing gifs from DOM to prepend and make it show onto the page
            $("#gifs-appear-here").render(gifDiv);
        }
    });
});
var state = $(this).attr("data-state");
console.log(this);
if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
} else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
}