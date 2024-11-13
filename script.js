const questions = [
    {
        question: "What’s your opinion on how we divide household chores?",
        relatedQuestions: [
            "How do you feel about sharing responsibilities in the home?",
            "What’s your approach to organizing tasks at home?",
            "How do you prioritize tasks around the house?",
            "What are your thoughts on how chores affect our relationship?",
            "What’s your opinion on sharing home maintenance duties?"
        ]
    },
    {
        question: "How do you feel about sharing finances in a marriage?",
        relatedQuestions: [
            "How do you feel about managing a joint bank account?",
            "What’s your view on budgeting as a couple?",
            "How do you handle financial goals together?",
            "How do you approach saving for future plans?",
            "What’s your opinion on discussing money regularly?"
        ]
    },
    {
        question: "What are your thoughts on raising children?",
        relatedQuestions: [
            "What’s your approach to discipline?",
            "How do you feel about educating children together?",
            "What’s your view on work-life balance while raising kids?",
            "How do you plan for your child’s future?",
            "What’s your opinion on managing family schedules?"
        ]
    }
    // Add more questions here
];

let currentQuestionIndex = 0;
let relatedQuestionIndex = 0;
let displayedRelatedQuestions = [];

document.getElementById("quickStartButton").addEventListener("click", startQuickStart);
document.getElementById("nextQuestionButton").addEventListener("click", nextQuestion);
document.getElementById("exploreMoreButton").addEventListener("click", exploreMore);

function startQuickStart() {
    document.getElementById("startPage").style.display = "none";
    document.getElementById("questionPage").style.display = "block";
    displayQuestion();
}

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("questionDisplay").textContent = currentQuestion.question;
    relatedQuestionIndex = 0; // Reset related questions for new main question
    displayedRelatedQuestions = []; // Clear displayed related questions
}

function nextQuestion() {
    // Move to next question, cycling back to the first question after the last
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    displayQuestion();
}

function exploreMore() {
    const currentQuestion = questions[currentQuestionIndex];
    if (relatedQuestionIndex < currentQuestion.relatedQuestions.length) {
        const nextRelatedQuestion = currentQuestion.relatedQuestions[relatedQuestionIndex];
        
        // Check if it's already been displayed
        if (displayedRelatedQuestions.includes(nextRelatedQuestion)) {
            alert("No more related questions available.");
            return;
        }
        
        // Show the related question
        displayedRelatedQuestions.push(nextRelatedQuestion);
        relatedQuestionIndex++;
        document.getElementById("questionDisplay").textContent = nextRelatedQuestion;
    } else {
        alert("No more related questions available.");
    }
}
