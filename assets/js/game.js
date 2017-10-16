$(document.body).on("click", ".animal", callApi);       

var topics = ["tiger", "bear", "parrot", "shark, whale, lion, leopard"];

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
        url: "https://api.giphy.com/v1/gifs/search?api_key=rB31IP2gtdNjh8prZrfKi5ELe7gKMcHj",
        method: "GET",
        data: {"q": term}
      }).done(function(response){
     

        var imageUrl = response.data.image_original_url;

        var animalImage = $("<img>");

        animalImage.attr("src", imgageUrl);
        animalImage.attr("alt", animalImage);

        console.log(response);

        $("#view-gif").prepend(animalImage);
      });
};
 



  //rB31IP2gtdNjh8prZrfKi5ELe7gKMcHj