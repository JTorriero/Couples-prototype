// Sample question sets for the prototype
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

// Related questions for "Explore This More"
const relatedQuestions = {
  "How do you feel about sharing finances in a marriage?": [
    "What financial goals do you want to achieve together?",
    "How do you think we should handle budgeting as a couple?",
    "Do you think it's important for couples to have a joint account?"
  ],
  "What’s your opinion on how we divide household chores?": [
    "How can we make sure the division of chores feels fair?",
    "What chores do you feel most strongly about?",
    "What tasks do you think we should tackle together as a team?"
  ],
  "Do you think couples should have separate hobbies or shared ones?": [
    "What hobbies do you enjoy that I might not be interested in?",
    "How can we find activities we both enjoy doing together?",
    "Do you think it's healthy for couples to have personal interests outside of their relationship?"
  ],
  "What’s one thing you've always wanted to try together?": [
    "What’s something new we could learn together?",
    "Is there an activity you’ve seen other couples do that you’d like to try?",
    "What would be the ideal date for us to try something new?"
  ],
  "What’s a small gesture that makes you feel loved?": [
    "How do you feel about surprise gifts or gestures?",
    "What’s a thoughtful gesture you’ve received in the past?",
    "What do you think would make you feel more appreciated?"
  ],
  "If you could go anywhere for a weekend getaway, where would it be?": [
    "What destination have you always wanted to visit?",
    "How do you feel about a spontaneous trip?",
    "What kind of activities would you like to do on a getaway?"
  ]
};

// Starting Quick Start Mode
function startQuickStart() {
  document.getElementById("quick-start").style.display = "none";
  document.getElementById("game-area").style.display = "block";
  showNextQuestion();
}

// Show the next question
function showNextQuestion() {
  const categories = Object.keys(questions);
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const randomQuestion = questions[randomCategory][Math.floor(Math.random() * questions[randomCategory].length)];

  document.getElementById("question-text").textContent = randomQuestion;
  currentQuestion = randomQuestion; // Keep track of the current question for future references
}

// Change the theme (i.e., category)
function changeTheme() {
  const newCategory = prompt("Enter a new theme (conversation-starters, storytelling, debate):");
  if (questions[newCategory]) {
    const randomQuestion = questions[newCategory][Math.floor(Math.random() * questions[newCategory].length)];
    document.getElementById("question-text").textContent = randomQuestion;
    currentQuestion = randomQuestion;
  } else {
    alert("Invalid category.");
  }
}

// Explore the current question more (expand upon it)
function exploreMore() {
  const currentQuestionText = currentQuestion;

  if (relatedQuestions[currentQuestionText]) {
    const randomRelatedQuestion = relatedQuestions[currentQuestionText][Math.floor(Math.random() * relatedQuestions[currentQuestionText].length)];
    document.getElementById("question-text").textContent = randomRelatedQuestion;
    currentQuestion = randomRelatedQuestion; // Update the current question
  } else {
    alert("No related question available.");
  }
}

// Show the feedback form
function showFeedbackForm() {
  document.getElementById("feedback-modal").style.display = "block";
}

// Submit feedback
function submitFeedback() {
  const feedback = document.getElementById("feedback-text").value;
  alert("Thank you for your feedback: " + feedback);
  document.getElementById("feedback-modal").style.display = "none";
}

// Close the feedback form
function closeFeedbackForm() {
  document.getElementById("feedback-modal").style.display = "none";
}
