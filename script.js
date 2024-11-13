let questions = [
    {
        question: "How do you feel about sharing finances in a marriage?",
        relatedQuestions: [
            "What are your views on budgeting together?",
            "How would you approach saving for future goals?",
            "What financial goals do you think we should prioritize?",
            "What’s your opinion on debt and loans in a marriage?",
            "How do you feel about discussing large purchases before buying?"
        ]
    },
    {
        question: "What’s your opinion on how we divide household chores?",
        relatedQuestions: [
            "How do you feel about a chore schedule?",
            "What’s one household task you’d prefer not to do?",
            "How should we handle cleaning responsibilities?",
            "Do you feel the chores are fairly balanced between us?",
            "How often should we revisit our division of chores?"
        ]
    },
    {
        question: "How important is physical affection in a relationship?",
        relatedQuestions: [
            "How often do you feel we should spend quality time together?",
            "How do you express affection most comfortably?",
            "What are small ways to show affection daily?",
            "What types of physical affection make you feel most loved?",
            "What do you think about public displays of affection?"
        ]
    },
    {
        question: "How do you handle stress in daily life?",
        relatedQuestions: [
            "What helps you relax when you’re feeling overwhelmed?",
            "What role do hobbies play in managing your stress?",
            "How can we support each other during stressful times?",
            "What are some of your personal stress triggers?",
            "How do you usually unwind at the end of a hard day?"
        ]
    },
    {
        question: "What’s your perspective on balancing work and personal life?",
        relatedQuestions: [
            "What’s your ideal work-life balance?",
            "How do you recharge after a busy workday?",
            "What are your boundaries around work and personal time?",
            "What personal time activities do you value most?",
            "How can we support each other in maintaining balance?"
        ]
    }
];

let originalQuestionIndex = -1;
let questionElement = document.getElementById("question");

function nextQuestion() {
    originalQuestionIndex = Math.floor(Math.random() * questions.length);
    questionElement.textContent = "Question: " + questions[originalQuestionIndex].question;
}

function exploreMore() {
    if (originalQuestionIndex === -1) {
        alert("No original question selected.");
        return;
    }

    const related = questions[originalQuestionIndex].relatedQuestions;

    if (related.length > 0) {
        // Randomly select a related question each time "Explore This More" is clicked
        const randomIndex = Math.floor(Math.random() * related.length);
        const nextRelatedQuestion = related.splice(randomIndex, 1)[0];

        // Display original question and new related question below
        questionElement.textContent = "Question: " + questions[originalQuestionIndex].question + " (Explore this more!)";
        let relatedQuestionElement = document.createElement("p");
        relatedQuestionElement.textContent = "Related: " + nextRelatedQuestion;
        questionElement.appendChild(relatedQuestionElement);
    } else {
        alert("No more related questions available.");
    }
}
