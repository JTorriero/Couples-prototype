// Question data (modify to fit your list)
const questions = [
    {
        question: "What’s your opinion on how we divide household chores?",
        related: ["How do you feel about sharing finances in a marriage?", "What do you think is the best way to handle household responsibilities?"]
    },
    {
        question: "How do you feel about sharing finances in a marriage?",
        related: ["What do you think is the best way to handle household responsibilities?", "What would make you feel more secure in a relationship financially?"]
    },
    // Add more questions and related questions as needed
];

let currentQuestion = null;
let relatedQuestions = [];
let currentRelatedIndex = 0;

const welcomeSection = document.getElementById("welcome");
const questionSection = document.getElementById("question-section");
const nextQuestionBtn = document.getElementById("next-question-btn");
const exploreBtn = document.getElementById("explore-btn");
const messageDiv = document.getElementById("message");
const quickStartBtn = document.getElementById("quick-start-btn");

const chooseThemeBtn = document.getElementById("choose-theme-btn");
const questionDisplay = document.getElementById("question");

// Event listener for Quick Start button
quickStartBtn.addEventListener("click", () => {
    welcomeSection.style.display = "none";
    questionSection.style.display = "block";
    loadNextQuestion();
});

// Load next random question
function loadNextQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[randomIndex];
    relatedQuestions = [...currentQuestion.related];
    currentRelatedIndex = 0;
    questionDisplay.textContent = currentQuestion.question;
    messageDiv.style.display = "none";
}

// Event listener for Next Question button
nextQuestionBtn.addEventListener("click", () => {
    loadNextQuestion();
});

// Event listener for Explore This More button
exploreBtn.addEventListener("click", () => {
    if (currentRelatedIndex < relatedQuestions.length) {
        questionDisplay.textContent = relatedQuestions[currentRelatedIndex];
        currentRelatedIndex++;
    } else {
        messageDiv.textContent = "All related questions have been explored. Please choose a new question.";
        messageDiv.style.display = "block";
    }
});
