window.addEventListener("load", function() {
  

  
  var containerEl = document.getElementById('game-details');
  
  var game = new Game();
  var gameID = getUrlParameter('gameID');
 

  game._id = gameID;
  // our article object gets the id from URL

  game.getGameDetails().then(function(response){
                                   console.log(response.title);
                                   game.title = response.title;
                                   game.description = response.description;
                                   game.publisher = response.publisher;
                                   game.imageUrl = response.imageUrl;
                                   game.releaseDate = response.releaseDate;
                                   displayGameDetails(game);
                                   });
  
  function displayGameDetails(gameDetails) {
    
      // html keepers
      var columnLeft = document.createElement ('column');
      columnLeft.setAttribute('class' , 'column-left');
      var columnRight = document.createElement ('column');
      columnRight.setAttribute('class' , 'column-right');
    
      //publisher
      var publisherEl = document.createElement('h2');
      publisherEl.innerHTML = gameDetails.publisher + ' presents: ';
      columnLeft.appendChild(publisherEl);
    
      //title
      var titleEl = document.createElement('h2');
      titleEl.innerHTML = gameDetails.title;
      titleEl.setAttribute('class' , 'title');
      columnLeft.appendChild(titleEl);
    
      // description
      var bodyEl = document.createElement('p');
      bodyEl.innerHTML = gameDetails.description;
      bodyEl.setAttribute('class' , 'game-info');
      columnLeft.appendChild(bodyEl);
    
      // release date
      var releaseDate = document.createElement('release');
      var dateFormatted = new Date(gameDetails.releaseDate*1000).toString();
      releaseDate.innerHTML = 'Release date: ' + dateFormatted;
      columnLeft.appendChild(releaseDate);
     
      //game image
      var gameImage = document.createElement('img');
      gameImage.setAttribute('src', gameDetails.imageUrl);
      gameImage.setAttribute('class' , 'image');
      columnRight.appendChild(gameImage);

    
      containerEl.appendChild(columnLeft);
      containerEl.appendChild(columnRight);
   
    
}
  
  /**
     * It retrieves a query (URL) parameter value
     * It expects you to send the parameter key(before '=')
     * For example http://cursuri-adrianpetrisor301182.codeanyapp.com/Portfolio/external/gamesList/templates/game.html?gameID=5b67739bba3ba40020824706
     * **/  
  function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }

});

