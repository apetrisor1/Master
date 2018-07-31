$(document).ready(
  function(){
    console.log("DOM IS READY");
  }
)

$(domLoaded);

function domLoaded() {
  console.log("DOM READY");
  
    var getShowsData = function(searcher) {
      $.ajax({
        url: getInfo(searcher),
        method: 'GET',
        success: manageData    
      })
      
      function getInfo(showToFind){
        var link = 'http://api.tvmaze.com/search/shows?q=';
        link += showToFind;
        return link;
      }
    }
    
     $('#invoke-ajax-test-call').on('click', function() {
       var searcher = $('input').val();
       getShowsData(searcher);
  })
    
  
  
  
    function manageData(data, textStatus, jqXHR) {
      
         $('.container').html(renderHTML(data))
//       console.log("data", data);
//       console.log(data.length);
//       console.log(textStatus);
//       console.log(jqXHR);
//       console.log(jqXHR.getAllResponseHeaders());
    }
    function renderHTML(data) {
      var html = '<ul>';
      for (var i = 0; i < data.length; i++) {
           html += '<li><span class = name>' + data[i].show.name + '</span>';
           html += '<span class = score>' + data[i].score + '</span>';
           html += '<span class = url><a target = blank href =' + data[i].show.url + '>' + data[i].show.url + '</a></span></li>';
        }
      html += '</ul>';
      return html;
    }
}