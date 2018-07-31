function Games() {
}

Games.prototype.getAll = function() {
  return $.get('https://games-world.herokuapp.com/games/');
}


Games.prototype.addNewGame = function _ajax_request(url, data) {
    return jQuery.ajax({
        url: url,
        type: 'POST',
        data: data,
        success: function(data){
          console.log('data i have added: ',data);
        }
    });
}