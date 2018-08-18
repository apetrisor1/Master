// API USED:  
// https://docs.opendota.com

// CALLS USED:
// teams: https://api.opendota.com/api/teams/{team_id}
// players of a team: https://api.opendota.com/api/teams/{team_id}/players
// players: https://api.opendota.com/api/players/{account_id}


// 1. URL builders
// 2. AJAX calls
// 3. Functionality


$(domLoaded);

function domLoaded() {

  // 1.
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


  // 2.
  // Requests and displays basic team information on the right-hand side of the screen
  function getTeam(teamId) {
    var teamURL = selectTeam(teamId);
    if (sessionStorage.getItem(teamURL) != null && sessionStorage.getItem(teamURL) !== undefined) {
      var result = $.parseJSON(sessionStorage.getItem(teamURL));
      let team = "<p>" + result.name + "</p>";
      let wins = "<p style='color: #2b9642'>";
      wins += result.wins;
      wins += " wins</p>";
      let losses = "<p style='color: #7a212c'>";
      losses += result.losses;
      losses += " losses</p>";
      $('#about-team').append(team);
      $('#about-team').append(wins);
      $('#about-team').append(losses);

    } else {
      $.ajax({
        url: teamURL,
        method: 'GET',
        success: function(result) {
          // console.log(teamURL);

          sessionStorage.setItem(teamURL, JSON.stringify(result));
          let team = "<p>" + result.name + "</p>"
          let wins = "<p style='color: #2b9642'>";
          wins += result.wins;
          wins += " wins</p>";
          let losses = "<p style='color: #7a212c'>";
          losses += result.losses;
          losses += " losses</p>";
          $('#about-team').append(team);
          $('#about-team').append(wins);
          $('#about-team').append(losses);
        }
      });
    }
  }

  // Requests each player object to animate list of players
  // Click player to go to steam profile

  function getPlayer(playerId) {
    var playerUrl = selectPlayer(playerId);
    if (sessionStorage.getItem(selectPlayer(playerId)) != null && sessionStorage.getItem(selectPlayer(playerId)) !== undefined) {
      console.log(sessionStorage.getItem(selectPlayer(playerId)));
      //var data = $.parseJSON(sessionStorage.getItem(selectPlayer(playerId)));

      var player = selectPlayer(playerId);
      var storedPlayer = sessionStorage.getItem(player);
      var data = $.parseJSON(storedPlayer);
      
      //  if (data.profile.profileurl) {
      $(`#${data.profile.account_id}`).click(function() {
        window.open(`${data.profile.profileurl}`, '_blank');
      });
      //     } else {
      //    $(`#${data.profile.account_id}`).click(function() {
      //      alert('Player does not have a public steam profile');
      //     });
      //   }
    } else {
      $.ajax({
        url: playerUrl,
        method: 'GET',
        success: function(data) {
          sessionStorage.setItem(playerUrl, JSON.stringify(data));
          if (data.profile.profileurl) {
            $(`#${data.profile.account_id}`).click(function() {
              window.open(`${data.profile.profileurl}`, '_blank');
            });
          } else {
            $(`#${data.profile.account_id}`).click(function() {
              alert('Player does not have a public steam profile');
            });
          }
        }
      })
    }
  }


  // Requests and displays players of a specified team on the left-hand side of the screen
  function getPlayers(teamId) {
    var playersURL = selectPlayersOfTeam(teamId);
    if (sessionStorage.getItem(playersURL) != null && sessionStorage.getItem(playersURL) !== undefined) {
      //console.log(sessionStorage.getItem(playersURL));
      var data = $.parseJSON(sessionStorage.getItem(playersURL));
      for (var i = 0; i < data.length; i++) {
        if (data[i].name) {
          
          let playerOnScreen = "<h4 id=" + data[i].account_id + ">" + data[i].name + "</h4>";
          $('footer').append(playerOnScreen);
          let gamesPlayed = '<h4 class=standard>' + data[i].games_played + '</h4>';
          $('footer2').append(gamesPlayed);
          
          // For each player on the team, make an AJAX call to request the player object, to access Steam profile
          getPlayer(data[i].account_id);
        }
      }
    } else {
      $.ajax({
        url: playersURL,
        method: 'GET',
        success: function(data) {
          sessionStorage.setItem(playersURL, JSON.stringify(data));
          for (var i = 0; i < data.length; i++) {
            if (data[i].name) {
              
              let playerOnScreen = "<h4 id=" + data[i].account_id + ">" + data[i].name + "</h4>";
              $('footer').append(playerOnScreen);
              let gamesPlayed = '<h4 class=standard>' + data[i].games_played + '</h4>';
              $('footer2').append(gamesPlayed);
              
              // For each player on the team, make an AJAX call to request the player object, to access Steam profile
              getPlayer(data[i].account_id);
            }
          }
        }
      });
    }
  }



  // 2. Functionality
  $('welcome').click(function() {
    window.open('https://store.steampowered.com/app/570/Dota_2/', '_blank');
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
      $('footer').empty();
      $('footer2').empty();
      window.setTimeout($('#about-team').empty(),50);
      getPlayers(team.teamId);
      getTeam(team.teamId);
      $('h1').css('display', 'none');
      $('pre').css('visibility', 'visible');
      $('footer').css('left', '15%');
    });
  })


  //   // TEAM LIQUID
  //   $('#logo1').click(function () {
  //     $('footer').empty();
  //     $('footer2').empty();
  //     $('#about-team').empty();
  //     getPlayers(2163);
  //     getTeam(2163);
  //     $('h1').css('display', 'none');
  //     $('pre').css('visibility', 'visible');
  //     $('footer').css('left','15%');
  //   });

  //    // EVIL GENIUSES
  //  $('#logo2').click(function () {
  //     $('footer').empty();
  //     $('footer2').empty();
  //     $('#about-team').empty();
  //     getPlayers(39);
  //     getTeam(39);
  //     $('h1').css('display', 'none');
  //     $('pre').css('visibility', 'visible');
  //     $('footer').css('left','16.75%');
  //   });

  //  // TEAM SECRET
  //  $('#logo3').click(function () {
  //     $('footer').empty();
  //     $('footer2').empty();
  //     $('#about-team').empty();
  //     getPlayers(1838315);
  //     getTeam(1838315);
  //     $('h1').css('display', 'none');
  //     $('pre').css('visibility', 'visible');
  //     $('footer').css('left','16.25%');
  //   });

  //   // VIRTUS PRO
  //  $('#logo4').click(function () {
  //     $('footer').empty();
  //     $('footer2').empty();
  //     $('#about-team').empty();
  //     getPlayers(1883502);
  //     getTeam(1883502);
  //     $('h1').css('display', 'none');
  //     $('pre').css('visibility', 'visible');
  //     $('footer').css('left','16.25%');
  //   });

  //   // NATUS VINCERE
  //   $('#logo5').click(function () {
  //     $('footer').empty();
  //     $('footer2').empty();
  //     $('#about-team').empty();
  //     getPlayers(36);
  //     getTeam(36);
  //     $('h1').css('display', 'none');
  //     $('pre').css('visibility', 'visible');
  //     $('footer').css('left','16.25%');
  //     $('footer2').css('left','37.5%');
  //     $('footer2').css('top','520px');
  //   });
  //   }
}