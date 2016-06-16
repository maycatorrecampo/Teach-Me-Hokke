(function(app){

    app.views = app.views || {};

    var quizControl = app.controllers.quiz;
    var eventImage = app.data.eventCg;
    var framectr = 0;

    var frame = 0;
    var delay;

    var showScoreCard = function() {
        document.getElementById("score-percentage").innerHTML = quizControl.getPercentage() + " %";
        document.getElementById("score").innerHTML = "You got " + quizControl.getScore() + " out of " + app.data.constants.TOTAL_QUESTIONS + "!";
        layoutButtons();
    };

    var layoutButtons = function() {
        if(quizControl.getPercentage() > 79) {
            var trigger = document.getElementById('view-event-button');
              trigger.style.display = "block";
              trigger.addEventListener('click', loveEventTrigger);
            
        }
        else 
            document.getElementById('return-title').addEventListener('click', returnToTitle);
    };

    var returnToTitle = function() {
        window.location.reload(false);
    };

    var loveEventTrigger = function() {
        document.getElementById("results-container").style.display = "none";
        document.getElementById("event-container").style.display = "block";
        document.getElementById("next-frame").addEventListener('click', imageGet);
        //initial frame get//
        imageGet();
    };

    var imageGet = function() {
        if(framectr < eventImage.length){
            document.getElementById("chara-pic").style.backgroundImage = "url('" + eventImage[framectr].image + "')";
            document.getElementById("dialogue").innerHTML = eventImage[framectr].dialogue;
            framectr++
            if(framectr === eventImage.length - 1){
              document.getElementById("next-frame").innerHTML = "Go On A Date!";
              document.getElementById("dialogue-window").style.backgroundColor = "#F5F3BB";
            }
            else if(framectr === eventImage.length){
              document.getElementById("next-frame").innerHTML = "Back To Title";
              document.getElementById("dialogue-window").style.backgroundColor = "#F5F3BB";
            };
        }
        else
            returnToTitle();
    };


    var render = function() {
        document.getElementById("results-container").style.display = "block";
        showScoreCard();
    };


    app.views.results = {
        render: render
    };

})(window.app = window.app || {});