window.addEventListener("load", function() {
  
  var containerEl = document.getElementById('articles-list');
  
  var articlesModel = new Articles();
  articlesModel.getAll().then(displayAllArticles);
  
  function displayAllArticles(articlesData) {
    for(var i=0; i < articlesData.length; i++){
      var article = new Article(articlesData[i]);
      displayArticle(article);
    }
  }
  function displayArticle(article) {
    var liEl = document.createElement('dt');
    var liEl2 = document.createElement('dd');
    var titleEl = document.createElement('h1');
    titleEl.innerHTML = article.title;
    titleEl.setAttribute('id',`${article.id}`);
    var bodyEl = document.createElement('p');
    bodyEl.innerHTML = article.body;
    liEl.appendChild(titleEl);
    liEl2.appendChild(bodyEl);
    containerEl.appendChild(liEl); 
    containerEl.appendChild(liEl2); 
    
    // Set click listener on every article to go to the respective single article page
    $(`#${article.id}`).click(function(){
    window.open(`article.html?articleId=${article.id}`, "_blank");
  })
    
  }
  $('#date').click(function(){
    window.open('https://www.reuters.com/','_blank');
  })
  
  
  
});