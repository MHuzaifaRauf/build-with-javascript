// Get the question element, answer buttons container, and next button from the DOM
const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

// Array of quiz questions with their respective answers
const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", output: false },
            { text: "Whale", output: true },
            { text: "Lion", output: false },
            { text: "Cat", output: false }
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican City", output: true },
            { text: "Mexico", output: false },
            { text: "Pakistan", output: false },
            { text: "Germany", output: false }
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Gobi", output: false },
            { text: "Thar", output: false },
            { text: "Sahara", output: false },
            { text: "Antarctica", output: true }
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", output: false },
            { text: "Australia", output: true },
            { text: "Arctic", output: false },
            { text: "Africa", output: false }
        ]
    }
    // Add more questions and answers as needed
];

let questionIndex = 0;
let score = 0;

// Function to start the quiz
function startQuiz() {
    questionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

// Function to display the current question and answers
function showQuestion() {
    resetState();

    let currentQuestion = questions[questionIndex];
    let questionNo = questionIndex + 1;

    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");

        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);

        if (answer.output) button.dataset.output = answer.output;

        button.addEventListener("click", selectAns);
    });
}

// Function to reset the quiz state
function resetState() {
    nextBtn.style.display = "none";

    while (answerBtn.firstChild) answerBtn.removeChild(answerBtn.firstChild);
}

// Function to handle the selection of an answer
function selectAns(event) {
    const selectedBtn = event.target;
    const isCorrect = selectedBtn.dataset.output === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerBtn.children).forEach(button => {
        if (button.dataset.output === "true") button.classList.add("correct");

        button.disabled = true;
    });

    nextBtn.style.display = "block";
}

// Function to display the final score
function showScore() {
    resetState();

    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;

    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}

// Function to handle the next button click
function handleNextBtn() {
    questionIndex++;

    if (questionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// Event listener for the next button click
nextBtn.addEventListener("click", () => {
    if (questionIndex < questions.length) {
        handleNextBtn();
    } else {
        startQuiz();
    }
});

// Start the quiz when the page loads
startQuiz();