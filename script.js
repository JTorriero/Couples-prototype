document.getElementById('quick-start-btn').addEventListener('click', function() {
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('question-section').style.display = 'block';
    displayNextQuestion();
});

const questions = [
    'What’s your opinion on how we divide household chores?',
    'How do you feel about sharing finances in a marriage?',
    'What are your thoughts on parenting styles?',
    'How do you feel about spending time with extended family?',
    'What’s your idea of a perfect weekend together?',
    'What’s one thing you’ve always wanted to try together?',
    'How do you handle conflict in a relationship?',
    'What role does communication play in your relationship?',
    'What’s the most meaningful memory we’ve shared?',
    'How do you feel about taking time for yourself in a relationship?'
];

let currentQuestionIndex = 0;

function displayNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById('question').textContent = questions[currentQuestionIndex];
        currentQuestionIndex++;
    } else {
        document.getElementById('question').textContent = "No more questions. Please choose 'Next Question' to start again.";
    }
}

document.getElementById('next-question-btn').addEventListener('click', displayNextQuestion);
