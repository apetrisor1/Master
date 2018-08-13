// Information about apps
var app_info = [
  {
    name: 'inputForm',
    about: '<ul>' +
    '<li>Input form with mandatory <strong>first</strong> and <strong>last name</strong> fields.</li>' +
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
    about: '<ul>' +
    '<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>' + 
    '<li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>'+
    '<li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>'+
    '<li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>',
    short_url: '../../external/gamesList/templates/games.html',
    api_description: 'apodspoaksdpaksdpoakdspaokdspakdadadadada'
  },
  {
    name: 'dota',
    about: '<ul>' +
    '<li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo veritatis et</li>'+
    '<li>quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</li>'+
    '<li>magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,</li>'+
    '<li>sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</li>',
    short_url: `../../external/dota2/dota2.html`,
    api_description: 'apodspoaksdpaksdpoakdspaokdspakdadadadada'
  }
]

var state = 0; // state of our application
// 0 - blank homepage
// 1 - user clicked about me
// 2 - user clicked portfolio
// 3 - user clicked on an app
// 4 - user clicked  on about app
// 5 - user clicked  on about api 

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

  blinkingCat();

  $('#portfolio').click(function(){
      showPortfolio();
      getAppData();
      state=2;
      console.log('state', state);
  })

   $('#about-me').click(function(){
      showAboutMe();
      state=1;
      console.log('state', state);
      location.reload();
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
    image.setAttribute('id','logo');
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
    state = 3;
    console.log('state', state);
  }
  
 // User selection of app in portfolio
  
  $('#inputForm').click(function(){
         animateApp('inputForm');
         $('.api-info-button').css('display' , 'none');
  })
  
  $('#rockPaperScissors').click(function(){
         animateApp('rockPaperScissors');
         $('.api-info-button').css('display' , 'none');
  })
  
  $('#gamesList').click(function(){
         animateApp('gamesList');
         $('.api-info-button').css('display' , 'block');
  })
  
  $('#dota').click(function(){
         animateApp('dota');
         $('.api-info-button').css('display' , 'block');
  })
  
  
 

   // Clicking 'about' and 'api info'
  function populateAboutScreen(app){
    clearDescription();
    var description = document.createElement('h3');
    description.setAttribute('class' , 'app-info');
    description.innerHTML = app.about;
    container.appendChild(description);
  }
  function populateApiScreen(app){
      clearDescription();
      var aboutApi = document.createElement('h3');
      aboutApi.setAttribute('class' , 'api-description');
      aboutApi.innerHTML = app.api_description;
      container.appendChild(aboutApi);
  }

  function getAppAbout(){
      app_info.forEach(function(app){
          if($('.about').attr('name') == app.name){
             populateAboutScreen(app);
          }
      })
  }
  function getAppAboutApi(){
      app_info.forEach(function(app){
          if($('.api-info-button').attr('name') == app.name){
            populateApiScreen(app); 
          }
      })
  }

 // Animation that moves app logo when clicking About
 function moveRight() {
      var logo = document.getElementById('logo');
      var pos = 0;
      //position on X Axis

      let move = setInterval(frame,5);
      //start moving, once every 5 miliseconds

      function frame() {
          if (pos == 400) {
            clearInterval(move);
          } else {
            pos++; 
            logo.style.left = pos/10 + '%'; 
            logo.style.opacity = 1 - pos/160;
          }
      }
  }

 

  function getAppData(){
      $('.about').click(function(){
        if(state === 3){
          moveRight();
          setTimeout(getAppAbout,800);
        }else{
          getAppAbout();
        }
        state = 4;
        console.log('state', state);
      })
      // api-info
      $('.api-info-button').click(function(){
        getAppAboutApi();
        state = 5;
        console.log('state', state);
      })
  }
  
  
  
  
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

 

 


}
// End of domLoaded()






// GETTING A CSS PROPERTY IN JS:

 // function getCssProperty(elementID,prop){
  //   let elem = document.getElementById(elementID);
  //   let styleOfElem = window.getComputedStyle(logo);
  //   let result = styleOfLogo.getPropertyValue(prop);
  //   console.log('result is', result);
  //   return result;
  // }



// WORKING WITH COOKIES:

//   document.cookie = "username= Anca; expires Thu, 18 Dec 2019 12:00:00 UTC; path=/";
//   document.cookie = "language= en; expires Thu, 18 Dec 2019 12:00:00 UTC; path=/";
  
//   function getCookie(){
    
//     var keeperArray = document.cookie.split(';');
//     console.log('keeper', keeperArray);
    
//     var detailsName = keeperArray[0].split('=');
//     console.log(detailsName);
//    }
  
//    getCookie();
  