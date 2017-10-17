//Ready function always at top
$(document).ready(function(){
    

    $(document.body).on("click", ".animal", callApi); 

    $(document.body).on("click", ".gif", function(){

      var state= $(this). attr("data-state");

      if(state ==="still")
      {
        var animatedUrl = $(this).attr("data-animatedUrl");
        $(this).attr("src", animatedUrl);
        $(this).attr("data-state", "animated");

      }
      else{
        var stillUrl = $(this).attr("data-stillUrl");
        $(this).attr("src", stillUrl);
        $(this).attr("data-state", "still");

      }
    });

    //Creating my list of buttons to display
    var topics = ["tiger", "bear", "parrot", "shark", "whale", "lion", "leopard"];
        //List function will display my list of buttons and add my searches
        function renderButton(){

            $("#buttons-view").empty();
            // Loop running through my array
            for (var i = 0; i < topics.length; i++) {
                
              var a = $("<button>");

              a.addClass("animal");

              a.attr("data-name", topics[i]);

              a.text(topics[i]);

              $("#buttons-view").append(a);

            }
          }

          //Displays new animal to be added once clicked
          $("#animals").on("click", function(event) {
            event.preventDefault();
            
            var anima = $("#animal-input").val().trim();

            
            topics.push(anima);

           //Runs function
            renderButton();

            $("#animal-input").val("");
          });

          // Run function
          renderButton();
        
        function callApi(){
          var term = $(this).attr("data-name");
          // Calling my url gif I need
          $.ajax({
            url: "https://api.giphy.com/v1/gifs/search?api_key=rB31IP2gtdNjh8prZrfKi5ELe7gKMcHj&limit=10",
            method: "GET",
            data: {"q": term}
          }).done(function(response){
            // This clears each time we click an animal display gif
            $("#view-gif").empty();

            for (var i = 0; i < response.data.length ; i++) {

              
            // Here is the data I needed to pull from each gif. I choose small images. 
            var stillUrl = response.data[i].images.fixed_height_small_still.url;
            var animatedUrl = response.data[i].images.fixed_height_small.url;
            var rating = response.data[i].rating;
            // This is creating the images for animals 
            var animalImage = $("<img>");

            // This adds attributes to the image. I received help with this section since was unsure how to get the still/animated functioning. 
            animalImage.addClass("gif");
            animalImage.attr("src", stillUrl);
            animalImage.attr("alt", "image");
            animalImage.attr("data-animatedUrl", animatedUrl );
            animalImage.attr("data-stillUrl", stillUrl );
            animalImage.attr("data-state", "still");

            
            // This is going to display the image first with .prepend
            $("#view-gif").prepend(animalImage);

          }

      });
    };
 });


  