// Sample questions array
const questions = [
  "How do you feel about sharing finances in a marriage?",
  "What’s your opinion on how we divide household chores?",
  "Do you think couples should have separate hobbies or shared ones?"
];

// Function to pick a random question from the questions array
function getRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

// Function to display a random question
function displayQuestion() {
  const question = getRandomQuestion();
  document.getElementById("question-text").textContent = question;
}

// Explore the current question more (expand upon it)
function exploreMore() {
  // Retrieve the current question text
  const currentQuestion = document.getElementById("question-text").textContent.trim();
  console.log("Current Question:", currentQuestion);  // Debugging line

  // Define the related questions
  const relatedQuestions = {
    "How do you feel about sharing finances in a marriage?": [
      "What do you think is the best way to manage joint finances?",
      "How do you feel about saving for the future together?"
    ],
    "What’s your opinion on how we divide household chores?": [
      "Do you think there's a fair way to divide chores?",
      "How do you prioritize which chores are more important?"
    ],
    "Do you think couples should have separate hobbies or shared ones?": [
      "How do you balance individual hobbies and shared activities?",
      "Can having separate hobbies make a relationship stronger?"
    ]
  };

  // Check if the current question is in the related questions object
  if (relatedQuestions[currentQuestion]) {
    // Select a random related question
    const randomRelatedQuestion = relatedQuestions[currentQuestion][Math.floor(Math.random() * relatedQuestions[currentQuestion].length)];
    console.log("New Question:", randomRelatedQuestion);  // Debugging line
    document.getElementById("question-text").textContent = randomRelatedQuestion;
  } else {
    // If no related question, show an alert or use a default fallback
    document.getElementById("question-text").textContent = "No related question available.";
  }
}

// Event listeners for the buttons
document.getElementById("next-question").addEventListener("click", displayQuestion);
document.getElementById("explore-more").addEventListener("click", exploreMore);
document.getElementById("change-theme").addEventListener("click", function() {
  // Placeholder for changing theme logic
  alert("Change theme functionality is not implemented yet.");
});

// Initial question display
window.onload = displayQuestion;
