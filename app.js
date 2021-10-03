var sixes = dictionary.filter((word) => word.length == 6); //grabs all the elements in the array that

var baseword = sixes[Math.floor(Math.random() * sixes.length)]; //picks a random word from list of six letter ones

var lettersinroot = [...baseword]; //make an array with each character in root word

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
        lettersinroot.splice((lettersinroot.indexOf(word.charAt[i])), 1); //if it is, the letter is removed and the process repeats
      } else return false; //otherwise return that the word is bad
    }
    return true; //if the word makes it here then it follows the rules
  }
);

var foundWords = []; // initialize empty array to keep track of guessed variables
for (let i = 0; i < guesses.length; i++) { //sets all guesses to false
  foundWords[i] = false;
}
shuffle(lettersinroot)
printWords();
let done = false
do{
   var input = prompt("Gimme guess");
   if (input == "*") {shuffle(lettersinroot);printWords();}
   else if (input == null) done = true;
   else{checkGuess(input)}
   
}while (!done && !foundWords.every(Boolean)) //null input or all words being guessed ends the loop   
//congratulate user if they got all the words
console.clear();
if (foundWords.every(Boolean)) console.log(`Wow! You found every word you can make from ${baseword}! Thats ${foundWords.length} different words!`)
//TODO reveal answers and print out guessed words
let numbo = countguessed(foundWords)
for (let i = 0; i < guesses.length; i++) { //prints the words
    console.log(guesses[i]);
  }

console.log(`Of ${foundWords.length} possible words, you guessed ${numbo} of them.`)




//method that takes a guess and checks it, then changes the corresponding bool and reprints words
function checkGuess(guess) {
  if (guesses.includes(guess) && !foundWords[guesses.indexOf(guess)]) {
    foundWords[guesses.indexOf(guess)] = true;
    printWords();
    alert(`Correct! ${guess} is in the list! Can you think of any others?`);
    //TODO alert user based on input
  } else if (guess.length > 6) alert(`You can't spell ${guess} with the letter I gave you... but nice try!`)
  else if (guess.length < 3) alert(`At least use three letters, come on... ${guess} is a little too easy`)
  else if (foundWords[guesses.indexOf(guess)]) alert("You already got that one")
  
  
  
  return false;
}

//function that handles the console output of words
function printWords() {
  console.clear(); //empties what is in the current console
  console.log(lettersinroot)
  for (let i = 0; i < guesses.length; i++) {
    //goes through entire array of words
    if (foundWords[i] == true) {
      console.log(guesses[i].toString());
    } //guessed word case
    else {
      let str = "";
      for (let j = 0; j < guesses[i].length; j++) {
        // non guessed words get a dash for each letter
        str = str.concat("-");
      }
      console.log(str);
    }
  }
}
function shuffle(array) {
  let empty = []; //initialize empty auxillary array
  array.forEach((element) => {
    //giving each element in the old array a new location
    let newloc = Math.floor(Math.random() * array.length); //gives a random index in range
    while (empty[newloc] != undefined) {
      //makes sure the space is unoccupied
      newloc++; //increments by one in an attempt to find an unoccupied space
      if (newloc >= array.length) newloc = 0; //if we have reached the end by going through, loop to start
    }
    empty[newloc] = element; //insert element to new position
  });
  for (let i = 0; i < array.length; i++) array[i] = empty[i];
}
//funtion that finds how many words were guessed
function countguessed(array){
    let i = array.filter(Boolean)
    return i.length;
}
