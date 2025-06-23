// script.js
const questions = [
  {
    question: "What house at Hogwarts does Harry belong to?",
    answers: [
      { text: "Slytherin", correct: false },
      { text: "Gryffindor", correct: true },
      { text: "Hufflepuff", correct: false },
      { text: "Ravenclaw", correct: false }
    ]
  },
  {
    question: "What position does Harry play on his Quidditch team?",
    answers: [
      { text: "Beater", correct: false },
      { text: "Keeper", correct: false },
      { text: "Seeker", correct: true },
      { text: "Chaser", correct: false }
    ]
  },
  {
    question: "Who is the Half-Blood Prince?",
    answers: [
      { text: "Harry Potter", correct: false },
      { text: "Draco Malfoy", correct: false },
      { text: "Tom Riddle", correct: false },
      { text: "Severus Snape", correct: true }
    ]
  },
   {
    question: "What does the spell 'Alohomora' do?",
    answers: [
      { text: "Lights up wand", correct: false },
      { text: "Opens locked doors", correct: true },
      { text: "Levitates objects", correct: false },
      { text: "Creates fire", correct: false }
    ],
    gif: "gifs/Alohamora.gif"
  },
  {
    question: "What shape is Harry's scar?",
    answers: [
      { text: "Moon", correct: false },
      { text: "Star", correct: false },
      { text: "Lightning bolt", correct: true },
      { text: "Skull", correct: false }
    ]
  },
  {
    question: "What does the spell 'Lumos' do?",
    answers: [
      { text: "Unlock doors", correct: false },
      { text: "Summon objects", correct: false },
      { text: "Create light", correct: true },
      { text: "Make things levitate", correct: false }
    ]
  },
  {
    question: "Which magical creature is loyal only to one wizard at a time?",
    answers: [
      { text: "Hippogriff", correct: false },
      { text: "Phoenix", correct: false },
      { text: "Thestral", correct: false },
      { text: "House-elf", correct: true }
    ]
  },
  {
    question: "What platform is used to board the Hogwarts Express?",
    answers: [
      { text: "9", correct: false },
      { text: "10", correct: false },
      { text: "9 ¾", correct: true },
      { text: "7 ½", correct: false }
    ]
  },
  {
    question: "What is Voldemort’s real name?",
    answers: [
      { text: "Salazar Slytherin", correct: false },
      { text: "Tom Marvolo Riddle", correct: true },
      { text: "Gellert Grindelwald", correct: false },
      { text: "Lucius Malfoy", correct: false }
    ]
  },
  {
    question: "Who guards the Gryffindor common room?",
    answers: [
      { text: "A gargoyle", correct: false },
      { text: "A painting of a fat lady", correct: true },
      { text: "Dobby", correct: false },
      { text: "A spell barrier", correct: false }
    ]
  },
  {
    question: "What does the spell 'Expelliarmus' do?",
    answers: [
      { text: "Disarms an opponent", correct: true },
      { text: "Stuns someone", correct: false },
      { text: "Heals injuries", correct: false },
      { text: "Summons an object", correct: false }
    ]
  },
  {
    question: "Which of these is NOT a Deathly Hallow?",
    answers: [
      { text: "Elder Wand", correct: false },
      { text: "Resurrection Stone", correct: false },
      { text: "Invisibility Cloak", correct: false },
      { text: "Time-Turner", correct: true }
    ]
  },
  {
    question: "What is the name of Harry’s owl?",
    answers: [
        { text: "Crookshanks", correct: false },
        { text: "Hedwig", correct: true },
        { text: "Scabbers", correct: false },
        { text: "Errol", correct: false }
    ]
  },
  {
    question: "What magical map shows everyone at Hogwarts?",
    answers: [
        { text: "The Marauder’s Map", correct: true },
        { text: "The Map of Secrets", correct: false },
        { text: "Hogwarts Atlas", correct: false },
        { text: "The Cloak Chart", correct: false }
    ]
  },
  {
    question: "Who teaches Transfiguration at Hogwarts?",
    answers: [
        { text: "Professor Snape", correct: false },
        { text: "Professor McGonagall", correct: true },
        { text: "Professor Flitwick", correct: false },
        { text: "Professor Sprout", correct: false }
    ]
  },
  {
    question: "What is the name of the Weasley family’s house?",
    answers: [
        { text: "Shell Cottage", correct: false },
        { text: "The Burrow", correct: true },
        { text: "Number 12 Grimmauld Place", correct: false },
        { text: "Ottery St. Catchpole", correct: false }
    ]
  },
  {
    question: "What creature is Aragog?",
    answers: [
        { text: "Basilisk", correct: false },
        { text: "Hippogriff", correct: false },
        { text: "Acromantula", correct: true },
        { text: "Thestral", correct: false }
    ],
    gif: "gifs/Aragog.gif"
  },
  {
    question: "Which vault in Gringotts held the Philosopher’s Stone?",
    answers: [
        { text: "713", correct: true },
        { text: "666", correct: false },
        { text: "394", correct: false },
        { text: "627", correct: false }
    ]
  },
  {
    question: "What form does Hermione’s Patronus take?",
    answers: [
        { text: "Otter", correct: true },
        { text: "Cat", correct: false },
        { text: "Rabbit", correct: false },
        { text: "Horse", correct: false }
    ]
  },
  {
    question: "Who kills Dobby?",
    answers: [
        { text: "Bellatrix Lestrange", correct: true },
        { text: "Lucius Malfoy", correct: false },
        { text: "Fenrir Greyback", correct: false },
        { text: "Peter Pettigrew", correct: false }
    ]
  },
  {
    question: "What type of wood is Harry’s wand made from?",
    answers: [
        { text: "Yew", correct: false },
        { text: "Holly", correct: true },
        { text: "Elder", correct: false },
        { text: "Willow", correct: false }
    ]
  },
  {
    question: "What magical object shows your deepest desire?",
    answers: [
        { text: "The Mirror of Erised", correct: true },
        { text: "The Pensieve", correct: false },
        { text: "The Invisibility Cloak", correct: false },
        { text: "The Time-Turner", correct: false }
    ]
  },
  {
    question: "Who was the headmaster before Dumbledore?",
    answers: [
        { text: "Armando Dippet", correct: true },
        { text: "Phineas Nigellus", correct: false },
        { text: "Elphias Doge", correct: false },
        { text: "Horace Slughorn", correct: false }
    ]
  },
  {
    question: "Who gave Harry the Marauder’s Map?",
    answers: [
        { text: "Dumbledore", correct: false },
        { text: "Fred and George", correct: true },
        { text: "Remus Lupin", correct: false },
        { text: "Sirius Black", correct: false }
    ]
  },
  {
    question: "Who was the first to escape Azkaban?",
    answers: [
        { text: "Bellatrix Lestrange", correct: false },
        { text: "Barty Crouch Jr.", correct: false },
        { text: "Sirius Black", correct: true },
        { text: "Antonin Dolohov", correct: false }
    ],
    gif: "gifs/Azkaban.gif"
  },
  {
    question: "What spell repels Dementors?",
    answers: [
        { text: "Expecto Patronum", correct: true },
        { text: "Protego", correct: false },
        { text: "Lumos Maxima", correct: false },
        { text: "Expelliarmus", correct: false }
    ]
  },
  {
    question: "What is the name of Draco Malfoy's son?",
    answers: [
        { text: "Scorpius", correct: true },
        { text: "Lucien", correct: false },
        { text: "Cassius", correct: false },
        { text: "Regulus", correct: false }
    ]
  },
  {
    question: "Who was the first victim of the Basilisk?",
    answers: [
        { text: "Justin Finch-Fletchley", correct: false },
        { text: "Mrs. Norris", correct: true },
        { text: "Colin Creevey", correct: false },
        { text: "Nearly Headless Nick", correct: false }
    ],
    gif: "gifs/Basilisk.gif"
  },
  {
    question: "What is Gilderoy Lockhart’s favorite color?",
    answers: [
        { text: "Lavender", correct: true },
        { text: "Lilac", correct: false },
        { text: "Turquoise", correct: false },
        { text: "Gold", correct: false }
    ]
  },
  {
    question: "What does Felix Felicis do?",
    answers: [
        { text: "Makes you strong", correct: false },
        { text: "Makes you invisible", correct: false },
        { text: "Gives you luck", correct: true },
        { text: "Makes you smart", correct: false }
    ]
  },
  {
    question: "Which of these is NOT a Horcrux?",
    answers: [
        { text: "Nagini", correct: false },
        { text: "Hufflepuff's Cup", correct: false },
        { text: "Mirror of Erised", correct: true },
        { text: "Ravenclaw's Diadem", correct: false }
    ]
  },
  {
    question: "What’s the name of the Weasleys’ ghoul?",
    answers: [
        { text: "Morty", correct: false },
        { text: "Gnar", correct: false },
        { text: "He has no name", correct: true },
        { text: "Gormy", correct: false }
    ]
  },
  {
    question: "Who put Harry’s name in the Goblet of Fire?",
    answers: [
        { text: "Igor Karkaroff", correct: false },
        { text: "Barty Crouch Jr.", correct: true },
        { text: "Voldemort", correct: false },
        { text: "Mad-Eye Moody", correct: false }
    ]
  },
  {
    question: "What is the name of Hagrid’s half-brother?",
    answers: [
        { text: "Grawp", correct: true },
        { text: "Gruff", correct: false },
        { text: "Gork", correct: false },
        { text: "Grom", correct: false }
    ]
  },
  {
    question: "What is the main ingredient in Polyjuice Potion?",
    answers: [
        { text: "Phoenix feather", correct: false },
        { text: "Mandrake root", correct: false },
        { text: "Hair or part of the person", correct: true },
        { text: "Boomslang skin", correct: false }
    ]
  },
  {
    question: "What does the spell 'Obliviate' do?",
    answers: [
        { text: "Freezes the target", correct: false },
        { text: "Unlocks doors", correct: false },
        { text: "Erases memory", correct: true },
        { text: "Disarms opponent", correct: false }
    ]
  },
  {
    question: "Who kills Sirius Black?",
    answers: [
        { text: "Voldemort", correct: false },
        { text: "Draco Malfoy", correct: false },
        { text: "Bellatrix Lestrange", correct: true },
        { text: "Fenrir Greyback", correct: false }
    ]
  },
  {
    question: "What magical device turns back time?",
    answers: [
        { text: "Time Shifter", correct: false },
        { text: "Clock Turner", correct: false },
        { text: "Time-Turner", correct: true },
        { text: "Pendulum of Fate", correct: false }
    ]
  },
  {
    question: "What is a squib?",
    answers: [
        { text: "A half-blood", correct: false },
        { text: "A wizard-born with no magic", correct: true },
        { text: "A non-magical creature", correct: false },
        { text: "A powerful dark wizard", correct: false }
    ]
  },
  {
    question: "What house is Luna Lovegood in?",
    answers: [
        { text: "Gryffindor", correct: false },
        { text: "Hufflepuff", correct: false },
        { text: "Slytherin", correct: false },
        { text: "Ravenclaw", correct: true }
    ]
  },
  {
    question: "Who becomes the new headmaster after Snape?",
    answers: [
        { text: "Professor Flitwick", correct: false },
        { text: "Neville Longbottom", correct: false },
        { text: "Professor McGonagall", correct: true },
        { text: "Horace Slughorn", correct: false }
    ]
  },
  {
    question: "What’s the name of the train that takes students to Hogwarts?",
    answers: [
        { text: "Hogwarts Railway", correct: false },
        { text: "Hogwarts Express", correct: true },
        { text: "Wizard Rail", correct: false },
        { text: "Hogsmeade Flyer", correct: false }
    ]
  },
  {
    question: "Who is the ghost of Slytherin house?",
    answers: [
        { text: "Bloody Baron", correct: true },
        { text: "Nearly Headless Nick", correct: false },
        { text: "The Fat Friar", correct: false },
        { text: "The Grey Lady", correct: false }
    ]
  },
  {
    question: "What vault was used to store the Philosopher’s Stone?",
    answers: [
        { text: "Vault 394", correct: false },
        { text: "Vault 713", correct: true },
        { text: "Vault 777", correct: false },
        { text: "Vault 999", correct: false }
    ]
  },
  {
    question: "What does the spell 'Wingardium Leviosa' do?",
    answers: [
        { text: "Heals wounds", correct: false },
        { text: "Lights up your wand", correct: false },
        { text: "Makes objects fly", correct: true },
        { text: "Disarms an enemy", correct: false }
    ]
  },
  {
    question: "What is the name of the village near Hogwarts?",
    answers: [
        { text: "Ottery St. Catchpole", correct: false },
        { text: "Little Whinging", correct: false },
        { text: "Godric's Hollow", correct: false },
        { text: "Hogsmeade", correct: true }
    ]
  },
  {
    question: "Which dragon does Harry face in the Triwizard Tournament?",
    answers: [
        { text: "Hungarian Horntail", correct: true },
        { text: "Chinese Fireball", correct: false },
        { text: "Norwegian Ridgeback", correct: false },
        { text: "Swedish Short-Snout", correct: false }
    ]
  },
  {
    question: "Who is the keeper of keys and grounds at Hogwarts?",
    answers: [
        { text: "Filch", correct: false },
        { text: "Hagrid", correct: true },
        { text: "Snape", correct: false },
        { text: "Dumbledore", correct: false }
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");
const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz-container");
const questionCounter = document.getElementById("question-counter");
const questionGif = document.getElementById("question-gif");

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;
  questionCounter.innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  questionGif.src = currentQuestion.gif;
  questionGif.classList.remove("hide");

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct === "true";

  if (correct) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
  }

  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "inline-block";
}

function handleNextQuestion() {
  if (nextButton.innerText === "Play Again") {
    startQuiz();
    return;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showFinalResult();
  }
}

function showFinalResult() {
  resetState();
  document.getElementById("question-container").classList.add("hide");
  questionCounter.classList.add("hide");
  questionGif.classList.add("hide");

  let title = '';
  if (score >= 8) {
    title = "🧙 You're a true Potterhead!";
  } else if (score >= 5) {
    title = "📚 You're on your way to Hogwarts.";
  } else {
    title = "😶 You might be a Muggle…";
  }

  resultElement.innerHTML = `
    <h2>${title}</h2>
    <p>You scored ${score} out of ${questions.length}</p>
  `;
  resultElement.classList.remove("hide");
  nextButton.innerText = "Play Again";
  nextButton.style.display = "inline-block";
}

// 🔁 Add a single click listener ONCE at the start
nextButton.addEventListener("click", handleNextQuestion);

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  startScreen.classList.add("hide");           // hide start screen
  quizContainer.classList.remove("hide");      // show quiz
  questionGif.classList.remove("hide");

  currentQuestionIndex = 0;
  score = 0;
  resultElement.classList.add("hide");
  resultElement.innerHTML = "";
  document.getElementById("question-container").classList.remove("hide");
  questionCounter.classList.remove("hide");
  nextButton.innerText = "Next";
  showQuestion();
}


