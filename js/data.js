(function(app) {

app.data = app.data || {};

//CONSTANTS
var TOTAL_CHOICES = 4,
    TOTAL_QUESTIONS = 5;

//DATA
var questions = [
    {"id": "1", "answerId":"4", "imageId": "0", "text": "Mika was a real <span class=\"underline \"> avid <\/span> model train collector. He inherited the desire to collect because his dad had a collection, too."},
    {"id": "2", "answerId": "8", "imageId": "1", "text": "The boy was caught stealing from the store. His <span class=\"underline \"> larceny <\/span>caught up with him when the owner showed him a video tape."},
    {"id": "3", "answerId": "11", "imageId": "2", "text": "My brother <span class=\"underline \"> loathes <\/span> squid, but he loves it when we have beef stew for dinner."},
    {"id": "4", "answerId": "15", "imageId": "3", "text": "His <span class=\"underline\"> eternal <\/span> light would shine on the people even after his death. He will always be remembered."},
    {"id": "5", "answerId": "20", "imageId": "4", "text": "The principal encouraged the students to <span class=\"underline \"> economise <\/span> their weekly allowances rather than wasting it on junk food."}
];

var answers = [
    {"id":"1", "text": "free"},
    {"id":"2", "text": "careless"},
    {"id":"3", "text": "fearful"},
    {"id":"4", "text": "eager"},
    {"id":"5", "text": "apart"},
    {"id":"6", "text": "forceful"},
    {"id":"7", "text": "angry"},
    {"id":"8", "text": "theft"},
    {"id":"9", "text": "gift"},
    {"id": "10", "text": "embellish"},
    {"id": "11", "text": "dislikes"},
    {"id":"12", "text": "gripe"},
    {"id": "13", "text": "remains"},
    {"id": "14", "text": "temporary"},
    {"id":"15", "text": "endless"},
    {"id": "16", "text": "rapidly"},
    {"id": "17", "text": "amazing"},
    {"id":"18", "text": "surprised"},
    {"id": "19", "text": "lawless"},
    {"id": "20", "text": "save"}
];

var images = [
    {"id": "0", "url": "images/qimage-mika.png"},
    {"id": "1", "url": "images/qimage-shinobu.png"},
    {"id": "2", "url": "images/qimage-koga.png"},
    {"id": "3", "url": "images/qimage-ritsu.png"},
    {"id": "4", "url": "images/qimage-tsukasa.png"}
];

var eventCg = [
    {"image": "images/cg1.png", "dialogue": "I see you scored really high on the English Test. Color me impressed."},
    {"image": "images/cg2.png", "dialogue": "I look forward to how well you'll do in the next exam. I'll do my best as well."},
    {"image": "images/cg3.png", "dialogue": "So, um.. Would you like to go on a study date with me?"},
    {"image": "images/cg4.png", "dialogue": ""}
];


app.data.questions = questions;
app.data.answers = answers;
app.data.constants = {
    TOTAL_CHOICES: TOTAL_CHOICES,
    TOTAL_QUESTIONS: TOTAL_QUESTIONS
};
app.data.images = images;
app.data.eventCg = eventCg;

})(window.app = window.app || {});