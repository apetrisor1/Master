  // Return a random integer between 0 and max, not including max.
  function getRandomInt(max) {
  	var result = Math.floor(Math.random() * Math.floor(max));
  	if(result != 0){
  		return result;
  	}else{return result+1;} 
  }


// Makes cat blink
function blinkingCat(){

   	var naturalTime = 1120*getRandomInt(6);
	// get a cvasi-random time(in miliseconds) for our cat to start blinking ; multiple of 3350 for animation to complete smoothly, takes around 3350ms for cat to blink 3 times

	// Execute changeState recursively, each time with a new random naturalTime
    var changeState = function() {
      	var eyes = document.getElementById('cat-eyes');
     	console.log('Cat was last in state: ', eyes.src);
      	eyes.src = eyes.src === "file:///C:/Workspace/personalCV/Master/Portfolio/root/assets/images/cat-eyes-still.png" ? "file:///C:/Workspace/personalCV/Master/Portfolio/root/assets/images/cat-eyes-gif.gif" : "file:///C:/Workspace/personalCV/Master/Portfolio/root/assets/images/cat-eyes-still.png";
      	naturalTime = 1120*getRandomInt(6);
		setTimeout(changeState, naturalTime);
	}
  	setTimeout(changeState, naturalTime);

  }
