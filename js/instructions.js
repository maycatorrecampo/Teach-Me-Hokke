(function(app) {
    
    app.views = app.views || {};


    var startQuiz = function() {
        document.getElementById('instruction-container').style.display = "none";
        //app.views.quiz.render();
    };

    var render = function() {
        document.getElementById('instruction-container').style.display = "block";
        document.getElementById('instr-next').addEventListener('click', startQuiz);

    };

    app.views.instructions = {
        render: render
    }


})(window.app = window.app || {});