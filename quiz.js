function checkAnswer() {
  // Identify the correct answer
  const correctAnswer = "4";

  // Retrieve the user's answer
  const selectedRadio = document.querySelector('input[name="quiz"]:checked');
  const userAnswer = selectedRadio.value;

  // Compare the user's answer with the correct answer
  const feedbackElement = document.getElementById("feedback");
  if (userAnswer === correctAnswer) {
    feedbackElement.textContent = "Correct! Well done.";
  } else {
    feedbackElement.textContent = "That's incorrect. Try again!";
  }
}

// Add an event listener to the Submit button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
