$(document).ready(function() {
  $("#game-div").hide();
  $("#play-again").hide();
  $("#game-over").hide();
});
 
 
 $(document).on("click", "#start-button" ,function(){
 console.log("AMBREEEEEEN");
//  window.open(<a class="nav-link" href="index.html">About</a>)
$("#game-div").show();
$("#start-button").hide();
});
 
 var computerGuesses = ["a","b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"]
 var WinCounter = 0;
 var lossCounter= 0;
 $(document).keypress(function(event){
    // console.log("THIS IS STUPID: ", String.fromCharCode (event.which)); 
    var userGuess = String.fromCharCode (event.which);
   
    // console.log(userGuess);
    document.getElementById("user-text").innerHTML =  userGuess;
    var compGuess = computerGuesses[Math.floor(Math.random() *computerGuesses.length)];
    // console.log(compGuess);
    document.getElementById("comp-text").innerHTML = compGuess;
  

    if (userGuess == compGuess){
      console.log("Match")
      countWins()
      console.log(WinCounter);
      document.getElementById("user-wins").innerHTML = WinCounter;

    } else {
      console.log("doesn't Match")
  countLosses();
      console.log(lossCounter);
      document.getElementById("user-looses").innerHTML = lossCounter;
      
      setLimit();
    }
});


function countWins() {
WinCounter++;
}
function countLosses() {
  lossCounter++;
  }
   
  function setLimit(){
    if(lossCounter == 10){
  alert("GAME OVER");
  document.getElementById("game-over").style.display = "block";
  document.getElementById("play-again").style.display = "block";
    }
  }


 
function resetGame(){
location.reload();
}

$(document).on("click", "#show-main" ,function(){
  resetGame();
});
       


    
  
       

    
       