  // CURS 9  -  Rock Paper Scissors game
  // Player gets random hand, computer gets random hand. Show winner.

  
   // Call function to play game.
  document.addEventListener("DOMContentLoaded", function(){
  
  // 1. Empty objects are used to compare choices.
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
  
  // Assigns player and computer an integer. (random int between 0 and 3, not including 3)
  // 0 for Paper
  // 1 for Scissors
  // 2 for Rock
  
  var myRoll = getRandomInt(3);
  var computerRoll = getRandomInt(3);
  console.log("Rock Paper Scissors");
  console.log("");
  
  
  // Player's choice is assigned a hand and picture
  var newHandPlayer = document.createElement('h3');
  newHandPlayer.className = ('player-pick');
  var imagePlayer = document.createElement('playerPic');
  
  switch(myRoll) {
    case 0:
        console.log("You have chosen paper!");    
        myStats = rollPaper;
        newHandPlayer.innerHTML = "Player has picked paper!";
        document.getElementById('choices').appendChild(newHandPlayer);
        imagePlayer.innerHTML = "<img src = 'assets/images/paper.png'>";
        imagePlayer.className = "paper";
        document.getElementById('container').appendChild(imagePlayer);
        break;
    case 1:
        console.log("You have chosen scissors!");
        myStats = rollScissors;
        newHandPlayer.innerHTML = "Player has picked scissors!";
        document.getElementById('choices').appendChild(newHandPlayer);
        imagePlayer.innerHTML = "<img src = 'assets/images/scissors2.png'>";
        imagePlayer.className = "scissors";
        document.getElementById('container').appendChild(imagePlayer);
        break;
    case 2:
        console.log("You have chosen rock!");
        myStats = rollRock;
        newHandPlayer.innerHTML = "Player has picked rock!";
        document.getElementById('choices').appendChild(newHandPlayer);
        imagePlayer.innerHTML = "<img src = 'assets/images/rock.jpg'>";
        imagePlayer.className = "rock";
        document.getElementById('container').appendChild(imagePlayer);
        break;
    default:
        break;
    }
  
  var newHandComputer = document.createElement('h3');
  newHandComputer.className = ('computer-pick');  
  var imageComputer = document.createElement('computerPic');
  
  // Computer's choice is assigned a hand
  switch(computerRoll) {
    case 0:
        console.log("Computer has chosen paper!");
        computerStats = rollPaper;
        newHandComputer.innerHTML = "Computer has picked paper!";
        document.getElementById('choices').appendChild(newHandComputer);
        imageComputer.innerHTML = "<img src = 'assets/images/paper.png'>";
        imageComputer.className = "paper2";
        document.getElementById('container').appendChild(imageComputer);
        break;
    case 1:
        console.log("Computer has chosen scissors!");
        newHandComputer.innerHTML = "Computer has picked scissors!";
        document.getElementById('choices').appendChild(newHandComputer);
        computerStats = rollScissors;
        imageComputer.innerHTML = "<img src = 'assets/images/scissors2.png'>";
        imageComputer.className = "scissors2";
        document.getElementById('container').appendChild(imageComputer);
        break;
    case 2:
        console.log("Computer has chosen rock!");
        computerStats = rollRock;
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
  
  
  // 2.1 GAME RULES  
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
  
  
  // 3. Shows pseudo distribution of getRandomInt
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
  

