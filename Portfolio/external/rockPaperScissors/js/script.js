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
  

  
  // Choices available to player
  var rock = document.createElement('playerPic');
  var paper = document.createElement('playerPic');
  var scissors = document.createElement('playerPic');  
  rock.innerHTML = "<img src='assets/images/rock.jpg'>";
  paper.innerHTML = "<img src='assets/images/paper.png'>";
  scissors.innerHTML = "<img src='assets/images/scissors.png'>";
  rock.className = "rock";
  paper.className = "paper";
  scissors.className = "scissors";
  document.getElementById('container').appendChild(rock);
  document.getElementById('container').appendChild(paper);
  document.getElementById('container').appendChild(scissors);
  
    
  // Player is initially assigned an empty hand
  var newHandPlayer = document.createElement('h3');
  newHandPlayer.className = ('player-pick');
  
  // choiceMade variable tracks if the user is on a first play-through
  var choiceMade = false;  
    
  // ROCK
  // Empty hand is populated with the choice of rock and appended to the div with id 'choices'
  document.getElementsByClassName("rock")[0].addEventListener('click', function(){
     console.log("You have chosen rock!");
     myStats = rollRock;
     newHandPlayer.innerHTML = '';
     newHandPlayer.innerHTML = "Player has picked rock!";
     document.getElementById('choices').appendChild(newHandPlayer);
    
    
    // If no pick was made already, we play game and populate screen
     if(choiceMade === false)
       {
        document.getElementsByClassName("rock")[0].addEventListener('click', playGame());
        document.getElementById('chooseWeapon').style.visibility = 'hidden';
       }else{ // if playing by choosing a new hand we must first delete previous notifications by removing the respective DOM node.
              // Note that we don't need to alter the visibility of bottom messages because they are set on first playthrough
        document.getElementById('choices').removeChild(document.getElementById('choices').childNodes[1]);
        document.getElementById('result').removeChild(document.getElementById('result').childNodes[1]);
        document.getElementsByClassName("rock")[0].addEventListener('click', playGame());
       }
     choiceMade = true; 
  });
    
  // PAPER  
  // Empty hand is populated by choosing Paper and appended to the div with id 'choices'
  document.getElementsByClassName("paper")[0].addEventListener('click',function(){
       console.log("You have chosen paper!");
       myStats = rollPaper;
       newHandPlayer.innerHTML = '';
       newHandPlayer.innerHTML = "Player has picked paper!";
       document.getElementById('choices').appendChild(newHandPlayer);
    
       // If no pick was made already, we play game and populate screen
       if(choiceMade === false){
         document.getElementsByClassName("paper")[0].addEventListener('click', playGame());
         document.getElementById('chooseWeapon').style.visibility = 'hidden';
       }else{ // if playing by choosing a new hand we must first delete previous notifications by removing the respective DOM node.
              // Note that we don't need to alter the visibility of bottom messages because they are set on first playthrough
         document.getElementById('choices').removeChild(document.getElementById('choices').childNodes[1]);
         document.getElementById('result').removeChild(document.getElementById('result').childNodes[1]);
         document.getElementsByClassName("paper")[0].addEventListener('click', playGame());
       }
       choiceMade = true; 
  });  
    
  // SCISSORS
  // Empty hand is populated by choosing Scissors and appended to the div with id 'choices'
  document.getElementsByClassName("scissors")[0].addEventListener('click',function(){
       console.log("You have chosen scissors!");
       myStats = rollScissors;
       newHandPlayer.innerHTML = '';
       newHandPlayer.innerHTML = "Player has picked scissors!";
       document.getElementById('choices').appendChild(newHandPlayer);
      
    
       // If no pick was made already, we play game and populate screen
       if(choiceMade === false){
         document.getElementsByClassName("scissors")[0].addEventListener('click', playGame());
         document.getElementById('chooseWeapon').style.visibility = 'hidden';
       }else{ // if playing by choosing a new hand we must first delete previous notifications by removing the respective DOM node.
              // Note that we don't need to alter the visibility of bottom messages because they are set on first playthrough
         document.getElementById('choices').removeChild(document.getElementById('choices').childNodes[1]);
         document.getElementById('result').removeChild(document.getElementById('result').childNodes[1]);
         document.getElementsByClassName("scissors")[0].addEventListener('click', playGame());
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
  newHandComputer.className = ('computer-hand');  
  var imageComputer = document.createElement('computerPic');
  
    
    
    // Using populateComputerHand in cases      0 1 and 2    below achieves the same result, should be better BUT
    // when clicking to switch hands really fast it fails to show the correct image . 
    
//   function populateComputerHand(choice) {
//         newHandComputer.innerHTML = '';
//         newHandComputer.innerHTML = "Computer has picked " + choice +"!";
//         document.getElementById('choices').appendChild(newHandComputer);
//         imageComputer.innerHTML = `<img src = 'assets/images/${choice}.png'>`;
//         imageComputer.className = choice + "PC";
//         document.getElementById('container').appendChild(imageComputer);
//   }
    
    
  // Hand is populated
  switch(computerRoll) {
    case 0:
        console.log("Computer has chosen paper!");
        computerStats = rollPaper;
        newHandComputer.innerHTML = '';
        newHandComputer.innerHTML = "Computer has picked paper!";
        document.getElementById('choices').appendChild(newHandComputer);
        imageComputer.innerHTML = "<img src = 'assets/images/paper.png'>";
        imageComputer.className = "paperPC";
        document.getElementById('container').appendChild(imageComputer);
        break;
    case 1:
        console.log("Computer has chosen scissors!");
        computerStats = rollScissors;
        newHandComputer.innerHTML = '';
        newHandComputer.innerHTML = "Computer has picked scissors!";
        document.getElementById('choices').appendChild(newHandComputer);
        imageComputer.innerHTML = "<img src = 'assets/images/scissors.png'>";
        imageComputer.className = "scissorsPC";
        document.getElementById('container').appendChild(imageComputer);
        break;
    case 2:
        console.log("Computer has chosen rock!");
        computerStats = rollRock;
        newHandComputer.innerHTML = '';
        newHandComputer.innerHTML = "Computer has picked rock!";
        document.getElementById('choices').appendChild(newHandComputer);
        imageComputer.innerHTML = "<img src = 'assets/images/rock.jpg'>";
        imageComputer.className = "rockPC";
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
  

