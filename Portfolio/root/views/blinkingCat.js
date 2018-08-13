  // Return a random integer between 0 and max, not including max.
  function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
  }


// Makes cat blink
function blinkingCat(){
	// var isBlinking = false;
	// State of cat, starts by not blinking
	var naturalTime = 3350*getRandomInt(3);
	// get a random time(in miliseconds) for our cat to start blinking
    let cat = setInterval(changeState,naturalTime);

    function changeState(){
      var eyes = document.getElementById('cat-eyes');
      console.log(eyes.src);
      eyes.src = eyes.src === "file:///C:/Workspace/personalCV/Master/Portfolio/root/assets/images/cat-eyes-still.png" ? "file:///C:/Workspace/personalCV/Master/Portfolio/root/assets/images/cat-eyes-gif.gif" : "file:///C:/Workspace/personalCV/Master/Portfolio/root/assets/images/cat-eyes-still.png";
  	}



      // if(isBlinking == false){
      // 	eyes.setAttribute('src',"../assets/images/cat-eyes-gif.gif");
      // 	isBlinking = true;
      // }
      // else{
      // 	eyes.setAttribute('src',"../assets/images/cat-eyes-still.png");
      // 	isBlinking = false;
      // }
    // }
  }

// function setDeceleratingTimeout(callback, factor, times)
// {
//     var internalCallback = function(tick, counter) {
//         return function() {
//             if (--tick >= 0) {
//                 window.setTimeout(internalCallback, ++counter * factor);
//                 callback();
//             }
//         }
//     }(times, 0);

//     window.setTimeout(internalCallback, factor);
// };

// // console.log() requires firebug    
// setDeceleratingTimeout(function(){ console.log('hi'); }, 10, 10);
// setDeceleratingTimeout(function(){ console.log('bye'); }, 100, 10);
