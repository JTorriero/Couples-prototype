// Questions and related questions
const questions = [
    {
        text: "How do you feel about sharing finances in a marriage?",
        related: [
            "What financial goals would you like us to set together?",
            "How should we handle unexpected expenses?",
            "What are your thoughts on saving for the future?",
            "How do you feel about discussing finances openly?",
            "What would be your ideal approach to managing finances as a team?"
        ]
    },
    {
        text: "What’s your opinion on how we divide household chores?",
        related: [
            "How do you feel about our current division of chores?",
            "What chores do you enjoy, if any?",
            "Would you like us to consider a new schedule for household tasks?",
            "How can we keep things fair with household responsibilities?",
            "What are ways we can support each other in maintaining the home?"
        ]
    },
    {
        text: "What boundaries should we set with family and friends?",
        related: [
            "How do we ensure we have enough time for each other?",
            "What are your thoughts on privacy in our relationship?",
            "How do you feel about setting boundaries for family events?",
            "What are ways we can support each other with social commitments?",
            "What boundaries do you feel are most important for us?"
        ]
    },
    // Add more questions with related items as needed
];

let currentQuestion = null;
let usedRelatedQuestions = new Set();

function getRandomQuestion() {
    usedRelatedQuestions.clear(); // Reset related questions when starting a new question
    const randomIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[randomIndex];
    document.getElementById("questionDisplay").textContent = "Question: " + currentQuestion.text;
}

function exploreRelatedQuestion() {
    if (!currentQuestion) {
        alert("Please select a question first.");
        return;
    }
    
    const availableRelated = currentQuestion.related.filter((q) => !usedRelatedQuestions.has(q));
    
    if (availableRelated.length > 0) {
        const nextRelated = availableRelated[Math.floor(Math.random() * availableRelated.length)];
        usedRelatedQuestions.add(nextRelated);
        document.getElementById("questionDisplay").textContent = "Related Question: " + nextRelated;
    } else {
        alert("No more related questions available. Please choose a new question.");
    }
}

// Attach event listeners to buttons
document.getElementById("nextQuestionButton").addEventListener("click", getRandomQuestion);
document.getElementById("exploreMoreButton").addEventListener("click", exploreRelatedQuestion);
