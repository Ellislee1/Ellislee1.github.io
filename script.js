let currentQuestion = 0;
let score = 0;
let shuffledQuestions = [];
let correctAnswerIndex = null;
let selectedTopic = null;

const topicForm = document.getElementById("topic-form");
const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question-text");
const answerForm = document.getElementById("answer-form");
const answersContainer = document.getElementById("answers");
const nextButton = document.getElementById("next-button");
const startButton = document.getElementById("start-button");

// Function to shuffle an array
function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

// Function to display a question
function showQuestion() {
    if (currentQuestion < shuffledQuestions.length) {
        const question = shuffledQuestions[currentQuestion];
        questionText.textContent = `(${currentQuestion+1}/${numQuestionsValue}) ${question.question}`;
        correctAnswer = question.answers[question.correct];

        // Clear previous answers
        answersContainer.innerHTML = "";

        shuffledAnswers = shuffleArray(question.answers);

        // Create radio buttons for each answer
        shuffledAnswers.forEach((answer, index) => {
            const answerElement = document.createElement("div");
            answerElement.className = "answer";
            const radioButton = document.createElement("input");
            radioButton.type = "radio";
            radioButton.name = "answer";
            radioButton.id = `answer-${index}`;
            radioButton.value = index;
            const label = document.createElement("label");
            label.htmlFor = `answer-${index}`;
            label.textContent = answer;

            answerElement.appendChild(radioButton);
            answerElement.appendChild(label);

            answersContainer.appendChild(answerElement);

            if (answer == correctAnswer){
                correctAnswerIndex = index;
            };
        });

        // Enable the "Next" button
        nextButton.removeAttribute("disabled");
        nextButton.style.display = "block";
    } else {
        endQuiz();
    }
}

// Event listener for topic selection
topicForm.addEventListener("change", () => {
    selectedTopic = document.querySelector('input[name="topic"]:checked').value;

    try {
        shuffledQuestions = shuffleArray(questionData[selectedTopic]);

        startButton.style.display = "block";
        maxQuestions = shuffledQuestions.length
        numQuestionsSlider.max = maxQuestions
        numQuestionsSlider.value = (parseInt(numQuestionsSlider.value) <= maxQuestions) ? numQuestionsSlider.value:maxQuestions
        document.getElementById("selected-num-questions").textContent = parseInt(numQuestionsSlider.value);
    } catch (error) {
        fetch('ppl_questions.json') // Load JSON data from the external file
        .then(response => response.json())
        .then(data => {
            questionData = data;

            shuffledQuestions = shuffleArray(questionData[selectedTopic]);

            startButton.style.display = "block";
            maxQuestions = shuffledQuestions.length
            numQuestionsSlider.max = maxQuestions
            numQuestionsSlider.value = (parseInt(numQuestionsSlider.value) <= maxQuestions) ? numQuestionsSlider.value:maxQuestions
            document.getElementById("selected-num-questions").textContent = parseInt(numQuestionsSlider.value);
        })
        .catch(error => {
            console.error('Error loading JSON:', error);
        });
    }
});

// Event listener for starting the quiz
startButton.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    givenAnswers = [];
    topicForm.style.display = "none";
    startButton.style.display = "none";
    questionContainer.style.display = "block";
    const numQuestionsSlider = document.getElementById("num-questions");
    numQuestionsValue = parseInt(numQuestionsSlider.value);
    document.getElementById("selected-num-questions").textContent = numQuestionsValue;
    shuffledQuestions = shuffledQuestions.slice(0, numQuestionsValue); // Limit to the selected number of questions
    // console.log(shuffledQuestions.length)
    // console.log(numQuestionsValue)
    showQuestion();
});

// Event listener for checking answers and advancing to the next question
nextButton.addEventListener("click", () => {
    const selectedAnswerIndex = document.querySelector('input[name="answer"]:checked');
    givenAnswers.push(shuffledAnswers[parseInt(selectedAnswerIndex.value)])
    if (selectedAnswerIndex !== null) {
        if (parseInt(selectedAnswerIndex.value) === correctAnswerIndex) {
            score++;
        }

        currentQuestion++;
        showQuestion();

        // Clear the selected answer
        // document.querySelector('input[name="answer"]:checked').checked = false;
    }
});

// Function to end the quiz
function endQuiz() {
    // Clear the question container
    questionContainer.innerHTML = '';

    // Create a container for displaying the results
    const resultsContainer = document.createElement("div");
    resultsContainer.className = "results-container";

    // Display the user's score
    const scoreText = document.createElement("h2");
    scoreText.textContent = `Quiz Completed! Your Score: ${score} / ${shuffledQuestions.length}`;
    resultsContainer.appendChild(scoreText);

    const percentageText = document.createElement("h4");
    percentageText.textContent = `Thats ${Math.round((score / shuffledQuestions.length)*1000)/10}%, you only need 75% to pass.`
    resultsContainer.appendChild(percentageText);

    // Iterate through all attempted questions
    shuffledQuestions.forEach((question, questionIndex) => {
        const questionResult = document.createElement("div");
        questionResult.className = "question-result";

        const userAnswerIndex = document.querySelector(`input[name="answer-${questionIndex}"]:checked`);
        const userAnswerText = givenAnswers[questionIndex];
        const correctAnswerText = question.answers[question.correct];
        
        // Display the question text
        const questionTextElement = document.createElement("p");
        questionTextElement.innerHTML = `<b>Question ${questionIndex + 1}: ${question.question}</b>(${(userAnswerText == correctAnswerText) ? "Correct" :"Incorrect"})`;
        questionResult.appendChild(questionTextElement);

        // Display the user's answer
        
        const userAnswerElement = document.createElement("p");
        userAnswerElement.textContent = `Your Answer: ${userAnswerText}`;
        questionResult.appendChild(userAnswerElement);

        // Display the correct answer and highlight it in green
        const correctAnswerElement = document.createElement("p");
        correctAnswerElement.textContent = `Correct Answer: ${correctAnswerText}`;
        if (userAnswerIndex && userAnswerIndex.value == question.correct) {
            correctAnswerElement.style.color = "green"; // Highlight correct answer
        }
        questionResult.appendChild(correctAnswerElement);

        resultsContainer.appendChild(questionResult);
    });

    // Append the results container to the question container
    questionContainer.appendChild(resultsContainer);

    // Hide the "Next" button
    nextButton.style.display = "none";
}



function populateTopicOptions(data) {
    const topicOptions = document.getElementById("topic-options");
    Object.keys(data).forEach((topic) => {
        const topicOption = document.createElement("input");
        topicOption.type = "radio";
        topicOption.name = "topic";
        topicOption.id = `topic-${topic}`;
        topicOption.value = topic;
        const label = document.createElement("label");
        label.htmlFor = `topic-${topic}`;
        label.textContent = topic;

        topicOptions.appendChild(topicOption);
        topicOptions.appendChild(label);
    });
}

// Event listener for loading topics when the page loads
document.addEventListener("DOMContentLoaded", () => {

    fetch('ppl_questions.json') // Load JSON data from the external file
        .then(response => response.json())
        .then(data => {
            questionData = data;
            populateTopicOptions(questionData);
        })
        .catch(error => {
            console.error('Error loading JSON:', error);
        });
});

// Event listener to update the selected number of questions as the slider value changes
const numQuestionsSlider = document.getElementById("num-questions");
numQuestionsSlider.addEventListener("input", () => {
    const numQuestionsValue = parseInt(numQuestionsSlider.value);
    document.getElementById("selected-num-questions").textContent = numQuestionsValue;
});