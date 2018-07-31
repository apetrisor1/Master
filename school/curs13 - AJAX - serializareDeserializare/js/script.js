$(document).ready(
  function(){
    console.log("DOM IS READY");
  }
)

$(domLoaded);

function domLoaded(){
  console.log("DOM READY");
  
    var getShowsData = function() {
      $.ajax({
        url: 'http://api.tvmaze.com/search/shows?q=girls',
        method: 'GET',
        success: manageData    
    })
    }
    
     $('#invoke-ajax-test-call').on('click', function() {
    getShowsData()
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
        for(var i = 0; i < data.length; i++)
              html += '<li>' + data[i].show.name + '</li>';
        html += '</ul>';
        return html;
      }
      
}