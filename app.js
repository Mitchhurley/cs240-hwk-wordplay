var sixes = dictionary.filter((word) => word.length == 6); //grabs all the elements in the array that

var baseword = sixes[Math.floor(Math.random() * sixes.length)]; //picks a random word from list of six letter ones

var lettersinroot = [...baseword]; //make an array with each character in root word
lettersinroot = lettersinroot.sort((a, b) => 0.5 - Math.random()); //psuedoshuffle

var possible = dictionary.filter(
  (word) => word.length <= 6 && word.length >= 3
); // makes the list of all my possible guesses

var guesses = possible.filter(
  //build list of valid words
  function (word) {
    //function that checks each word
    for (let i = 0; i < word.length; i++) {
      //goes through all the letters in word
      var lettersinroot = [...baseword]; //remakes the array cause the letters get spliced away
      if (lettersinroot.includes(word.charAt(i))) {
        //checks to see if the first letter of the word is a valid one
        lettersinroot.splice(lettersinroot.indexOf(word[i]), 1); //if it is, the letter is removed and the process repeats
      } else return false; //otherwise return that the word is bad
    }
    return true; //if the word makes it here then it follows the rules
  }
);
var guessed = []; //array of size = #of words
function checkGuess(guess) {
  if (possible.includes(guess)) {
    //reveal letters
  } else return false;
}
function buildWords() {
  console.clear();
  function buildGuessed() {}
  function writeWord(word) {
    //write out thang to screen
  }
}
function shuffle(array) {
  let empty = []; //initialize empty auxillary array
  array.forEach((element =>
  {
    //giving each element in the old array a new location
    let newloc = Math.floor(Math.random() * array.length); //gives a random index in range
    while (empty[newloc] != undefined) {
      //makes sure the space is unoccupied
      newloc++; //increments by one in an attempt to find an unoccupied space
      if (newloc >= array.length) newloc = 0; //if we have reached the end by going through, loop to start
    }
    empty[newloc]= element //insert element to new position
  }))
  for (let i = 0; i < array.length;i++)
  array[i] = empty[i]
}
/* Start looping guesses



*/
