




$(function() {
  $("#submission").click(function(e) {

    e.preventDefault();

    $("#cards").empty();

    var searchText = $("#searchBar").val().toLowerCase();


    $.get("http://www.omdbapi.com/?apikey=3430a78&s=" + searchText, function(data) {

      for (var i=0; i<data.Search.length; i++) {
        var title = data.Search[i].Title;
        var year = data.Search[i].Year;
        var poster = data.Search[i].Poster;

        console.log(data.Search);


        if (poster !== 'N/A') {
          $("#cards").append('<div class="card" style="width: 20rem;">' +
          ' <img class="card-img-top" src="' + poster + '" alt="Card image cap">' +
          '<div class="card-body"><h3 class="card-title">' + title +
          '<span class="badge badge-secondary float-right">' + year +
          '</span></h4> <a href="#" class="btn btn-primary">Add!</a></div></div>')
        }
      }
    });
  });
});
