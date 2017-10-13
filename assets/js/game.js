       

var topics = ["Chicago Cubs", "Chicago Bears", "Chicago Blackhawks", "Chicago White Sox"];

    function renderButton(){

        $("#sports").empty();

        for (var i = 0; i < topics.length; i++) {
            


        var a = $("<button>");

        a.addClass("movie");

        a.attr("data-name", topics[i]);

        a.text(topics[i]);

        $("sports").append(a);

        }
    }


  