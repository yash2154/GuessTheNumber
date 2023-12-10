let counter = 0;
let randomnumber = Math.floor(Math.random() * 100) + 1;
const inputElement = document.getElementById("inp");
const hintElement = document.getElementById("hint");

document.getElementById("sub").onclick = () => {
  const guess = inputElement.value;

  // Check if the input is a valid number
  if (isNaN(guess)) {
    hintElement.innerText = "Please enter a valid number between 1 and 100.";
    return;
  }
  counter++;
  // Compare the guess with the random number
  if (parseInt(guess) < randomnumber) {
    hintElement.innerText = "Try a bigger number.";
  } else if (parseInt(guess) > randomnumber) {
    hintElement.innerText = "Try a smaller number.";
  } else if (parseInt(guess) === randomnumber) {
    hintElement.innerText = `Congratulations! You guessed the number in ${counter} attempts.`;
    counter = 0;
    randomnumber = Math.floor(Math.random() * 100) + 1;
  }
};
