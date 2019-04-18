var card = $("#quiz-area");

// Question set
var questions = [
  {
    question: "In the Lion King, where does Mufasa and his family live?",
    answers: ["Pride Rock", "Swamp Palace", "Ridge Rock", "Pride Palace"],
    correctAnswer: "Pride Rock"
  },
  {
    question: "What town is the setting for the Disney Movie “The Love Bug?”",
    answers: ["Louisiana", "San Francisco", "New Mexico", "California"],
    correctAnswer: "San Francisco"
  },
  {
    question:  "What is the name of the boy who owns Buzz Lightyear in the movie Toy Story?",
    answers: ["Woody", "Andy", "Sid", "Molly"],
    correctAnswer: "Woody"
  },
  {
    question: "Which Disney princess has a raccoon as a bestfriend?",
    answers: ["Pocahontas", "SnowWhite", "Ciderella", "Belle"],
    correctAnswer: "Pocahontas"
  },
  {
    question: "In the movie Finding Nemo, which country has Nemo been taken to?",
    answers: ["Purto Rico", "New Zeland", "Canada", "Aulstralia"],
    correctAnswer: "Aulstralia"
  },
];

// Variable that will hold the setInterval
var timer;

var game = {
  correct: 0,
  incorrect: 0,
  counter: 60,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend(
      "<h2>Time Remaining: <span id='counter-number'>60</span> Seconds</h2>"
    );

    $("#start").remove();
    $("#p").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    card.append("<button id='done'>Done</button>");
  },

  done: function() {
    var inputs = card.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    }
    this.result();
  },

  result: function() {
    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});

$(document).on("click", "#done", function() {
  game.done();
});