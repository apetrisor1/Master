  // Return a random integer between 0 and max, not including 0, not including max.
  function getRandomInt(max) {
  	var result = Math.floor(Math.random() * Math.floor(max));
  	if(result != 0){
  		return result;
  	}else{return result+1;} 
  }


// Makes cat blink
function blinkingCat(){

   	var naturalTime = 1110*getRandomInt(5);
	// get a cvasi-random time(in miliseconds) for our cat to start blinking ; multiple of 1110 for animation to complete smoothly, takes around 1110ms for cat to blink once

	// Execute changeState recursively, each time with a new random naturalTime
    var changeState = function() {
    	var eyes = document.getElementById('cat-eyes');
     	console.log('Cat was last in state: salut ', eyes.src);
      eyes.src = eyes.src === "https://apetrisor1.github.io/Portfolio/root/assets/images/cat-eyes-still.png" ? "https://apetrisor1.github.io/Portfolio/root/assets/images/cat-eyes-gif.gif" : "https://apetrisor1.github.io/Portfolio/root/assets/images/cat-eyes-still.png";
    	naturalTime = 1110*getRandomInt(5);
		setTimeout(changeState, naturalTime);
	}
  	setTimeout(changeState, naturalTime);

  }
