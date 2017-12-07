// Initial array of beaches
var beaches = ["Mexico", "Jamaica", "Hawaii", "Aruba", "Belize", "Brazil", "Cape Town", "Bora Bora", "Key Largo"];

$( document ).ready(function() {

    $("button").click(function(){
		ajaxCall()
		

	});
});
// This function handles events where one button is clicked
$("#add-beaches").on("click", function(event) {
event.preventDefault();
});

// function ajaxCall () {
// 	var beaches = $(this).attr("beaches-name");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + beaches +  "&api_key=LtNoa2bzwYtqkpZxaDXpeu2arbF0VDx3&&limit=10&offset=0&rating=G&lang=en&fmt=json";
	


		// Creating an AJAX call for the specific beach button being clicked and followed up by "the promise".
	$.ajax({
		url:queryURL,
		method: "GET",
	})

	.done(function(response) {
		console.log(response)
	})

		for (var i = 0; i < response.data.length; i++) {

			console.log(response.data[i].images.downsized.url);
			console.log(response.data[i].rating);
			console.log(response.data[i]);


        // Saving the image_original_url property
        var imageUrl = response.data.images.downsized.url;

        // Creating and storing an image tag
        var beachImage = $("<img>");

        // Setting the beachImage src attribute to imageUrl
        beachImage.attr("src", imageUrl);
        beachImage.attr("alt", "beach image");

        // Prepending the beachImage to the images div
        $("#images").prepend(beachImage);
      };



          $(".gif").on("click", function() {
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var state = $(this).attr("data-state");
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });