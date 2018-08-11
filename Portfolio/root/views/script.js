// Information about apps
var app_info = [
  {
    name: 'inputForm',
    about: '<ul>' +
    '<li>An input form with mandatory <strong>first</strong> and <strong>last name</strong> fields.</li>' +
    '<li>On submit, information is logged to console.</li>' +
    '<li>Customer gets overhead banner, clear resets form.</li>' +
    "<li class='mobile-friendly'>Mobile Friendly: Yes</li>" +
    '</ul>',
    short_url: `../../external/inputForm/form.html`,
    api_description: 'apodspoaksdpaksdpoakdspaokdspakdadadadada'
  },
  {
    name: 'rockPaperScissors',
    about: '<ul>' +
    "<li>Player pics hand, computer gets a random hand. Shows winner.</li>" +
    '<li>Console logs a pseudo-random distribution of 100 hands </li>' +
    "<li class='mobile-friendly'>Mobile Friendly: Yes</li>" +
    '</ul>',
    short_url: `../../external/rockPaperScissors/rockPaperScissors.html`,
    api_description: 'apodspoaksdpaksdpoakdspaokdspakdadadadada'
  },
  {
    name: 'gamesList',
    about: 'a list of games',
    short_url: '../../external/gamesList/templates/games.html',
    api_description: 'apodspoaksdpaksdpoakdspaokdspakdadadadada'
  },
  {
    name: 'dota',
    about: 'dota2 the OG moba',
    short_url: `../../external/dota2/dota2.html`,
    api_description: 'apodspoaksdpaksdpoakdspaokdspakdadadadada'
  }
]

// Display-hide functions
function showDescription(){
  $('aside').css('display','inline-block');
  $('description').css('display','block');
  
}
function showPortfolio(){
  $('.flex-container').css('display','flex');
  $('.info').css('display','block');
//   $('description').css('display','none')
}
function showAboutMe(){
   $('.flex-container').css('display','none');
   $('.info').css('display','none');
   $('description').css('display','none')
}


// Start
$(domLoaded)
function domLoaded(){

  $('#portfolio').click(function(){
      showPortfolio();
  })

   $('#about-me').click(function(){
      showAboutMe();
   });

  
  // HTML keeper for app information, bottom right side of the screen
  var container = document.getElementsByClassName('right')[0];

  

  function clearDescription() {
     while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
  }
  
  // Creates a logo of the app
  function createLogo(appName){
    let imageUrl = '../assets/images/' + appName + '.png';
    let image = document.createElement('img');
    image.setAttribute('class', `logo ${appName}_logo`);
    image.setAttribute('src' , imageUrl);
    container.appendChild(image);
  }
  
  // links  'about', 'open app'  buttons in bottom half -> to the app requested by the user :see below 
  // formats pages
  
  function animateApp(app_name){
    $('.about').attr('name' , app_name);
    $('.open-app').attr('name' , app_name);
    $('.api-info-button').attr('name' , app_name);
    showDescription();
    clearDescription();
    createLogo(app_name);
  }
  
 // User selection of app in portfolio
  
  $('#inputForm').click(function(){
//       window.open(`../../external/inputForm/form.html`, "_blank");
         animateApp('inputForm');
         $('.api-info-button').css('display' , 'none');
  })
  
  $('#rockPaperScissors').click(function(){
//       window.open(`../../external/rockPaperScissors/rockPaperScissors.html`, "_blank");
         animateApp('rockPaperScissors');
         $('.api-info-button').css('display' , 'none');
  })
  
  $('#gamesList').click(function(){
   //    window.open(`../../external/gamesList/templates/games.html`, "_blank");
         animateApp('gamesList');
         $('.api-info-button').css('display' , 'block');
  })
  
  $('#dota').click(function(){
  //     window.open(`../../external/dota2/dota2.html`, "_blank");
         animateApp('dota');
         $('.api-info-button').css('display' , 'block');
  })
  
  
  
  

   // Functions that display app info when clicking 'about' and 'api info'
  function populateAboutScreen(app){
    clearDescription();
//     console.log('our application object is:', app);
    var description = document.createElement('h3');
    description.setAttribute('class' , 'app-info');
    description.innerHTML = app.about;
    container.appendChild(description);
  }
  
  function populateApiScreen(app){
      clearDescription();
//       console.log('our application object for api screen is:', app);
      var aboutApi = document.createElement('h3');
      aboutApi.setAttribute('class' , 'api-description');
      aboutApi.innerHTML = app.api_description;
      container.appendChild(aboutApi);
  }
  
  
  function getAppData(){
      // about
      $('.about').click(function(){
        app_info.forEach(function(app){
           if($('.about').attr('name') == app.name){
              populateAboutScreen(app); 
           }
        })
      })
      // api-info
      $('.api-info-button').click(function(){
        app_info.forEach(function(app){
           if($('.api-info-button').attr('name') == app.name){
              populateApiScreen(app); 
           }
        })
      })
  }
  getAppData();
  
  
  
  
  // Function that opens app when clicking 'open app'
  function openApp(){
    $('.open-app').click(function(){
      app_info.forEach(function(app){
           if($('.open-app').attr('name') == app.name){
             window.open(app.short_url , "_blank");
           }
      })
    })
  }
  openApp();


  


//   document.cookie = "username= Anca; expires Thu, 18 Dec 2019 12:00:00 UTC; path=/";
//   document.cookie = "language= en; expires Thu, 18 Dec 2019 12:00:00 UTC; path=/";
  
//   function getCookie(){
    
//     var keeperArray = document.cookie.split(';');
//     console.log('keeper', keeperArray);
    
//     var detailsName = keeperArray[0].split('=');
//     console.log(detailsName);
//    }
  
//    getCookie();
  
}
// End of domLoaded()