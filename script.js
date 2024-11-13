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
let hasMoreRelatedQuestions = true;

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

// Display current question or related question
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
        hasMoreRelatedQuestions = true; // Reset related questions
    }

    // If we've run out of questions, show message and restart button
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        message.style.display = "none"; // Hide message
        nextQuestionBtn.style.display = "inline-block"; // Show Next Question button
        exploreBtn.style.display = "inline-block"; // Show Explore button
    } else {
        // No more main questions, show message to restart
        message.textContent = "No more questions available. Please choose 'Next Question' to start again.";
        message.style.display = "inline-block";
        nextQuestionBtn.style.display = "inline-block";
        exploreBtn.style.display = "none"; // Hide Explore button after all questions
    }
}

// Explore related questions
function exploreMore() {
    isExploring = true;

    if (currentRelatedQuestionIndex < questions[currentQuestionIndex].related.length) {
        // Show related question
        questionText.textContent = questions[currentQuestionIndex].related[currentRelatedQuestionIndex];
        currentRelatedQuestionIndex++;
        message.style.display = "none"; // Hide message
    } else {
        // No more related questions
        message.textContent = "No more related questions. Please choose 'Next Question' to start again.";
        message.style.display = "inline-block";
        nextQuestionBtn.style.display = "inline-block";
        exploreBtn.style.display = "none"; // Hide Explore button after all related questions
        hasMoreRelatedQuestions = false; // Reset this flag
    }
}

// Reset to first question when the "Next Question" button is clicked at the end
nextQuestionBtn.addEventListener('click', () => {
    if (message.textContent === "No more questions available. Please choose 'Next Question' to start again.") {
        currentQuestionIndex = 0;  // Reset to the first question
        currentRelatedQuestionIndex = 0;  // Reset related questions
        hasMoreRelatedQuestions = true;
        displayQuestion();
        message.style.display = "none";
        nextQuestionBtn.style.display = "inline-block";
        exploreBtn.style.display = "inline-block";
    }
});
