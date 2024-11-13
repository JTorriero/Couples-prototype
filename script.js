// Questions and related questions
const questions = [
    {
        question: "What’s your opinion on how we divide household chores?",
        relatedQuestions: [
            "How do you feel about splitting responsibilities in the house?",
            "What tasks do you find most challenging when it comes to household chores?",
            "How would you like to balance chores more evenly?"
        ]
    },
    {
        question: "How do you feel about sharing finances in a marriage?",
        relatedQuestions: [
            "What do you think is the best way to handle joint accounts?",
            "How do you feel about one partner being the main breadwinner?",
            "What financial goals do you think are important to work towards together?"
        ]
    },
    {
        question: "How do you prefer to spend quality time together?",
        relatedQuestions: [
            "What’s your idea of a perfect weekend getaway?",
            "How can we make time for each other despite busy schedules?",
            "What activities do you enjoy the most together?"
        ]
    }
];

let currentQuestionIndex = 0;
let currentRelatedQuestionIndex = 0;

// Get DOM elements
const welcomeSection = document.getElementById("welcome");
const questionSection = document.getElementById("question-section");
const questionText = document.getElementById("question");
const nextQuestionBtn = document.getElementById("next-question-btn");
const exploreBtn = document.getElementById("explore-btn");
const message = document.getElementById("message");

const quickStartBtn = document.getElementById("quick-start-btn");
const chooseThemeBtn = document.getElementById("choose-theme-btn");

quickStartBtn.addEventListener("click", startQuickStart);
nextQuestionBtn.addEventListener("click", nextQuestion);
exploreBtn.addEventListener("click", exploreMore);

function startQuickStart() {
    // Hide welcome section and show the question section
    welcomeSection.style.display = "none";
    questionSection.style.display = "block";

    // Display the first question
    displayQuestion();
}

function displayQuestion() {
    // Display the current question
    questionText.textContent = questions[currentQuestionIndex].question;

    // Show the 'Explore This More' button only if there are related questions
    if (questions[currentQuestionIndex].relatedQuestions.length > 0) {
        exploreBtn.style.display = "inline-block";
    } else {
        exploreBtn.style.display = "none";
    }

    // Reset related question index when a new question is displayed
    currentRelatedQuestionIndex = 0;

    // Show the 'Next Question' button
    nextQuestionBtn.style.display = "inline-block";
    message.style.display = "none"; // Hide the message area when a new question is shown
}

function nextQuestion() {
    // If we have more questions, move to the next one
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        // All questions are shown, notify user
  
