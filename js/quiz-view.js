(function(app){
    app.views = app.views || {};
    
    var constants = app.data.constants;
    var quizControl = app.controllers.quiz;
  
    var finishQuiz = function() {
        alert("Quiz Finished");
        //app.views.results.render()
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
            c.innerHTML += "<p class='choice' id='" + choices[i].id + "' onClick= 'app.views.quiz.checkAnswer(this.id)'>" + choices[i].text + "</p>";
        }
    };
  
    var checkAnswer = function(id) {
        quizControl.checkCorrectAnswer(id);
        var next = document.getElementById("quiz-next")
        next.style.display = "block";
        
        next.addEventListener('click', 
        (constants.TOTAL_QUESTIONS >= quizControl.getTotalAnswered()) ?
          function() {
            //clear choices
            document.getElementById('quiz-choices').innerHTML = "";
            loadQuestions();
          }
        : finishQuiz());
    };

    var render = function(){
        document.getElementById('quiz-container').style.display = "block";
        loadQuestions();
    };
    
    
    app.views.quiz = {
        render: render,
        checkAnswer: checkAnswer
    };
    
})(window.app = window.app || {});