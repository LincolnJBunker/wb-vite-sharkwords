const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function setupGuesses(element, handleGuess) {
  //function setUpGuesses has two parameters: element and handleGuess
  //we are splitting the var alphabet into an array and looping through that array
  alphabet.split('').forEach((letter) => {
    //btn is a var which is being created
    const btn = document.createElement('button');
    //text in the button is = to whatever letter is
    btn.innerText = letter;
    //on click the funtion e runs which runs it back to the handleguess
    btn.addEventListener('click', (e) => handleGuess(e, letter));
    element.append(btn);
  });
}

export default setupGuesses;
