const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

let numWrong = 0;

// Loop over the chars in `word` and create divs.
//

const createDivsForChars = (word) => {
  const wordContainer = document.querySelector('#word-container');
  for (const letter of word) {
    wordContainer.insertAdjacentHTML('beforeend', `<div class="letter-box ${letter}"></div>`);
  }
};

// Loop over each letter in `ALPHABET` and generate buttons.
//
const generateLetterButtons = () => {
  const letterButtonContainer = document.querySelector('#letter-buttons');
  for (const char of ALPHABET) {
    letterButtonContainer.insertAdjacentHTML('beforeend', `<button>${char}</button>`);
  }
};

// Set the `disabled` property of `buttonEl` to `true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = (buttonEl) => {
  buttonEl.disabled = true;
};

// Return `true` if `letter` is in the word.
//
const isLetterInWord = (letter) => document.querySelector(`div.${letter}`) !== null;

// Called when `letter` is in word. Update contents of divs with `letter`.
//
const handleCorrectGuess = (letter) => {
  // Replace this with your code
  // console.log('letter: ', letter);
  //display correct letter in blank 

  //select all divs with given letter 
  my_letters = document.querySelectorAll(`div.${letter}`)
  // console.log('my_letters: ', my_letters);


  // console.log('My letter1: ', my_letters[0].innerHTML);
  // console.log('My letter2: ', my_letters[1].innerHTML);

  //update divs to contain letter
  // my_letters[0].innerHTML = letter;
  // my_letters[1].innerHTML = letter;

  for (my_letter of my_letters) {
    my_letter.innerHTML = letter;
  }
};

//
// Called when `letter` is not in word.
//
// Increment `numWrong` and update the shark image.
// If the shark gets the person (5 wrong guesses), disable
// all buttons and show the "play again" message.

const handleWrongGuess = () => {
  numWrong += 1;
  // Replace this with your code
    //set image equal guess[i]

  let sharkPhoto = document.querySelector('img');

  sharkPhoto.setAttribute('src', `/static/images/guess${numWrong}.png` );

  
    //set to img001 ${numWrong}
  if (numWrong === 5) {
    //disable all buttons
    for (const button of document.querySelectorAll('button')) {
      disableLetterButton(button);
    }
    //show play again button 
    document.querySelector('#play-again').style.display = '';

  }
  //if numWrong is 5 or more 
    //display play again button
};

//  Reset game state. Called before restarting the game.
const resetGame = () => {
  window.location = '/sharkwords';
};

// This is like if __name__ == '__main__' in Python
//
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess.
  const word = 'bottle';

  createDivsForChars(word);
  generateLetterButtons();

  console.log(document.querySelectorAll('button'));

  for (const button of document.querySelectorAll('button')) {
    button.addEventListener('click', () => {
      const letter = button.innerHTML;
      console.log(letter);
      
      //disable button
      disableLetterButton(button);

      if (isLetterInWord(letter) === true) {
        handleCorrectGuess(letter);
      } else {
        handleWrongGuess(letter);
      }
      
     //if button is in word
      // handleCorrectguess(letter)
    // else
      //handleWrongGuess(letter)


    });
    // add an event handler to handle clicking on a letter button
    // YOUR CODE HERE
    

    //if button is in word
      // handleCorrectguess(letter)
    // else
      //handleWrongGuess(letter)
  }

  // add an event handler to handle clicking on the Play Again button
  // YOUR CODE HERE
  playAgainButton = document.querySelector('#play-again');
  playAgainButton.addEventListener('click', () => {
    resetGame();
  });
})();