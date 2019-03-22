$(document).ready(function() {


    function displayArticles() {
      var api = ;
      var filter1 =;
      var filter2 =;
      var filter3 =;
      var filter4 =;
      var queryURL =;
  
      // Creating an AJAX call for the specific movie button being clicked
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(newspaper) {
        console.log(newspaper);
        }
      });
  

    // Adding a click event listener for the click of the submit button
    $(document).on("click", ".emotion-btn", displayArticles());

  });
  