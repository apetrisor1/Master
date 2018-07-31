window.addEventListener("load", function() {
  
  var containerEl = document.getElementById('article-details');
  
  var article = new Article();
  //   http://cursuri-adrianpetrisor301182.codeanyapp.com/curs20-OOP-part1Revisited/templates/article.html?articleId = 2    // For example
  var articleId = getUrlParameter('articleId');
  
  // our article object gets the id from URL
  article.id = articleId;
  
  article.getArticleDetails().then(function(response){
                                   console.log(response);
                                   article.title = response.title;
                                   article.body = response.body;
                                   displayArticleDetails(article);
                                   });
  
  function displayArticleDetails(articleDetails) {
      var titleEl = document.createElement('dt');
      titleEl.innerHTML = articleDetails.title;
      containerEl.appendChild(titleEl);
      var bodyEl = document.createElement('dd');
      bodyEl.innerHTML = articleDetails.body;
      containerEl.appendChild(bodyEl);
}
  
  /**
     * It retrieves a query (URL) parameter value
     * 
     * It expects you to send the parameter key(before '=')
     * **/  
  function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }
  
  console.log(articleId);
  $('#date').click(function(){
    window.open('https://www.reuters.com/','_blank')});
  
});

