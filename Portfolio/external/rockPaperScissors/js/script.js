// CURS 9  -  Rock Paper Scissors game
// Player gets random hand, computer gets random hand. Show winner.
  
// Call function when DOM is loaded to initiate game.
document.addEventListener("DOMContentLoaded", function(){
console.log("Rock Paper Scissors");
console.log("");

  // Empty objects are used to compare choices.
  // rollPaper is the choice of paper, rollRock is the choice of rock and so on.
  // myStats holds the player's choice.
  // computerStats holds the computer's choice.
  var rollPaper = {
  };
  var rollScissors = {
  };
  var rollRock = {
  };
  var myStats = {
  };
  var computerStats = {
  }; 
    
  // Return a random integer between 0 and max, not including max.
  function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
  }
  
  // Turns all choices to opaque a short while after choice
  function turnOpaque(){
     setTimeout(function() {document.getElementsByClassName('opaque1')[0].style.opacity = "0.2";}, 2250);
     setTimeout(function() {document.getElementsByClassName('opaque2')[0].style.opacity = "0.2";}, 2250);
     setTimeout(function() {document.getElementsByClassName('opaque3')[0].style.opacity = "0.2";}, 2250);
     $('.opaque1').mouseenter(function() {document.getElementsByClassName('opaque1')[0].style.opacity = "0.2";});
  }
  
  // Choices available to player, mapped out in opaque styling
  var imagePlayerOpaque1 = document.createElement('playerPic');
  var imagePlayerOpaque2 = document.createElement('playerPic');
  var imagePlayerOpaque3 = document.createElement('playerPic');  
  imagePlayerOpaque1.innerHTML = "<img src = 'assets/images/rock.jpg'>";
  imagePlayerOpaque2.innerHTML = "<img src = 'assets/images/paper.png'>";
  imagePlayerOpaque3.innerHTML = "<img src = 'assets/images/scissors.png'>";
  imagePlayerOpaque1.className = "opaque1";
  imagePlayerOpaque2.className = "opaque2";
  imagePlayerOpaque3.className = "opaque3";
  document.getElementById('container').appendChild(imagePlayerOpaque1);
  document.getElementById('container').appendChild(imagePlayerOpaque2);
  document.getElementById('container').appendChild(imagePlayerOpaque3);
    
  // Player is initially assigned an empty hand
  var newHandPlayer = document.createElement('h3');
  newHandPlayer.className = ('player-pick');
  
  // choiceMade variable tracks if the user is on a first play-through
  var choiceMade = false;  
    
  // ROCK
  // Empty hand is populated with the choice of rock and appended to the div with id 'choices'
  document.getElementsByClassName("opaque1")[0].addEventListener('click', function(){
     console.log("You have chosen rock!");
     myStats = rollRock;
     newHandPlayer.innerHTML = '';
     newHandPlayer.innerHTML = "Player has picked rock!";
     document.getElementById('choices').appendChild(newHandPlayer);
     // Visually represent player's choice by turning choice into non-opaque
     document.getElementsByClassName('opaque1')[0].style.opacity = "1";
     document.getElementsByClassName('opaque2')[0].style.opacity = "0.2";
     document.getElementsByClassName('opaque3')[0].style.opacity = "0.2";
     // choices turn opaque after a short while
     turnOpaque();
     

    
    // If no pick was made already, we play game and populate screen
     if(choiceMade === false)
       {
        document.getElementsByClassName("opaque1")[0].addEventListener('click', playGame());
        document.getElementById('chooseWeapon').style.visibility = 'hidden';
        document.getElementById('refresh').style.visibility = 'visible';
       }else{ // if playing by choosing a new hand we must first delete previous notifications by removing the respective DOM node.
              // Note that we don't need to alter the visibility of bottom messages because they are set on first playthrough
        document.getElementById('choices').removeChild(document.getElementById('choices').childNodes[1]);
        document.getElementById('result').removeChild(document.getElementById('result').childNodes[1]);
        document.getElementsByClassName("opaque1")[0].addEventListener('click', playGame());
       }
     choiceMade = true; 
  });
    
  // PAPER  
  // Empty hand is populated by choosing Paper and appended to the div with id 'choices'
  document.getElementsByClassName("opaque2")[0].addEventListener('click',function(){
       console.log("You have chosen paper!");
       myStats = rollPaper;
       newHandPlayer.innerHTML = '';
       newHandPlayer.innerHTML = "Player has picked paper!";
       document.getElementById('choices').appendChild(newHandPlayer);
       // Visually represent player's choice by turning choice into non-opaque
       document.getElementsByClassName('opaque2')[0].style.opacity = "1";
       document.getElementsByClassName('opaque1')[0].style.opacity = "0.2";
       document.getElementsByClassName('opaque3')[0].style.opacity = "0.2";
       turnOpaque();
    
       // If no pick was made already, we play game and populate screen
       if(choiceMade === false){
         document.getElementsByClassName("opaque2")[0].addEventListener('click', playGame());
         document.getElementById('chooseWeapon').style.visibility = 'hidden';
         document.getElementById('refresh').style.visibility = 'visible';
       }else{ // if playing by choosing a new hand we must first delete previous notifications by removing the respective DOM node.
              // Note that we don't need to alter the visibility of bottom messages because they are set on first playthrough
         document.getElementById('choices').removeChild(document.getElementById('choices').childNodes[1]);
         document.getElementById('result').removeChild(document.getElementById('result').childNodes[1]);
         document.getElementsByClassName("opaque2")[0].addEventListener('click', playGame());
       }
       choiceMade = true; 
  });  
    
  // SCISSORS
  // Empty hand is populated by choosing Scissors and appended to the div with id 'choices'
  document.getElementsByClassName("opaque3")[0].addEventListener('click',function(){
       console.log("You have chosen scissors!");
       myStats = rollScissors;
       newHandPlayer.innerHTML = '';
       newHandPlayer.innerHTML = "Player has picked scissors!";
       document.getElementById('choices').appendChild(newHandPlayer);
       // Visually represent player's choice by turning choice into non-opaque
       document.getElementsByClassName('opaque3')[0].style.opacity = "1";
       document.getElementsByClassName('opaque1')[0].style.opacity = "0.2";
       document.getElementsByClassName('opaque2')[0].style.opacity = "0.2";
       turnOpaque();
    
       // If no pick was made already, we play game and populate screen
       if(choiceMade === false){
         document.getElementsByClassName("opaque3")[0].addEventListener('click', playGame());
         document.getElementById('chooseWeapon').style.visibility = 'hidden';
         document.getElementById('refresh').style.visibility = 'visible';
       }else{ // if playing by choosing a new hand we must first delete previous notifications by removing the respective DOM node.
              // Note that we don't need to alter the visibility of bottom messages because they are set on first playthrough
         document.getElementById('choices').removeChild(document.getElementById('choices').childNodes[1]);
         document.getElementById('result').removeChild(document.getElementById('result').childNodes[1]);
         document.getElementsByClassName("opaque3")[0].addEventListener('click', playGame());
       }
       choiceMade = true; 
  });
    
    
  // Main game function that:
    
  // A. assigns the computer a random hand
  // B. interprets game-rules and shows result
    
  function playGame(){
    
  // A:
    
  // Assigns computer an integer. (random int, 0 for Paper, 1 for Scissors, 2 for Rock)
  var computerRoll = getRandomInt(3);
    
  // Computer is assigned an empty hand
  var newHandComputer = document.createElement('h3');
  newHandComputer.className = ('computer-pick');  
  var imageComputer = document.createElement('computerPic');
  
  // Hand is populated
  switch(computerRoll) {
    case 0:
        console.log("Computer has chosen paper!");
        computerStats = rollPaper;
        newHandComputer.innerHTML = '';
        newHandComputer.innerHTML = "Computer has picked paper!";
        document.getElementById('choices').appendChild(newHandComputer);
        imageComputer.innerHTML = "<img src = 'assets/images/paper.png'>";
        imageComputer.className = "paper2";
        document.getElementById('container').appendChild(imageComputer);
        break;
    case 1:
        console.log("Computer has chosen scissors!");
        newHandComputer.innerHTML = '';
        newHandComputer.innerHTML = "Computer has picked scissors!";
        document.getElementById('choices').appendChild(newHandComputer);
        computerStats = rollScissors;
        imageComputer.innerHTML = "<img src = 'assets/images/scissors.png'>";
        imageComputer.className = "scissors2";
        document.getElementById('container').appendChild(imageComputer);
        break;
    case 2:
        console.log("Computer has chosen rock!");
        computerStats = rollRock;
        newHandComputer.innerHTML = '';
        newHandComputer.innerHTML = "Computer has picked rock!";
        document.getElementById('choices').appendChild(newHandComputer);
        imageComputer.innerHTML = "<img src = 'assets/images/rock.jpg'>";
        imageComputer.className = "rock2";
        document.getElementById('container').appendChild(imageComputer);
        break;
    default:
        break;
    }

  console.log("");
  
  
  // B: GAME RULES and RESULT
  var result = document.createElement('h3');
  result.className = "result";
  
  if(myStats === rollPaper)
    {
      if(computerStats === rollScissors){
              console.log("Computer wins!");
              result.innerText = "Computer wins!";
              document.getElementById('result').appendChild(result);
      }
      else if(computerStats === rollRock)
        {
              console.log("You win!");
              result.innerText = "Player wins!";
              document.getElementById('result').appendChild(result);
        }
      else {
              console.log("Draw!");
              result.innerText = "Draw!";
              document.getElementById('result').appendChild(result);
           }
    }
  else if(myStats === rollScissors)
    {
      if(computerStats === rollPaper)  
      {
              console.log("You win!");
              result.innerText = "Player wins!";
              document.getElementById('result').appendChild(result);
      }
      else if(computerStats === rollRock)
      {
              console.log("Computer wins!");
              result.innerText = "Computer wins!";
              document.getElementById('result').appendChild(result);
      }
      else {
            console.log("Draw!");
            result.innerText = "Draw!";
            document.getElementById('result').appendChild(result);
           }
      }
  else  //: myStats == rollRock
      if(computerStats === rollPaper)
      {
        console.log("Computer Wins!");
        result.innerText = "Computer wins!";
        document.getElementById('result').appendChild(result);
      }
    else if(computerStats === rollScissors)
      {
        console.log("You win!");
        result.innerText = "Player wins!";
        document.getElementById('result').appendChild(result);
      }
    else {
          console.log("Draw!");
          result.innerText = "Draw!";
          document.getElementById('result').appendChild(result);
         }
  } 
  
  // 3. Shows in csonsole pseudo distribution of getRandomInt
  // Keeper holds the outcomes of 100 random hands
  
  var keeper = [];
  var zero = 0; var one = 0; var two = 0;
  for(var i = 0; i<100 ; i++)
    {
      keeper[i] = getRandomInt(3);
      switch(keeper[i]){
        case 0:
          zero++;
          break;
        case 1:
          one++;
          break;
        case 2:
          two++;
          break;
        default:
          break;
      }
    }
  
   console.log("");
   console.log("Pseudo-random distribution of picks in 100 hands played");
   console.log(keeper);  
   console.log("Paper played: " + zero + " times.")
   console.log("Scissors played: " + one + " times.")
   console.log("Rock played: " + two + " times.")
  });   
  

