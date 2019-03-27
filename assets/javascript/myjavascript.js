$(document).ready(function() {

    // Creating a function that runs the AJAX call
    function displayArticles() {
      var api = "AJmum4IJuxlQ0gxxc2zp1rJOmn5FB1Uk";

      // Query
      var keywordFilter = $("#keywordFilter").val();
      console.log(keywordFilter);

      // Filter
      var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?query=" + keywordFilter +"&api-key=" + api;
      console.log(queryURL);

      // Creating an AJAX call for the specific movie button being clicked
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(newspaper) {
        console.log(newspaper);
        });

      };

    // Adding a click event listener for the click of the submit button
    $("#submit").on("click", displayArticles);

  });
  