const questions = [{
        question: "What is the capital of France?",
        options: ["Madrid", "Berlin", "London", "Paris"],
        correctAnswer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Earth", "Jupiter"],
        correctAnswer: "Mars",
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Giraffe", "Blue Whale", "Lion"],
        correctAnswer: "Blue Whale",
    },
    {
        question: "Who won the FIFA World Cup in 2018?",
        options: ["Brazil", "Germany", "France", "Argentina"],
        correctAnswer: "France",
    },
    {
        question: "Which artist released the album 'Thriller' in 1982?",
        options: ["Elvis Presley", "Michael Jackson", "The Beatles", "Madonna"],
        correctAnswer: "Michael Jackson",
    },
    {
        question: "Who is the author of 'Romeo and Juliet'?",
        options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Leo Tolstoy"],
        correctAnswer: "William Shakespeare",
    },
    {
        question: "What is the square root of 144?",
        options: ["10", "12", "14", "16"],
        correctAnswer: "12",
    },
    {
        question: "Which word is a noun in the following sentence: 'She sang a beautiful song'?",
        options: ["sang", "beautiful", "song", "she"],
        correctAnswer: "song",
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Jupiter",
    },
    {
        question: "In which sport does a player score a 'hat-trick'?",
        options: ["Basketball", "Football", "Tennis", "Golf"],
        correctAnswer: "Football",
    },
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const scoreValueElement = document.getElementById("score-value");

    if (currentQuestion < questions.length) {
        const currentQ = questions[currentQuestion];
        questionElement.textContent = currentQ.question;
        optionsElement.innerHTML = "";

        currentQ.options.forEach((option, index) => {
            const optionButton = document.createElement("button");
            optionButton.textContent = option;
            optionButton.className = "option";
            optionButton.onclick = () => checkAnswer(option, currentQ.correctAnswer);
            optionsElement.appendChild(optionButton);
        });

        document.getElementById("result").textContent = "";
        document.getElementById("next-button").style.display = "none";
        scoreValueElement.textContent = score;
    } else {
        showResult();
    }
}

function checkAnswer(selectedAnswer, correctAnswer) {
    const options = document.querySelectorAll(".option");

    options.forEach((option) => {
        option.disabled = true;
        if (option.textContent === correctAnswer) {
            option.style.backgroundColor = "green";
        } else {
            option.style.backgroundColor = "red";
        }
    });

    if (selectedAnswer === correctAnswer) {
        document.getElementById("result").textContent = "Correct!";
        score++;
    } else {
        document.getElementById("result").textContent = `Wrong! The correct answer is: ${correctAnswer}`;
    }

    document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}

function showResult() {
    const questionElement = document.getElementById("question");
    questionElement.textContent = "You are amazing, Quiz Completed!";
    document.getElementById("options").innerHTML = `Your Score: ${score} out of ${questions.length}`;
    document.getElementById("result").textContent = "";
    document.getElementById("next-button").style.display = "none";
}

loadQuestion();