    var topics = ("unicorns", "fairies", "leprechauns");   


     $("#topics").on("click", function() {
      // Stores a random static  API key.
      var queryURL = "https://api.giphy.com/v1/gifs?api_key=RrOdcCds1SXzLGzzVKauPSyeG1jwlTtI&gif_ids=";
      //Creating an array of strings, each one related to a topic that interests Save it to a variable called `topics`.  make a list to your own liking.
      var buttons = ["topics"];
    // Performing GET requests to the OMDB API and logging the responses to the console
    $.ajax({
      // url: "https://www.omdbapi.com/?t=romancing+the+stone&y=&plot=short&apikey=trilogy",
      method: "GET"
    }).done(function(response) {
      console.log(response);
    });



      // Function for displaying giphy images
      function renderButtons() {

      // Store original image URL in variable
      var imageUrl = response.data.image_original_url;

      // Create image tag and store in variable for later
      var topics = $("<img>");

      // Gives the path of image src, alt gives description of image
        topics.attr("src", imageUrl);
        topics.attr("alt", "topics image");

      // Insert an image to id before page loads
      $("#buttons").prepend(topics);
    });
  

      // Pausing the giphy images on click.
       var state = $ (this).attr("data-state");

       console.log (data-state)

       if (state === "still"); {
        $(this).attr( "src", $(this).attr( "data-animate"));
       } else {
        $(this).attr( "src", $(this).attr( "data-still"));
       }
    });

      // Inserting for loop to increment and image per topic string

for (var i = 0; i < topics.length; i++) {
          // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class
          a.addClass("topics");
          // Adding a data-attribute with a value of the topic at index i
          a.attr("data-name", topics[i]);
          // Providing the button's text with a value of the topic at index i
          a.text(topics[i]);
          // Adding the button to the HTML
          $("#topics-view").append(a);
        }
      }