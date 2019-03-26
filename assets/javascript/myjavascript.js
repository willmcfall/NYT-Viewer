$(document).ready(function() {

    // Creating a function that runs the AJAX call
    function displayArticles() {
      var api = "AJmum4IJuxlQ0gxxc2zp1rJOmn5FB1Uk";
      var filter1 = "";
      var filter2 = "";
      var filter3 = "";
      var filter4 = "";
      var queryURL = "https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=";
  
      // Creating an AJAX call for the specific movie button being clicked
      $.ajax({
        url: queryURL + api,
        method: "GET"
      }).then(function(newspaper) {
        console.log(newspaper);
        });

      };

    // Adding a click event listener for the click of the submit button
    $(document).on("click", "#submit", displayArticles());


  });
  