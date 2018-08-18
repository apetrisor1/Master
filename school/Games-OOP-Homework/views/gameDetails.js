window.addEventListener("load", function() {
  

  
  var containerEl = document.getElementById('game-details');
  
  var game = new Game();
  //   http://cursuri-adrianpetrisor301182.codeanyapp.com/curs20-OOP-part1Revisited/templates/article.html?articleId = 2    // For example
  var gameID = getUrlParameter('gameID');
  
  // our article object gets the id from URL
  game._id = gameID;
  
  game.getGameDetails().then(function(response){
                                   console.log(response.title);
                                   game.title = response.title;
                                   game.description = response.description;
                                   game.publisher = response.publisher;
                                   game.imageUrl = response.imageUrl;
                                   game.releaseDate = response.releaseDate;
//                                    game.genre = response.genre;   CURRENTLY N
                                   displayGameDetails(game);
                                   });
  
  function displayGameDetails(gameDetails) {
      //publisher
      var publisherEl = document.createElement('h1');
      publisherEl.innerHTML = gameDetails.publisher + ' presents: ';
      containerEl.appendChild(publisherEl);
      //title
      var titleEl = document.createElement('dt');
      titleEl.innerHTML = gameDetails.title;
      containerEl.appendChild(titleEl);
      // description
      var bodyEl = document.createElement('dd');
      bodyEl.innerHTML = gameDetails.description;
      containerEl.appendChild(bodyEl);
    
     
      //game image
      var gameImage = document.createElement('img');
      gameImage.setAttribute('src', gameDetails.imageUrl);
      containerEl.appendChild(gameImage);
      // release date
      var releaseDate = document.createElement('release');
      var dateFormatted = new Date(gameDetails.releaseDate*1000).toString();
      releaseDate.innerHTML = 'Release date: ' + dateFormatted;
      containerEl.appendChild(releaseDate);
   
    
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

});

