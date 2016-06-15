(function(app){

    app.views = app.views || {};

    var quizControl = app.controllers.quiz;
    var eventImage = app.data.eventCg;
    var framectr = 0;

    var frame = 0;

    var showScoreCard = function() {
        document.getElementById("score-percentage").innerHTML = quizControl.getPercentage() + " %";
        document.getElementById("score").innerHTML = "You got " + quizControl.getScore() + " out of " + app.data.constants.TOTAL_QUESTIONS + "!";
    };

    var layoutButtons = function() {
        if(quizControl.getPercentage() > 90) {
            var trigger = document.getElementById('view-event-button');
            trigger.style.display = "block";
            trigger.addEventListener('click', loveEventTrigger());
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
    };

    var imageGet = function() {
        if(framectr < eventImage.length){
            document.getElementById("chara-pic").style.backgroundImage = "url('" + eventImage[framectr].image + "')";
            document.getElementById("dialogue").innerHTML = eventImage[framectr].dialogue;
            framectr++
        }
        else
            returnToTitle();
    };


    var render = function() {
        document.getElementById("results-container").style.display = "block";
        showScoreCard();
        layoutButtons();
    };


    app.views.results = {
        render: render
    };

})(window.app = window.app || {});