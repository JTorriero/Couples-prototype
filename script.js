const questions = [
    {
        question: "How do you feel about sharing finances in a marriage?",
        related: [
            "What are your thoughts on budgeting together as a couple?",
            "How do you feel about separate or joint bank accounts?",
            "What does financial independence mean to you in a relationship?"
        ]
    },
    {
        question: "What’s your opinion on how we divide household chores?",
        related: [
            "How can we improve our sharing of responsibilities?",
            "Do you think dividing chores by skill or preference works better?",
            "How do you feel about a chore schedule or list?"
        ]
    },
    // Add more questions here
];

let currentQuestionIndex = -1; // This will track the current question being shown.
let relatedQuestions = []; // This will track the related questions for the current question.
let relatedIndex = 0; // This will track the current related question index.

document.getElementById('quickStartButton').addEventListener('click', startQuickStart);

function startQuickStart() {
    currentQuestionIndex = getRandomQuestionIndex();
    displayQuestion(questions[currentQuestionIndex].question);
    relatedQuestions = questions[currentQuestionIndex].related.slice(); // Copy related questions
    relatedIndex = 0; // Reset related question index
}

function displayQuestion(questionText) {
    document.getElementById('questionDisplay').textContent = questionText;
    showExploreButton();
}

function showExploreButton() {
    const exploreButton = document.createElement('button');
    exploreButton.id = 'exploreMoreButton';
    exploreButton.textContent = 'Explore This More';
    exploreButton.addEventListener('click', exploreMore);
    document.body.appendChild(exploreButton);
    
    const nextButton = document.createElement('button');
    nextButton.id = 'nextQuestionButton';
    nextButton.textContent = 'Next Question';
    nextButton.addEventListener('click', nextQuestion);
    document.body.appendChild(nextButton);
}

function exploreMore() {
    if (relatedIndex < relatedQuestions.length) {
        displayQuestion(relatedQuestions[relatedIndex]);
        relatedIndex++;
    } else {
        alert("No related questions available. Please choose a new question.");
    }
}

function nextQuestion() {
    currentQuestionIndex = getRandomQuestionIndex();
    displayQuestion(questions[currentQuestionIndex].question);
    relatedQuestions = questions[currentQuestionIndex].related.slice(); // Reset related questions
    relatedIndex = 0;
}

function getRandomQuestionIndex() {
    return Math.floor(Math.random() * questions.length);
}
