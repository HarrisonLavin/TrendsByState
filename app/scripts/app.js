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
app = {}


$(function(){ // on document ready,
  $('input:submit').on('click', function(event){ //attach a listener to my submit, such that on click
    var artist_name 
    $('.images').empty();
    event.preventDefault(); // we prevent default
    artist_name = $('#artist_name').val() // we get the artist name
    $('#artist_name').val(''); 
    $.ajax({
      method: "POST",
      url: "https://api.spotify.com/v1/search?query=" + artist_name + "&type=artist",

    }).done(function(data){
      data.artists.items[0].images.forEach(function(element){
        var url = element.url;
        $('.images').append('<img src="' +  url + '" >');
       
      })
    })
  })
})

// https://api.spotify.com/v1/search?query=tania&type=artist
// https://www.reddit.com/r/funny.json
// https://api.spotify.com/v1/search?query=paul%20simon&type=artist