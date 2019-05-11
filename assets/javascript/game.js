
 var computerGuesses = ["a","b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"]
 
 $(document).keypress(function(event){
    // console.log("THIS IS STUPID: ", String.fromCharCode (event.which)); 
    var userGuess = String.fromCharCode (event.which);
   
    // console.log(userGuess);
    document.getElementById("user-text").innerHTML =  userGuess;
    var compGuess = computerGuesses[Math.floor(Math.random() *computerGuesses.length)];
    // console.log(compGuess);
    document.getElementById("comp-text").innerHTML = compGuess;
    winsAndLosses()
});


    function winsAndLosses(){
        var WinCounter = 0;
        var lossCounter= 0;
       
       for (var i = 0;  i < computerGuesses.length; i++)   {
         if (userGuess == computerGuesses.indexOf[i]){
                   
                    // console.log("You guessed the same! you win!");
                    WinCounter += 1;
                 
            
                    
                
                   } else {
                    console.log("Hellow", computerGuesses[i], userGuess);
                   
                    lossCounter += 1;
                  //   console.log(lossCounter);
                   }
                }

    }
 
   
           

    
       


    
  
       

    // var computerGuesses = ["a","b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t", "u", "v", "w", "x", "y", "z"]
    



    
    // document.onkeyup = function (event) {
    //     var WinCounter = 0;
    //     var lossCounter= 0;
    //     var userGuess = event.key;
    //     console.log("You Guessed : " , userGuess);
    //     document.getElementById("user-text").innerHTML =  userGuess;
    
    //     var compGuess = computerGuesses[Math.floor(Math.random() *computerGuesses.length)];
    //     console.log("Computer Guessed " ,compGuess);
    //     document.getElementById("comp-text").innerHTML = compGuess;
      
    //    for(var i = 0; i < compGuess.length; i++) {
    //     if (userGuess == computerGuesses){
           
    //         console.log("You guessed the same! you win!");
    //         WinCounter += WinCounter;
    //         console.log(WinCounter);
    
            
        
    //        } else {
    //         console.log("Your Guess doesn't match! you loose!");
    //         lossCounter = lossCounter + 1;
    //         console.log(lossCounter);
    //        }
    //    }

      
       
       