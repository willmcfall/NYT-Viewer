$(document).ready(function () {

  // Creating a function that runs the AJAX call
  function displayArticles(event) {
    var api = "AJmum4IJuxlQ0gxxc2zp1rJOmn5FB1Uk";

    event.preventDefault();

    // Query
    var query= "";
    query = $("#keywordFilter").val();
    console.log(query);

    var filter = "";
    filter = "person:" + $("#personFilter").val();
    console.log(filter);

    // Query URL generator
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query + "&fq=" + filter + "&api-key=" + api;
    console.log(queryURL);

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (newspaper) {
      console.log(newspaper);

      // Presents results to HTML interface
      for (i = 0; i < newspaper.response.docs.length; i++) {
        var newDiv = $("<div>");
        var newPTitle = $("<h2>");
        var newPParagraph = $("<p>");
        var newPDate = $("<p>");
        var newALink = $("<a> Full Article </a>");
        newPTitle.text(newspaper.response.docs[i].headline.main);
        newPParagraph.text(newspaper.response.docs[i].lead_paragraph);
        var dateConvert = moment(newspaper.response.docs[i].pub_date, "");
        newPDate.text(dateConvert.format("LL"));
        newALink.attr("href", newspaper.response.docs[i].web_url);
        newALink.attr("target", "_blank");
        $(newDiv).append(newPTitle);
        $(newDiv).append(newPParagraph);
        $(newDiv).append(newPDate);
        $(newDiv).append(newALink);
        $(newDiv).append("<hr>");
        $(".article_presentation").prepend(newDiv);
      }
    });
  };

  // Adding a click event listener for the click of the submit button
  $("#submit").on("click", displayArticles);

});
