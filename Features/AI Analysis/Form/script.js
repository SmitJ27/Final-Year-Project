const questions = [
  {
    question: "What excites you most about AI?",
    options: ["Machine Learning", "Computer Vision", "Natural Language Processing", "Ethical AI"],
  },
  {
    question: "Do you have any programming experience?",
    options: ["Yes", "No"],
  },
  {
    question: "What is your primary goal in AI?",
    options: ["Research", "Career Growth", "Entrepreneurship", "Personal Interest"],
  },
];

let currentQuestionIndex = 0;
let responses = {};

function startQuiz() {
  // Switch to Quiz Screen
  document.getElementById("welcome-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");
  document.getElementById("quiz-screen").classList.add("active");
  loadQuestion();
}

function loadQuestion() {
  const questionTitle = document.getElementById("question-title");
  const optionsContainer = document.getElementById("options-container");

  questionTitle.textContent = questions[currentQuestionIndex].question;
  optionsContainer.innerHTML = "";

  questions[currentQuestionIndex].options.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");
    btn.onclick = () => selectOption(btn, option);
    optionsContainer.appendChild(btn);
  });

  updateProgressBar();
}

function selectOption(btn, option) {
  // Deselect all options
  const allButtons = document.querySelectorAll(".option-btn");
  allButtons.forEach(button => button.classList.remove("selected"));

  // Select the clicked option
  btn.classList.add("selected");

  responses[questions[currentQuestionIndex].question] = option;
}

function nextQuestion() {
  if (!responses[questions[currentQuestionIndex].question]) {
    alert("Please select an option before proceeding!");
    return;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function updateProgressBar() {
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  document.getElementById("progress").style.width = `${progress}%`;
}

function showResults() {
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");
  document.getElementById("result-screen").classList.add("active");

  const ctx = document.getElementById("result-chart").getContext("2d");
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: Object.keys(responses),
      datasets: [
        {
          label: "Responses",
          data: Object.values(responses).map(() => 1),
          backgroundColor: ["#ff6f61", "#4e54c8", "#8f94fb", "#50fa7b"],
        },
      ],
    },
  });
}

function downloadReport() {
  const data = Object.entries(responses)
    .map(([question, answer]) => `${question}: ${answer}`)
    .join("\n");

  const blob = new Blob([data], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "AI_Pathway_Responses.txt";
  link.click();
}

