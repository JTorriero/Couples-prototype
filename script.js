const questions = {
  "conversation-starters": [
    "What's one thing you've always wanted to try together?",
    "What’s a small gesture that makes you feel loved?",
    "If you could go anywhere for a weekend getaway, where would it be?"
  ],
  "storytelling": [
    "Tell me about a moment when you felt really proud of me.",
    "What’s a funny memory from our first year together?",
    "What’s the most adventurous thing you’ve ever done?"
  ],
  "debate": [
    "How do you feel about sharing finances in a marriage?",
    "What’s your opinion on how we divide household chores?",
    "Do you think couples should have separate hobbies or shared ones?"
  ]
};

function startQuickStart() {
  document.getElementById("quick-start").style.display = "none";
  document.getElementById("game-area").style.display = "block";
  showNextQuestion();
}

function showNextQuestion() {
  const categories = Object.keys(questions);
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const randomQuestion = questions[randomCategory][Math.floor(Math.random() * questions[randomCategory].length)];
  document.getElementById("question-text").textContent = randomQuestion;
}

function changeTheme() {
  const newCategory = prompt("Enter a new theme (conversation-starters, storytelling, debate):");
  if (questions[newCategory]) {
    document.getElementById("question-text").textContent = questions[newCategory][Math.floor(Math.random() * questions[newCategory].length)];
  } else {
    alert("Invalid category.");
  }
}

function exploreMore() {
  document.getElementById("question-text").textContent += " (Explore this more!)";
}

function showFeedbackForm() {
  document.getElementById("feedback-modal").style.display = "block";
}

function submitFeedback() {
  const feedback = document.getElementById("feedback-text").value;
  alert("Thank you for your feedback: " + feedback);
  document.getElementById("feedback-modal").style.display = "none";
}

function closeFeedbackForm() {
  document.getElementById("feedback-modal").style.display = "none";
}
