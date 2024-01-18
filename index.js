class Question {
  constructor(question, choices, answer) {
    this.question = question;
    this.choices = choices;
    this.answer = answer;
  }
}

const questions = [
  new Question(
    "Quelle méthode Javascript permet de filtrer les éléments d'un tableau",
    ["indexOf()", "map()", "filter()", "reduce()"],
    "filter()"
  ),
  new Question(
    "Quelle méthode Javascript permet de vérifier si un élément figure dans un tableau",
    ["isNaN()", "includes()", "findIndex()", "isOdd()"],
    "includes()"
  ),
  new Question(
    "Quelle méthode transforme du JSON en un objet Javascript ?",
    ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toJS"],
    "JSON.parse()"
  ),
  new Question(
    "Quel objet Javascript permet d'arrondir à l'entier le plus proche",
    ["Math.ceil()", "Math.floor()", "Math.round()", "Math.random()"],
    "Math.round()"
  ),
];

let currentQuestion = 0;
let score = 0;

const utils = {
  questionContent: function (q, c) {
    document.querySelector("h2").textContent = q;
    document.querySelector(".choices").textContent = "";
    c.forEach((choice) => {
      const btn = document.createElement("button");
      btn.textContent = choice;
      document.querySelector(".choices").appendChild(btn);
    });
    document.querySelector("#progress").textContent =
      "Question : " + (currentQuestion + 1) + "/" + questions.length;
  },

  handleAnswer: function () {
    document.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.textContent === questions[currentQuestion].answer) {
          score++;
          currentQuestion++;
        } else {
          currentQuestion++;
        }

        if (currentQuestion < questions.length) {
          page.quizz();
        } else {
          page.finish();
        }
      });
    });
  },
};

const page = {
  quizz: function () {
    utils.questionContent(
      questions[currentQuestion].question,
      questions[currentQuestion].choices
    );
    utils.handleAnswer();
  },

  finish: function () {
    document.querySelector("h1").textContent = "Quiz terminé !";
    document.querySelector("h2").textContent = "";
    document.querySelector("h3").textContent =
      "Score : " + score + "/" + questions.length;
    document.querySelector(".choices").textContent = "";
    document.querySelector("#progress").textContent = "";
  },
};

page.quizz();
