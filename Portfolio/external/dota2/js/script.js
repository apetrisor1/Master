// API USED:  
// https://docs.opendota.com

// CALLS USED:
// teams: https://api.opendota.com/api/teams/{team_id}
// players of a team: https://api.opendota.com/api/teams/{team_id}/players
// players: https://api.opendota.com/api/players/{account_id}


$(domLoaded);

function domLoaded() {
 
 // 1. URL builders
  
  // Builds URL to request a team
  var selectTeam = function(teamId) {
    var url = 'https://api.opendota.com/api/teams/';
    url += teamId;
    return url;
  }

  // Builds URL to request players of a team
  var selectPlayersOfTeam = function(teamId) {
    var url = 'https://api.opendota.com/api/teams/';
    url += teamId;
    url += '/players';
    return url;
  }

  // Builds URL to request one player
  var selectPlayer = function(accountId) {
    var url = 'https://api.opendota.com/api/players/';
    url += accountId;
    return url;
  }


 // 2. Ajax & session storage calls
  
  // Requests the team object and displays basic team records on the right-hand side of the screen
  function getTeam(teamId) {
    var teamURL = selectTeam(teamId);
    
    // Displays basic team records 
    function populateScreenTeam (teamObj){
      let team = "<p>" + teamObj.name + "</p>";
      let wins = "<p style='color: #2b9642'>";
      wins += teamObj.wins;
      wins += " wins</p>";
      let losses = "<p style='color: #7a212c'>";
      losses += teamObj.losses;
      losses += " losses</p>";
      $('#about-team').append(team);
      $('#about-team').append(wins);
      $('#about-team').append(losses);
    }
    
    // If sessions contains a team, we use that, otherwise we ajax call the team object
    if (sessionStorage.getItem(teamURL) != null && sessionStorage.getItem(teamURL) !== undefined) {
      var storedTeam = sessionStorage.getItem(teamURL);
      var data = $.parseJSON(storedTeam);
      setTimeout(populateScreenTeam(data),  2000);
    } else {
      $.ajax({
        url: teamURL,
        method: 'GET',
        success: function(result) {
          sessionStorage.setItem(teamURL, JSON.stringify(result));
          populateScreenTeam(result);
        }
      });
    }
  }

  
  // Creates click functionality on each displayed player name
  function animatePlayer(playerId) {
    var playerUrl = selectPlayer(playerId);
    function createPlayer(playerObj) {
      if (playerObj.profile.profileurl) {
          $(`#${playerObj.profile.account_id}`).click(function() {
            window.open(`${playerObj.profile.profileurl}`, '_blank');
      });
      } else {
           $(`#${playerObj.profile.account_id}`).click(function() {
             alert('Player does not have a public steam profile');
           });
        }  
    }
    
     // If sessionStorage already contains a player object, we use that
    // else we ajax call the player object, then use it to create functionality
    if (sessionStorage.getItem(selectPlayer(playerId)) != null && sessionStorage.getItem(selectPlayer(playerId)) !== undefined) {
      var player = selectPlayer(playerId);
      var storedPlayer = sessionStorage.getItem(player);
      var data = $.parseJSON(storedPlayer);
      createPlayer(data);
    } else {
      $.ajax({
        url: playerUrl,
        method: 'GET',
        success: function(result) {
          sessionStorage.setItem(playerUrl, JSON.stringify(result));
          createPlayer(result);
        }
      })
    }
  }


  // Requests and displays all players of a specified team on the left-hand side of the screen
  function getPlayers(teamId) {
    var notablePlayers = selectPlayersOfTeam(teamId);
    
    // Displays each player's name and calls the function >(getPlayer) for setting up click events on each name that is displayed 
    function populateScreenPlayers(notablePlayersObj) {
      for (var i = 0; i < notablePlayersObj.length; i++) {
        if (notablePlayersObj[i].name) {
          let playerOnScreen = "<h4 id=" + notablePlayersObj[i].account_id + ">" + notablePlayersObj[i].name + "</h4>";
          $('footer').append(playerOnScreen);
          let gamesPlayed = '<h4 class=standard>' + notablePlayersObj[i].games_played + '</h4>';
          $('footer2').append(gamesPlayed);
          animatePlayer(notablePlayersObj[i].account_id);
        }
      }
    }
    
    // If sessionStorage already contains our team object, we populate the screen from sessionStorage
    // else we ajax call to get our team object, then populate the screen with the result.
    if (sessionStorage.getItem(notablePlayers) != null && sessionStorage.getItem(notablePlayers) !== undefined) {
      var data = $.parseJSON(sessionStorage.getItem(notablePlayers));
      populateScreenPlayers(data);
    } else {
      $.ajax({
        url: notablePlayers,
        method: 'GET',
        success: function(result) {
          sessionStorage.setItem(notablePlayers, JSON.stringify(result));
          populateScreenPlayers(result);
        }
      });
    }
  }


 // 3. Functionality
  
  $('welcome').click(function() {
    window.open('https://store.steampowered.com/app/570/Dota_2/', '_blank');
    location.reload();
  })

  var teamsArray = [{
      teamId: 2163,
      logoId: 'logo1'
    },
    {
      teamId: 39,
      logoId: 'logo2'
    },
    {
      teamId: 1838315,
      logoId: 'logo3'
    },
    {
      teamId: 1883502,
      logoId: 'logo4'
    },
    {
      teamId: 36,
      logoId: 'logo5'
    },
  ];

  teamsArray.forEach(function(team) {
    $('#' + team.logoId).click(function() {
      $('#about-team').empty();
      $('footer').empty();
      $('footer2').empty();
      getPlayers(team.teamId);
      getTeam(team.teamId);
      $('h1').css('display', 'none');
      $('#player-info').css('display' , 'block');
      $('h3').css('visibility', 'visible');
    });
  });
}