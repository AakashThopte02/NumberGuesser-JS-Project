let min = 1,
  max = 10,
  winningNumber = generateRandom(),
  totalGuesses = 3;
//Function to generate random number
function generateRandom() {
  randNum = Math.round(Math.random() * 10);
  return randNum;
}
console.log(winningNumber);
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min_num"),
  maxNum = document.querySelector(".max_num"),
  guessInput = document.querySelector("#guess-input"),
  guessBtn = document.querySelector("#guess-btn"),
  resultMsg = document.querySelector(".message");

//event listener for play again
game.addEventListener("mousedown", (e) => {
  if (e.target.className == "play-again") {
    window.location.reload();
  }
});
//set min and max range
(minNum.textContent = 1), (maxNum.textContent = 10);
console.log(winningNumber);
//add event listeners
guessBtn.addEventListener("click", function () {
  let userInput = parseInt(guessInput.value);
  console.log(userInput);
  if (isNaN(userInput) || userInput < 1 || userInput > 10) {
    setMessage(`Please enter number within a given range..!!`, "red");
    setTimeout(() => {
      // resultMsg.style.display = "none";
      setMessage(`Guess is not correct, ${totalGuesses} guesses left`, "red");
      guessInput.value = "";
    }, 2000);
  } else if (userInput === winningNumber) {
    // gameOver(true, `${winningNumber} is correct, YOU WIN..!!`);
    guessInput.disabled = true;
    guessInput.style.border = "3px solid green";
    resultMsg.style.color = "green";
    resultMsg.style.textShadow = "none";
    resultMsg.style.fontWeight = "bolder";
    setMessage(`${winningNumber} is correct. You WON.`, "green");
    guessBtn.value = "Play Again";
    guessBtn.className = "play-again";
  } else {
    totalGuesses -= 1;
    if (totalGuesses >= 0) {
      if (totalGuesses == 0) {
        guessInput.disabled = true;
        guessInput.style.border = "3px solid red";
        setMessage(`${winningNumber} was correct guess, YOU LOSE`, "red");
        // gameOver(
        //   false,
        //   `GAME OVER.....YOU LOST, the correct guess was ${winningNumber}`
        // );
        resultMsg.style.color = "red";
        resultMsg.style.textShadow = "none";
        resultMsg.style.fontWeight = "bolder";
        guessBtn.value = "Play Again";
        guessBtn.className = "play-again";
      } else {
        setMessage(`Guess is not correct, ${totalGuesses} guesses left`, "red");
        //clear input
        guessInput.value = "";
      }
    }
  }
});

function setMessage(msg, color) {
  resultMsg.textContent = msg;
  resultMsg.style.color = color;
}
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  //Disable Input
  guessInput.disabled = true;
  //Change border if won
  guessInput.style.border = `3px solid ${color}`;
  //set message
  setMessage(msg, color);
  //play again
  guessBtn.value = "Play Again";
  guessBtn.className = "play-again";
}
