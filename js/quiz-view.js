(function(app){
    app.views = app.views || {};

    var constants = app.data.constants;
    var quizControl = app.controllers.quiz;

    var finishQuiz = function() {
        document.getElementById('quiz-container').style.display = "none";
        app.views.results.render();
    };

    var quizCallback = function() {
            //clear choices
            document.getElementById('quiz-choices').innerHTML = "";
            (constants.TOTAL_QUESTIONS > quizControl.getTotalAnswered()) ? loadQuestions() : finishQuiz();
    };

    var loadQuestions = function() {
        document.getElementById("quiz-next").style.display = "none";
        
        //render question//
        document.getElementById('quiz-question').innerHTML = quizControl.getQuestion().text;

        //render character//
        document.getElementById('quiz-chara').style.backgroundImage = quizControl.getCharacter();

        //render choices//
        var choices = quizControl.getChoices();
        var c = document.getElementById('quiz-choices')
        for(var i = 0; i < constants.TOTAL_CHOICES; i++){
            c.innerHTML += "<p class='choice' id='" + choices[i].id + "'>" + choices[i].text + "</p>";
        };

        //add click event to choices//
        var p = document.querySelectorAll('p.choice');
        for (var i = 0; i < p.length; i++) {
            p[i].addEventListener("click", checkAnswer);
        };
    };

    var showAnswer = function(isCorrect, id) {
        choice = document.getElementById(id)
        isCorrect ? choice.style.backgroundColor = "#7FB069" : choice.style.backgroundColor = "#A31621";
    };

    var removeClickEvent = function() {
        //remove click events
        var choices = document.getElementsByTagName("p");
        for(var i = 0; i < choices.length; i++){
            choices[i].removeEventListener('click', checkAnswer);
        }
    };

    var checkAnswer = function() {
        quizControl.checkCorrectAnswer(this.id);
        var next = document.getElementById("quiz-next")
        next.style.display = "block";

        //add listener for next button
        next.addEventListener('click', quizCallback, false);
        removeClickEvent();
        
    };

    var render = function(){
        document.getElementById('quiz-container').style.display = "block";
        loadQuestions();
    };
    

    app.views.quiz = {
        render: render,
        checkAnswer: checkAnswer,
        showAnswer: showAnswer
    };

})(window.app = window.app || {});