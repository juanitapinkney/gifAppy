Welcome to my beach giphy app! A dynamic GIPHY API page that loads gifs of beaches.

https://juanitapinkney.github.io/giphy-app/

First, an array of strings was created, each one related to a beach and saved it to a variable called `beaches`.

My app takes the beaches in this array and buttons were created on the HTML page.
A loop was used to append a button for each string in the array.

When the user clicks on a button, the page will grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

When the user clicks one of the still GIPHY images, the gif will animate. If the user clicks the gif again, it will stop playing (pause).

Under every gif, the user will find displayed the gif's rating (PG, G, so on).

A form was created to the page, that takes the value from a user input box and adds it into my `beaches` array.

A function call was created that takes each beach in the array and remakes the buttons on the page.

This app has been deployed to my Github Pages.
