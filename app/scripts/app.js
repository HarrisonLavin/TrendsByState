// 
// Attach a listener, such that on click event, we do the following
// artist_name = Grab the value from the input text
// Make the request
  // http://api.jquery.com/jquery.ajax/
  // modify this request for the parameters we need
//   $.ajax({
//   method: "POST",
//   url: "some.php",
//   data: { type: "artist", query: "Paul Simn" }
// })


// Do something on the callback
//   .done(function( msg ) {
//     alert( "Data Saved: " + msg ); // somehow append the images
//   });
app = {
  // listController = new ListC0ntroller
  // listController.init()
};


$(function(){ // on document ready,
    var picturesController = new app.picturesController.new();


  $('input:submit').on('click', function(event){ //attach a listener to my submit, such that on click
    var state_name 
    $('.images').empty();
    event.preventDefault(); // we prevent default
    state_name = $('#state_name').val() // we get the artist name
    $('#state_name').val(''); 
    $.ajax({
      type: "GET",
      dataType: "jsonp",
      cache: false,
      url: "https://api.instagram.com/v1/tags/"+ state_name +"/media/recent?access_token=370648620.4f46f98.9ed4716de0184a9299b595e52ba248c0&scope=public_content"
    }).done(function(data){
     console.log(data)
      })
    })
  })

// https://api.spotify.com/v1/search?query=tania&type=artist
// https://www.reddit.com/r/funny.json
// https://api.spotify.com/v1/search?query=paul%20simon&type=artist