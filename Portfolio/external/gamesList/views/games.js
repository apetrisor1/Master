 
// Personal game objects used for CREATE
 var myGames = [
                 {
                   "title": "Assetto Corsa",
                   "releaseDate": 1418947200,
                   "description": "Assetto Corsa (Italian for 'racing setup') is a sim racing video game developed by the Italian video game developer Kunos Simulazioni. It is designed with an emphasis on a realistic racing experience with support for extensive customization and moddability.",
                   "genre": "Racing Sim",
                   "publisher": "	Kunos Simulazioni",
                   "imageUrl": "https://www.gtplanet.net/wp-content/uploads/2016/05/Assetto-Corsa-Japanese-Car-Pack-RX-7-4-860x484.jpg"
                 },
                 {
                   "title": "DOTA 2",
                   "releaseDate": 1373328000,
                   "description": "All praise <a href='https://dota2.gamepedia.com/IceFrog' target='_blank'>IceFrog</a>",
                   "genre": "MOBA",
                   "publisher": "Valve Corporation",
                   "imageUrl": "https://assets1.ignimgs.com/thumbs/userUploaded/2016/12/5/dota2top51280-1480968955731_270h.jpg"
                 }
              ]


window.addEventListener("load", function() {
  
  // Refresh API games button
  $('#refresh-titles').click( function() {
    console.log('refreshed');
    window.open("https://games-world.herokuapp.com/regenerate-games", "dummyframe");
    setTimeout(location.reload(),300);
})
  
  var containerAll = document.getElementById('all-games-list');
  // HTML container for all data

  var gamesModel = new Games();
  // ALL games received are in games model

 
 
  
  gamesModel.getAll().then(displayAllGames);
    // Request all information from server then call the main function to display screen
   

  function displayAllGames(gamesData) {
    // displayAllGames is main function, contains:
    //                                             displayGame(game);    <-- displays each game in list      
    //                                             update(game._id);     <-- updates entry
    //                                             deleteGame(game);     <-- deletes entry
    //                                             addGame(game);        <-- adds entry
  
    for(var i=0; i < gamesData.length; i++){
      var game = new Game(gamesData[i]); 
      displayGame(game);  // Display each game
      update(game._id);   // Add update functionality on each game
      deleteGame(game);   // Add remove functionality on each game
    }
    // End of games list displayed on screen
    console.log('We are working with ' + gamesData.length + ' games');
    // log list info
    
    // add my personal games to server
    function addGame(game){
                      let gameObj = new Game(game);
                      displayGame(gameObj);
                      console.log(gameObj);
                      gamesModel.addNewGame('https://games-world.herokuapp.com/games' , game);                         
    }    
    $('#add-games').click(function(){
         myGames.forEach(function(gameObj){  // addGame() adds each of our personal games to the collection
                           addGame(gameObj);
         });
         setTimeout(location.reload(),300);
    });
  
    
     // update a game in server array
    function update(game_id){
    // brings up input fields when user clicks 'update release'
    $(`#updater_${game_id}`).click(function(){
                                       $(`#image_${game_id}`).css('display' , 'none');
                                       $(`#input1_${game_id}`).css('display' , 'block');
                                       $(`#input2_${game_id}`).css('display' , 'block');
                                       $(`#input3_${game_id}`).css('display' , 'block');
                                       $(`#deleter_${game_id}`).css('display' , 'none');
                                       $(`#updater_${game_id}`).css('display' , 'none');
                                       $(`#submitter_${game_id}`).css('display' , 'block');
                                       $(`#cancel_${game_id}`).css('display' , 'block');
                                    })
    
    // sends inputted value via PUT method
    $(`#submitter_${game._id}`).click(function(){
                                          if($(`#input1_${game_id}`).val() === ''  ||
                                             $(`#input2_${game_id}`).val() === ''  ||
                                             $(`#input3_${game_id}`).val() === ''  ){
                                              alert('Please enter all the required info for update');
                                            }else{
                                               console.log('new title: ', $(`#input1_${game_id}`).val());
                                               console.log('new description: ', $(`#input2_${game_id}`).val());
                                               console.log('new publisher: ', $(`#input3_${game_id}`).val());
                                               for(var i=0; i < gamesData.length; i++){
                                                   var gameToUpdate = new Game(gamesData[i]);
                                                   if(gameToUpdate._id == game_id){
                                                        var apiUrl = 'https://games-world.herokuapp.com/games/' + game_id;
                                                        gameToUpdate.updateGameDetails(apiUrl,{
                                                                                              title: $(`#input1_${game_id}`).val(),
                                                                                              description: $(`#input2_${game_id}`).val(),
                                                                                              publisher: $(`#input3_${game_id}`).val()
                                                                                              });            
                                                   }
                                               }
                                             location.reload();
                                             }
                                         })   
  // cancels update operation
  $(`#cancel_${game._id}`).click(function(){  
                                       $(`#image_${game_id}`).css('display' , 'block');
                                       $(`#input1_${game_id}`).css('display' , 'none');
                                       $(`#input2_${game_id}`).css('display' , 'none');
                                       $(`#input3_${game_id}`).css('display' , 'none');
                                       $(`#deleter_${game_id}`).css('display' , 'block');
                                       $(`#updater_${game_id}`).css('display' , 'block');
                                       $(`#submitter_${game_id}`).css('display' , 'none');
                                       $(`#cancel_${game_id}`).css('display' , 'none');
  })
    
  } // END of update function
  
    // delete a game from server array
    function deleteGame(game) {
      $(`#deleter_${game._id}`).click(function(){
                                          for(var i=0; i < gamesData.length; i++){
                                              var gameToDelete = new Game(gamesData[i]);
                                              if(gameToDelete._id == game._id){
                                                var apiUrl = 'https://games-world.herokuapp.com/games/' + game._id; 
                                                gameToDelete.deleteGame(apiUrl);
                                              }
                                           location.reload();
                                          }
                                        })
    } // END of delete function
    
} // END of display all games function
  
  
  // Display each game on screen 
  
  function displayGame(game) {
    
    // html keepers
    var containerRow = document.createElement('row');
    var columnLeft = document.createElement('column');
    columnLeft.setAttribute('class' , 'column-left');
    var columnRight = document.createElement('column');
    columnRight.setAttribute('class' , 'column-right');


    
    // title
    var titleEl = document.createElement('h1');
    titleEl.innerHTML = game.title;
    titleEl.setAttribute('id',`${game._id}`);
    columnLeft.appendChild(titleEl);
    
    // update button for CRUD
    var updateButton = document.createElement('updateGame');
    updateButton.innerHTML = "Update release";
    updateButton.setAttribute('class','updater');
    updateButton.setAttribute('id',`updater_${game._id}`);
    columnLeft.appendChild(updateButton);
    
     // delete button for CRUD DELETE
    var deleter = document.createElement('updateGame');
    deleter.innerHTML = 'Delete release';
    deleter.setAttribute('class','deleter');
    deleter.setAttribute('id' , `deleter_${game._id}`);
    columnLeft.appendChild(deleter);
    
    // description
    var bodyEl = document.createElement('p');
    bodyEl.innerHTML = game.description;
    bodyEl.setAttribute('class' , 'game-info');
    columnLeft.appendChild(bodyEl);

     
    //  input fields for CRUD UPDATE
    var inputField1 = document.createElement('input');
    var inputField2 = document.createElement('input');
    var inputField3 = document.createElement('input');
    
    // input fields
    inputField1.setAttribute('placeholder','New title*');
    inputField2.setAttribute('placeholder','New description*');
    inputField3.setAttribute('placeholder','New publisher*');
    inputField1.setAttribute('id',`input1_${game._id}`);
    inputField2.setAttribute('id',`input2_${game._id}`);
    inputField3.setAttribute('id',`input3_${game._id}`);
    columnRight.appendChild(inputField1);
    columnRight.appendChild(inputField2);
    columnRight.appendChild(inputField3);

    
    // submit button for CRUD UPDATE
    var submitter = document.createElement('button');
    submitter.innerHTML = 'Submit';
    submitter.setAttribute('id',`submitter_${game._id}`);
    submitter.setAttribute('class','submitter');
    columnRight.appendChild(submitter);
    
    // cancel button for UPDATE
    var cancel = document.createElement('button');
    cancel.innerHTML = 'Cancel';
    cancel.setAttribute('id',`cancel_${game._id}`);
    cancel.setAttribute('class','cancel');
    columnRight.appendChild(cancel);
    
    // image
    var imageHolder = document.createElement('div');
    var imageEachGame = document.createElement('img');
    imageEachGame.setAttribute('id',`image_${game._id}`);
    imageEachGame.setAttribute('src', game.imageUrl);
    imageEachGame.setAttribute('class','image');
    imageHolder.setAttribute('class' , 'image-holder');
    imageHolder.appendChild(imageEachGame);
    columnRight.appendChild(imageHolder);

    
    // append all to body
    containerRow.appendChild(columnLeft);
    containerRow.appendChild(columnRight);
    containerAll.appendChild(containerRow);      

    
    // Set click listener on every game to go to the respective single game page
    $(`#${game._id}`).click(function(){
      window.open(`game.html?gameID=${game._id}`, "_blank");
    })
    
   
    
  }
  
});