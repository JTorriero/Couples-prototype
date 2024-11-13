// Define questions and their related questions
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
let isExploring = false; // Track if we are exploring related questions

// Get DOM elements
const welcomeSection = document.getElementById("welcome");
const questionSection = document.getElementById("question-section");
const questionText = document.getElementById("question");
const nextQuestionBtn = document.getElementById("next-question-btn");
const exploreBtn = document.getElementById("explore-btn");
const message = document.getElementById("message");

const quickStartBtn = document.getElementById("quick-start-btn");
const chooseThemeBtn = document.getElementById("choose-theme-btn");

// Event Listeners
quickStartBtn.addEventListener("click", startQuickStart);
nextQuestionBtn.addEventListener("click", nextQuestion);
exploreBtn.addEventListener("click", exploreMore);

function startQuickStart() {
    // Show question section, hide welcome section
    welcomeSection.style.display = "none";
    questionSection.style.display = "block";
    displayQuestion();
}

function displayQuestion() {
    // Display current question
    questionText.textContent = questions[currentQuestionIndex].question;

    // Show 'Explore This More' button if there are related questions
    if (questions[currentQuestionIndex].relatedQuestions.length > 0) {
        exploreBtn.style.display = "inline-block";
    } else {
        exploreBtn.style.display = "none";
    }

    // Show 'Next Question' button
    nextQuestionBtn.style.display = "inline-block";
    message.style.display = "none"; // Hide message if showing a new question
}

function nextQuestion() {
    if (isExploring) {
        // If we're exploring, reset the related questions
        isExploring = false;
        currentRelatedQuestionIndex = 0;
    }

    // Check if there are more questions
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        // If no more questions, display the message to the user
        message.textContent = "No more questions available. Please choose 'Next Question' to start again.";
        message.style.display = "inline-block";
        nextQuestionBtn.style.display = "none"; // Hide 'Next Question' button
        exploreBtn.style.display = "none"; // Hide 'Explore' button
    }
}

function exploreMore() {
    // If there are more related questions, show them
    if (currentRelatedQuestionIndex < questions[currentQuestionIndex].relatedQuestions.length) {
        questionText.textContent = questions[currentQuestionIndex].relatedQuestions[currentRelatedQuestionIndex];
        currentRelatedQuestionIndex++;
        isExploring = true;
    } else {
        // If no related questions left, show a message
        message.textContent = "No more related questions. Please choose 'Next Question' to start again.";
        message.style.display = "inline-block";
        exploreBtn.style.display = "none"; // Hide 'Explore' button when no related questions are left
    }
}
