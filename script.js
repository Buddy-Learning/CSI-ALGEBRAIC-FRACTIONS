const problems = [
  {
    question: "\\[\\frac{x+2}{x-3} + \\frac{2x-1}{x^2-9}\\]",
    answer: "(x + 2)(x + 3) / (x - 3)(x + 3)",
    clue: "The treasure is hidden where the 'Sun' sets."
  },
  {
    question: "\\[\\frac{3x+4}{x^2-4} - \\frac{2x-1}{x+2}\\]",
    answer: "(x + 3) / (x - 2)",
    clue: "Look under the old oak tree near the river."
  },
  {
    question: "\\[\\frac{2x}{x^2+x-6} + \\frac{x+1}{x-2}\\]",
    answer: "(2x + 3) / (x - 2)",
    clue: "Your final destination is behind the clock tower."
  }
];

let currentQuestion = 0;

function loadQuestion() {
  const question = problems[currentQuestion];
  document.getElementById("math-problem").innerHTML = question.question;
  document.getElementById("current-question").textContent = currentQuestion + 1;
  document.getElementById("progress").style.width = `${((currentQuestion + 1) / problems.length) * 100}%`;
}

document.getElementById("submit").addEventListener("click", function () {
  const answer = document.getElementById("answer").value.trim();
  const clueDiv = document.getElementById("clue");
  const storyDiv = document.getElementById("story");

  if (answer === problems[currentQuestion].answer) {
    clueDiv.innerHTML = `<p>Correct! Clue: ${problems[currentQuestion].clue}</p>`;
    currentQuestion++;

    if (currentQuestion < problems.length) {
      storyDiv.innerHTML = `<p>Great! Here's your next algebraic mystery:</p>`;
      loadQuestion();
    } else {
      storyDiv.innerHTML = `<p>Congratulations! You've solved all the mysteries and found the treasure! 🎉</p>`;
      document.getElementById("question").style.display = "none";
    }
  } else {
    clueDiv.innerHTML = `<p>Incorrect! Try again. Remember to factorize and simplify properly.</p>`;
  }
});

// Initialize the first question
loadQuestion();
