(function(app) {

    app.views = app.views || {};

    var clickStart = function(){
        document.getElementById("startup-container").style.display = "none";
        app.views.instructions.render();
    };

    var render = function(){
        document.getElementById("startup-container").style.display = "block";
        document.getElementById("title-start").addEventListener('click', clickStart);
    };

    app.views.startup = {
        render: render
    }


})(window.app = window.app || {});