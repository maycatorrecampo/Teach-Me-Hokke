(function(app) {
    
    app.views = app.views || {};


    var startQuiz = function() {
        document.getElementById('instruction-container').style.display = "none";
        app.views.quiz.render();
    };

    String.prototype.replaceAll = function(target, replacement) {
        return this.split(target).join(replacement);
    }

    var render = function() {
        
        var instruct = document.getElementById('instruction-container').getElementsByClassName("instr-text")[0]
        //chained replace
       // var newText = instruct.innerHTML.replaceAll(app.data.original.idolName, app.data.replacement.idolName).replaceAll(app.data.original.nickname, app.data.replacement.nickname);
        //instruct.innerHTML = newText;
        document.getElementById('instruction-container').style.display = "block";
        document.getElementById('instr-next').addEventListener('click', startQuiz);

    };

    app.views.instructions = {
        render: render
    }


})(window.app = window.app || {});