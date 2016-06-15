(function(app) {

app.data = app.data || {};

//CONSTANTS
var TOTAL_CHOICES = 4;
var TOTAL_QUESTIONS = 2;
    
//DATA
var questions = [
    {"id": "1", "answerId":"4", "imageId": "0", "text": "Tommy was a real <span class=\"underline \"> avid <\/span> baseball card collector. He inherited the desire to collect cards because his dad had a collection, too."},
    {"id": "2", "answerId": "8", "imageId": "1", "text": "The boy was caught stealing from the store. His <span class=\"underline \"> larceny <\/span>caught up with him when the owner showed him a video tape."}
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
    {"id": "10", "text": "embellish"}
];

var images = [
    {"id": "0", "url": "images/qimage-mika.png"},
    {"id": "1", "url": "images/qimage-shinobu.png"}
];


app.data.questions = questions;
app.data.answers = answers;
app.data.constants = {
    TOTAL_CHOICES: TOTAL_CHOICES,
    TOTAL_QUESTIONS: TOTAL_QUESTIONS
};
app.data.images = images;

})(window.app = window.app || {});