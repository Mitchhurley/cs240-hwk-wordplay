var sixes = dictionary.filter(word => word.length == 6) //grabs all the elements in the array that 

var baseword = sixes[Math.floor(Math.random() * sixes.length)] //picks a random word from list of six letter ones

var lettersinroot = [...baseword] //make an array with each character in root word
console.log(lettersinroot)
var possible = dictionary.filter(word => word.length <= 6 && word.length >= 3)  // makes the list of all my possible guesses

var guesses = possible.filter(  //trying to build list of valid words
    function(word){
        for (let i = 0; i < word.length; i++){   //goes through all the letters in word
            var lettersinroot = [...baseword]   //remakes the array cause the letters get spliced away
            if (lettersinroot.includes(word.charAt(i))){    //checks to see if the first letter of the word is a valid one
                lettersinroot.splice(lettersinroot.indexOf(word[i]),1) //if it is, the letter is removed and the process repeats
            } else return false; //otherwise return that the word is bad
        }
        return true; //if the word makes it here then it follows the rules
    }

)
function checkGuess(guess){
    if (possible.indexOf(guess) != -1){ //TODO figure out how to .includes array
        return true
    } else return false
}
function buildWords(){
    //TODO DO THING
    
}
/* Start looping guesses



*/