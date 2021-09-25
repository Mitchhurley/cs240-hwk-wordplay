var sixes = dictionary.filter(word => word.length == 6) //grabs all the elements in the array that 

var baseword = sixes[Math.floor(Math.random() * sixes.length)] //picks a random word from list of six letter ones

var lettersinroot = [...baseword] //make an array with each character in root word
console.log(lettersinroot)
var possible = dictionary.filter(word => word.length <= 6)  // makes the list of all my possible guesses

var guesses = possible.filter(  //trying to build list of valid words
    function(word){
        for (let i = 0; i < word.length; i++){   //goes through all the letters in word
            var lettersinroot = [...baseword]   //remakes the array cause the letters get spliced away
            if (lettersinroot.includes(word.charAt(i))){
                lettersinroot.splice(lettersinroot.indexOf(word[i]),1)
            } else return false;
        }
        return true;
    }

)