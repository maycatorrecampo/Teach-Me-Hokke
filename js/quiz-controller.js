(function(app) {
    app.controllers = app.controllers || {};

    var constants = app.data.constants,
        questions = app.data.questions,
        answers = app.data.answers,
        images = app.data.images;

    var currentQuestion,
        totalScore = 0,
        totalAnswered = 0;

    var getQuestion = function() {
        currentQuestion = questions.splice(pickRandomIndex(questions), 1)[0];
        totalAnswered++;
        return currentQuestion;
    };

    var pickRandomIndex = function(arrayList) {
        return Math.floor(Math.random() * arrayList.length);
    };

    var isCorrect = function(objarray) {
        return objarray.id === currentQuestion.answerId;
    };

    var getTotalAnswered = function() {
        return totalAnswered;
    };

    var getScore = function() {
        return totalScore;
    };

    var incrementAnswered = function() {
        totalAnswered++;
    };

    var getPercentage = function() {
        return Math.floor((totalScore / constants.TOTAL_QUESTIONS) * 100);
    };

    var shuffle = function(array) {
        var currentIndex = array.length,
            temporaryValue,
            randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        };

          return array;
    };

    var getChoices = function() {
        var ansArray = [];
        var answersCopy = answers.slice(0);
        for(var i = 0; i < constants.TOTAL_CHOICES; i++) {
            var index = pickRandomIndex(answersCopy);
            ansArray.push(answersCopy.splice(pickRandomIndex(answersCopy), 1)[0]);
        };
        //See if correct answer is among the choices//

        if(ansArray.find(isCorrect) == undefined) {
            ansArray.pop();
            ansArray.push(answersCopy.find(isCorrect));
            ansArray = shuffle(ansArray);
        }
        return ansArray;
    };

    var getCharacter = function() {
        return "url('" + images[currentQuestion.imageId].url + "')";
    };

    var checkCorrectAnswer = function(id) {
       if (isCorrect({"id" : id})) {
          totalScore++;;
          app.views.quiz.showAnswer(true, id);
       } else {
         app.views.quiz.showAnswer(true, currentQuestion.answerId);
         app.views.quiz.showAnswer(false, id);
       }
    };

    app.controllers.quiz = {
        getQuestion: getQuestion,
        getChoices: getChoices,
        getCharacter: getCharacter,
        checkCorrectAnswer: checkCorrectAnswer,
        getTotalAnswered: getTotalAnswered,
        incrementAnswered: incrementAnswered,
        getScore: getScore,
        getPercentage: getPercentage
    };
})(window.app = window.app || {});