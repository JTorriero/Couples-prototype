const questions = [
    {
        question: "What’s your opinion on how we divide household chores?",
        relatedQuestions: [
            "How do you feel about sharing household responsibilities?",
            "What tasks do you think should be shared equally in a relationship?",
            "Do you think it’s better to assign chores or should they be done spontaneously?",
            "How do you prefer to discuss division of household tasks?",
            "What do you think about rotating chores every week?"
        ]
    },
    {
        question: "How do you feel about sharing finances in a marriage?",
        relatedQuestions: [
            "Do you think it's important to have a joint bank account?",
            "How do you manage financial disagreements?",
            "Would you prefer to have separate finances or combine everything?",
            "How would you divide financial responsibilities in a relationship?",
            "What’s your opinion on shared credit cards?"
        ]
    },
    // More questions here...
];

let currentQuestion = 0;
let currentRelatedIndex = 0;

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const exploreButton = document.getElementById('explore');
    const nextButton = document.getElementById('next');
    const relatedQuestions = questions[currentQuestion].relatedQuestions;

    questionElement.textContent = questions[currentQuestion].question;
    exploreButton.textContent = "Explore This More";
    nextButton.textContent = "Next Question";

    // Reset the related question index
    currentRelatedIndex = 0;
    exploreButton.disabled = false;
    nextButton.disabled = false;
}

function exploreMore() {
    const exploreButton = document.getElementById('explore');
    const relatedQuestions = questions[currentQuestion].relatedQuestions;

    if (currentRelatedIndex < relatedQuestions.length) {
        document.getElementById('question').textContent = relatedQuestions[currentRelatedIndex];
        currentRelatedIndex++;
    } else {
        alert("No more related questions available. Please choose a new question.");
        document.getElementById('explore').disabled = true;
        document.getElementById('next').disabled = false; // Enable "Next Question" button
    }
}

function nextQuestion() {
    // Move to the next question
    currentQuestion = (currentQuestion + 1) % questions.length;
    displayQuestion();
    document.getElementById('explore').disabled = false; // Enable "Explore This More" button
}

document.getElementById('explore').addEventListener('click', exploreMore);
document.getElementById('next').addEventListener('click', nextQuestion);

window.onload = displayQuestion;
