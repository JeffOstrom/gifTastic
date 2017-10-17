
$(document.body).on("click", ".animal", callApi); 


var topics = ["tiger", "bear", "parrot", "shark", "whale", "lion", "leopard"];

    function renderButton(){

        $("#buttons-view").empty();

        for (var i = 0; i < topics.length; i++) {
            
          var a = $("<button>");

          a.addClass("animal");

          a.attr("data-name", topics[i]);

          a.text(topics[i]);

          $("#buttons-view").append(a);

        }
      }


      $("#animals").on("click", function(event) {
        event.preventDefault();
        
        var anima = $("#animal-input").val().trim();

        
        topics.push(anima);

       
        renderButton();

        $("#animal-input").val("");
      });

     
      renderButton();
    
    function callApi(){
      var term = $(this).attr("data-name");

      $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?api_key=rB31IP2gtdNjh8prZrfKi5ELe7gKMcHj&limit=10",
        method: "GET",
        data: {"q": term}
      }).done(function(response){
     
        $("#view-gif").empty();

        for (var i = 0; i < response.data.length ; i++) {


        var imageUrl = response.data[i].images.fixed_height_small_still.url;

        var animalImage = $("<img>");

        animalImage.addClass("gif");
        animalImage.attr("src", imageUrl);
        animalImage.attr("alt", "image");
        animalImage.attr("data-animatedUrl", imageUrl);
        animalImage.attr("data-stillUrl", imageUrl);

        $("#view-gif").prepend(animalImage);

      }

        console.log(response);
        
        //rating
        console.log("rating:" , response.data[0].rating);

        //animated
        console.log(response.data[0].images.fixed_height_small.url);
        //still
        console.log(response.data[0].images.fixed_height_small_still.url);
        

    });
};
 



  