    //  Declare variables with definitions
    var buttons = ("unicorns", "fairies", "leprechauns");  

    // Create image tag and store in variable for later
    var buttons = $("<img>");

    // Store original image URL in variable
    var imageUrl = response.data.image_original_url;

    // Insert an image to id before page loads
      $("#buttons").prepend(buttons);
    });

    // Inserts an on click function that will allowusers to view giphy images when buttons are clicked.
      $("#buttons").on("click", function() {
      }

    // Gives the path of image src, alt gives description of image
        buttons.attr("src", imageUrl);
        buttons.attr("alt", "buttons image");

    // Function for displaying giphy images
      function renderButtons() {


     $("#buttons").on("click", function() {
    // Stores a random static  API key.
      var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=RrOdcCds1SXzLGzzVKauPSyeG1jwlTtI&q=unicorns&limit=10&offset=0&rating=G&lang=en";
     
    //Creating an array of strings, each one related to a topic that interests Save it to a variable called `buttons`.  make a list to your own liking.

    // Performing GET requests to the OMDB API and logging the responses to the console
    $.ajax({
      url: queryURL,
      method: "GET"
    })

    .done(function(response) {
      console.log(response);
    }); 

    // // Pausing the giphy images on click.
    //  var state = $ (this).attr("data-state");

    //    console.log (data-state)

    //    if (state === "still"); {
    //     $(this).attr( "src", $(this).attr( "data-animate"));
    //    } else {
    //     $(this).attr( "src", $(this).attr( "data-still"));
    //    }
    // });

      // Inserting for loop to increment and image per topic string

      //   for (var i = 0; i < buttons.length; i++) {

      // // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)

      //     var a = $("<button>");

      // // Adding a class
      //     a.addClass("buttons");

      // // Adding a data-attribute with a value of the topic at index i
      //     a.attr("data-name", buttons[i]);

      // // Providing the button's text with a value of the topic at index i
      //     a.text(buttons[i]);

      // Adding the button to the HTML
      //     $("#buttons").append(a);
      //   }
      // }
          console.log(unicorns[0]);
          console.log(fairies[1]);
          console.log(leprechauns[2]);
  