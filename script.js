// Define the questions and related questions
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
let isExploring = false;

// Get DOM elements
const welcomeSection = document.getElementById("welcome");
const questionSection = document.getElementById("question-section");
const questionText = document.getElementById("question");
const nextQuestionBtn = document.getElementById("next-question-btn");
const exploreBtn = document.getElementById("explore-btn");
const message = document.getElementById("message");

const quickStartBtn = document.getElementById("quick-start-btn");
const chooseThemeBtn = document.getElementById("choose-theme-btn");

// Event listeners
quickStartBtn.addEventListener("click", startQuickStart);
nextQuestionBtn.addEventListener("click", nextQuestion);
exploreBtn.addEventListener("click", exploreMore);

function startQuickStart() {
    // Hide welcome section and show question section
    welcomeSection.style.display = "none";
    questionSection.style.display = "block";
    displayQuestion();
}

function displayQuestion() {
    // If exploring, show the related question, otherwise show the main question
    if (isExploring) {
        questionText.textContent = questions[currentQuestionIndex].relatedQuestions[currentRelatedQuestionIndex];
        currentRelatedQuestionIndex++;
    } else {
        questionText.textContent = questions[currentQuestionIndex].question;
        currentRelatedQuestionIndex = 0; // Reset related question index
    }

    // Show 'Explore This More' button if there are more related questions
    if (currentRelatedQuestionIndex < questions[currentQuestionIndex].relatedQuestions.length) {
        exploreBtn.style.display = "inline-block";
    } else {
        exploreBtn.style.display = "none";
    }

    // Show 'Next Question' button
    nextQuestionBtn.style.display = "inline-block";
    message.style.display = "none"; // Hide message if showing a new question
}

function nextQuestion() {
    // If we are in exploration mode, reset exploration
    if (isExploring) {
        isExploring = false;
        currentRelatedQuestionIndex = 0;
    }

    // If we've reached the end of the questions
    if (currentQuestionIndex >= questions.length - 1) {
        currentQuestionIndex = 0; // Reset to the first question
        message.style.display = "none"; // Hide the end message
    } else {
        currentQuestionIndex++;
    }

    // Display the next question
    displayQuestion();

    // Hide the "Next Question" button if there are no more questions to display
    if (currentQuestionIndex >= questions.length - 1) {
        nextQuestionBtn.style.display = "none"; // Hide the button at the end of the list
    }
}



function exploreMore() {
    // If there are more related questions, show the next related question
    if (currentRelatedQuestionIndex < questions[currentQuestionIndex].relatedQuestions.length) {
        isExploring = true;
        displayQuestion();
    } else {
        // No related questions left, show a message
        message.textContent = "No more related questions. Please choose 'Next Question' to start again.";
        message.style.display = "inline-block";
        exploreBtn.style.display = "none"; // Hide 'Explore' button when no related questions are left
    }
}
