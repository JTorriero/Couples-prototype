// Define questions with related questions
const questions = [
    { question: "Question 1", related: ["Related Question 1", "Related Question 2"] },
    { question: "Question 2", related: ["Related Question 1", "Related Question 2"] },
    { question: "Question 3", related: ["Related Question 1", "Related Question 2"] }
];

// Variables to track state
let currentQuestionIndex = 0;
let currentRelatedQuestionIndex = 0;
let isExploring = false;

// Elements
const questionText = document.getElementById('question');
const message = document.getElementById('message');
const nextQuestionBtn = document.getElementById('next-question-btn');
const exploreBtn = document.getElementById('explore-btn');

// Start quick start function
document.getElementById('quick-start-btn').addEventListener('click', () => {
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('question-section').style.display = 'block';
    displayQuestion();
});

// Display current question
function displayQuestion() {
    if (isExploring) {
        questionText.textContent = questions[currentQuestionIndex].related[currentRelatedQuestionIndex];
    } else {
        questionText.textContent = questions[currentQuestionIndex].question;
    }
}

// Handle "Next Question"
nextQuestionBtn.addEventListener('click', nextQuestion);

// Handle "Explore This More"
exploreBtn.addEventListener('click', exploreMore);

// Show next question or restart flow
function nextQuestion() {
    // Reset exploration state
    if (isExploring) {
        isExploring = false;
        currentRelatedQuestionIndex = 0;
    }

    // If we're out of questions, reset to the first question
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        // No more questions, show message and restart button
        message.textContent = "No more questions available. Please choose 'Next Question' to start again.";
        message.style.display = "inline-block";
        nextQuestionBtn.style.display = "inline-block";
        exploreBtn.style.display = "none";
    }
}

// Explore related questions
function exploreMore() {
    isExploring = true;
    if (currentRelatedQuestionIndex < questions[currentQuestionIndex].related.length - 1) {
        currentRelatedQuestionIndex++;
        displayQuestion();
    } else {
        message.textContent = "No more related questions. Please choose 'Next Question' to start again.";
        message.style.display = "inline-block";
        nextQuestionBtn.style.display = "inline-block";
        exploreBtn.style.display = "none";
    }
}
