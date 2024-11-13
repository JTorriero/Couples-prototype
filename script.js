document.getElementById('quick-start-btn').addEventListener('click', function() {
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('question-section').style.display = 'block';
    displayNextQuestion();
});

let questions = [
    "What’s your opinion on how we divide household chores?",
    "How do you feel about sharing finances in a marriage?",
    "What’s your idea of a perfect vacation together?",
    "How do you handle conflicts in a relationship?",
    "What values are most important to you in a relationship?"
];

let currentQuestionIndex = 0;

function displayNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById('question').textContent = questions[currentQuestionIndex];
        currentQuestionIndex++;
    } else {
        document.getElementById('question').textContent = "No more questions. Please choose 'Next Question' to restart.";
    }
}
