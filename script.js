const questions = [
    {
        question: "What’s your opinion on how we divide household chores?",
        relatedQuestions: [
            "How do you feel about sharing finances in a marriage?",
            "What are your thoughts on household responsibilities and fairness?"
        ]
    },
    {
        question: "How do you feel about sharing finances in a marriage?",
        relatedQuestions: [
            "What are your thoughts on budgeting together?",
            "How do you feel about joint bank accounts?"
        ]
    },
    // Add more questions and related questions here
];

let currentQuestionIndex = 0;
let relatedQuestionsIndex = 0;
let currentQuestion = null;

const quickStartBtn = document.getElementById("quickStartBtn");
const chooseThemeBtn = document.getElementById("chooseThemeBtn");
const exploreMoreBtn = document.getElementById("exploreMoreBtn");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");
const currentQuestionElement = document.getElementById("currentQuestion");

quickStartBtn.addEventListener("click", startQuickStart);
nextQuestionBtn.addEventListener("click", nextQuestion);
exploreMoreBtn.addEventListener("click", exploreMore);

function startQuickStart() {
    // Pick a random question
    currentQuestionIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[currentQuestionIndex];
    relatedQuestionsIndex = 0;
    updateQuestionDisplay();
}

function nextQuestion() {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length; // Cycle through the questions
    currentQuestion = questions[currentQuestionIndex];
    relatedQuestionsIndex = 0;
    updateQuestionDisplay();
}

function exploreMore() {
    if (currentQuestion && relatedQuestionsIndex < currentQuestion.relatedQuestions.length) {
        relatedQuestionsIndex++;
        updateQuestionDisplay();
    } else {
        currentQuestionElement.textContent = "No more related questions. Choose a new question.";
    }
}

function updateQuestionDisplay() {
    if (relatedQuestionsIndex === 0) {
        currentQuestionElement.textContent = currentQuestion.question;
    } else {
        currentQuestionElement.textContent = currentQuestion.relatedQuestions[relatedQuestionsIndex - 1];
    }
}
