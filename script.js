const questions = {
    "conversation-starters": [
        "What’s your opinion on how we divide household chores?",
        "How do you feel about sharing finances in a marriage?",
        "What’s the best meal we’ve had together?",
        "How do you feel about surprise trips or gifts?",
        "What’s your favorite memory of us?",
        "What is one small habit you appreciate about me?",
        "What are your thoughts on spending time apart?",
        "What’s your favorite thing to do together on a lazy day?",
        "How would you describe your ideal weekend?",
        "What is one thing you’d like us to work on as a couple?"
    ],
    "storytelling": [
        "What’s a time you felt most vulnerable with me?",
        "Tell me about your childhood pet.",
        "What’s the most adventurous thing you’ve done as a couple?",
        "What’s a favorite trip we took together?",
        "Describe the funniest moment we’ve had together.",
        "What’s a memorable holiday we’ve spent together?",
        "What’s a lesson you’ve learned from our relationship?",
        "Describe a time when you felt most proud of us.",
        "What’s a challenging moment that brought us closer?",
        "What was your first impression of me?"
    ],
    "debate": [
        "Should we plan our vacations together or separately?",
        "Is it better to have a joint or separate bank account?",
        "Should couples agree on how to discipline children before they have them?",
        "What’s your stance on having shared vs. individual hobbies?",
        "Do you think a couple should share the same social circle?",
        "Is it essential to discuss major purchases together?",
        "Should we prioritize saving or spending on experiences?",
        "Is it important to have similar political beliefs?",
        "How important is it for us to have a set routine?",
        "Is it better to address conflicts right away or give it time?"
    ]
};

const relatedQuestions = {
    "What’s your opinion on how we divide household chores?": [
        "Do you feel our division of chores is fair?",
        "How would you change the way we handle chores?",
        "Is there a chore you secretly enjoy doing?",
        "How do you feel about rotating chores?",
        "Would you prefer outsourcing some chores?"
    ],
    "How do you feel about sharing finances in a marriage?": [
        "Is it better to have a joint or separate bank account?",
        "What’s one financial goal we could work towards together?",
        "How do you feel about creating a budget together?",
        "What’s a financial habit of mine you appreciate?",
        "Would you consider financial planning classes together?"
    ],
    "What’s the best meal we’ve had together?": [
        "What kind of meals do you enjoy most on a date?",
        "What’s your favorite type of cuisine for a date night?",
        "Would you like to cook more meals together?",
        "What’s your favorite dish to cook for us?",
        "Do you prefer dining out or cooking at home?"
    ],
    "How do you feel about surprise trips or gifts?": [
        "Have you ever planned a surprise for someone?",
        "What’s the best surprise you’ve ever received?",
        "What kind of surprises do you enjoy most?",
        "What’s a surprise gift you would love?",
        "Would you want more or fewer surprises?"
    ],
    "What’s your favorite memory of us?": [
        "What moment made you feel closest to me?",
        "What’s a memory that always makes you laugh?",
        "What’s a special moment you’d like to recreate?",
        "Is there a memory you wish we’d captured on camera?",
        "What’s something small but meaningful we’ve shared?"
    ],
    "What’s a time you felt most vulnerable with me?": [
        "How did you feel when we overcame a tough situation together?",
        "What’s something you’ve shared with me that you haven’t shared with others?",
        "What made you feel safe opening up to me?",
        "How do you feel when I’m vulnerable with you?",
        "What’s something that helps you feel understood?"
    ],
    "Tell me about your childhood pet.": [
        "What was something you learned from that pet?",
        "What’s your favorite pet story from childhood?",
        "Did you have a favorite pet-related memory?",
        "Would you like us to have a pet together?",
        "How do you feel about different types of pets?"
    ],
    "What’s the most adventurous thing you’ve done as a couple?": [
        "How do you feel about taking more risks together?",
        "What’s an adventure you’d like us to have in the future?",
        "What’s something new you’d like us to try?",
        "Would you prefer planned or spontaneous adventures?",
        "Is there a place you’d like us to visit together?"
    ],
    "What’s a favorite trip we took together?": [
        "What made that trip memorable for you?",
        "What would you add or change about that trip if we could do it again?",
        "Is there a specific destination you’d like us to visit?",
        "How do you feel about vacationing in new places?",
        "What’s your ideal vacation style: relaxed or active?"
    ],
    "Describe the funniest moment we’ve had together.": [
        "What’s something silly we did together?",
        "What makes you laugh the most about us?",
        "Is there a funny memory you like to retell?",
        "Do you enjoy inside jokes we share?",
        "How important is humor in our relationship?"
    ],
    "Should we plan our vacations together or separately?": [
        "What’s your idea of the perfect vacation?",
        "Do you prefer spontaneous or planned trips?",
        "What’s a vacation style that fits us both?",
        "How do you feel about solo trips?",
        "Do you enjoy our planning process?"
    ],
    "Is it better to have a joint or separate bank account?": [
        "How do you feel about sharing finances?",
        "What’s your philosophy on financial independence within a relationship?",
        "How important is transparency with money?",
        "Would you ever consider separate accounts for specific purposes?",
        "What’s a financial goal we could set together?"
    ],
    "Should couples agree on how to discipline children before they have them?": [
        "What’s your stance on how to raise children?",
        "Do you think parenting styles can evolve together over time?",
        "How important is consistency in parenting?",
        "What are your thoughts on discipline and structure?",
        "Would you want parenting discussions before starting a family?"
    ],
    "What’s your stance on having shared vs. individual hobbies?": [
        "Do you prefer we have our own hobbies or share them?",
        "What’s a hobby you’d like us to try together?",
        "Is it important to you that we have alone time?",
        "How do you feel about exploring new hobbies together?",
        "Would you enjoy us having a shared passion?"
    ],
    "Do you think a couple should share the same social circle?": [
        "How important is it for us to have mutual friends?",
        "What’s your ideal balance between shared and separate friendships?",
        "Do you enjoy spending time with each other’s friends?",
        "Would you prefer us to keep social circles separate?",
        "How important is having common friendships?"
    ]
};

// Function to select the next random question
function nextQuestion() {
    const categories = Object.keys(questions);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const randomQuestion = questions[randomCategory][Math.floor(Math.random() * questions[randomCategory].length)];
    document.getElementById("question").innerText = `Question: ${randomQuestion} (Explore this more!)`;
}

// Function to explore more on the current question
function exploreThisMore() {
    const currentQuestionText = document.getElementById("question").innerText.replace("Question: ", "").replace(" (Explore this more!)", "");
    const related = relatedQuestions[currentQuestionText];
    if (related && related.length > 0) {
        const randomRelatedQuestion = related[Math.floor(Math.random() * related.length)];
        document.getElementById("question").innerText = `Related Question: ${randomRelatedQuestion} (Explore this more!)`;
    } else {
        alert("No related question available.");
    }
}
