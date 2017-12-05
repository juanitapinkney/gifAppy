// Initial array of beaches
var beaches = ["Mexico", "Jamaica", "Carribean", "Hawaii", "Aruba", "Bora Bora", "Malibu", "Key Largo"];
$"buttton"
// Adding a click event listener to all elements with a class of "beach"
$(document).on("click", ".beach" "displayBeachImage");{

}

// Storing a random  API key.
var beaches = $(this).attr("beaches-name");{
var queryURL = "https://api.giphy.com/v1/gifs/search?q=beautiful+calm+beaches&api_key=LtNoa2bzwYtqkpZxaDXpeu2arbF0VDx3&&limit=10&offset=0&rating=G&lang=en&fmt=json";
}
// Creating an AJAX call for the specific beach button being clicked
$.ajax({
method: "GET",
url:queryURL,
})

.done(function(json) {


var url =json.data [i].images.downsized.url;

console.log (json.data);
});

// Deleting the beach buttons prior to adding new beach buttons
// (this is necessary otherwise we will have repeat buttons)
$("#beaches-view").empty();{
}

// This function handles events where one button is clicked
$("#add-beaches").on("click", function(event) {

event.preventDefault();

var data = $("#beach-input").val();

beaches.push (data);

	
}

console.log ()