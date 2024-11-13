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
    {
        question: "What are your thoughts on the role of social media in relationships?",
        relatedQuestions: [
            "How do you feel about sharing couple photos on social media?",
            "Should couples have privacy on their social media accounts?",
            "How do you manage boundaries with friends of the opposite sex on social media?",
            "What is your opinion on spending too much time on social media in a relationship?",
            "Do you think social media impacts trust in relationships?"
        ]
    },
    {
        question: "How do you feel about having children in the future?",
        relatedQuestions: [
            "Do you see yourself having a large family or a small one?",
            "What kind of parenting style do you think you would adopt?",
            "How would you handle disagreements about parenting?",
            "What is your opinion on balancing career and children?",
            "Do you think you would be open to adoption or fostering?"
        ]
    },
    {
        question: "What does personal space mean to you in a relationship?",
        relatedQuestions: [
            "How do you balance quality time with alone time in a relationship?",
            "How do you feel about spending time apart during vacations?",
            "How would you address if your partner needs more personal space?",
            "What’s your opinion on having separate hobbies or interests in a relationship?",
            "How important is it for you to have private time for self-care?"
        ]
    },
    {
        question: "What are your views on work-life balance?",
        relatedQuestions: [
            "How do you set boundaries between work and home life?",
            "Do you believe in taking time off to recharge?",
            "How do you feel about working late or on weekends?",
            "How would you support each other’s career ambitions?",
            "What are your thoughts on managing stress from work?"
        ]
    },
    {
        question: "What’s your opinion on long-distance relationships?",
        relatedQuestions: [
            "How do you stay connected with someone far away?",
            "What’s the key to maintaining trust in a long-distance relationship?",
            "How do you make long-distance work without feeling disconnected?",
            "Do you think it’s possible for a long-distance relationship to be successful?",
            "How would you plan visits and quality time in a long-distance relationship?"
        ]
    },
    {
        question: "What is your perspective on handling conflict in a relationship?",
        relatedQuestions: [
            "Do you prefer to resolve issues immediately or give some time for cooling down?",
            "What do you do when you feel like your partner isn’t listening?",
            "How would you handle an argument about something trivial?",
            "What’s the best way to compromise during a conflict?",
            "How do you apologize when you’ve hurt your partner?"
        ]
    },
    {
        question: "How do you feel about trust and transparency in relationships?",
        relatedQuestions: [
            "How do you rebuild trust after a betrayal?",
            "What’s your opinion on being completely open about finances?",
            "How do you set expectations for transparency?",
            "Is it important to share passwords or access to social media accounts?",
            "How do you handle secrets in a relationship?"
        ]
    },
    {
        question: "What are your thoughts on marriage and commitment?",
        relatedQuestions: [
            "How do you define commitment in a relationship?",
            "Do you believe in marriage as an institution or in a more modern approach?",
            "What’s your opinion on marriage counseling?",
            "How would you navigate the idea of renewing vows?",
            "What does loyalty mean to you in a marriage?"
        ]
    }
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
    }
}

function nextQuestion() {
    currentRelatedIndex = 0;
    currentQuestion = (currentQuestion + 1) % questions.length;
    displayQuestion();
}

document.getElementById('explore').addEventListener('click', exploreMore);
document.getElementById('next').addEventListener('click', nextQuestion);

window.onload = displayQuestion;
